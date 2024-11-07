// Importing necessary libraries and modules
import 'dotenv/config';                           // To load environment variables from .env file
import express from 'express';                   // Web framework for building APIs
import mongoose from 'mongoose';                 // MongoDB object modeling for interacting with database
import bodyParser from 'body-parser';            // Middleware for parsing JSON requests
import cors from 'cors';                        // Middleware for enabling Cross-Origin Resource Sharing
import UserModel from './models/User.js';        // Importing the User model
import StockModel from './models/Stock.js';      // Importing the Stock model
import stockList from './common/stocks.js';      // A predefined list of stocks
import AccountModel from './models/Account.js';  // Importing the Account model to handle user's stock data
import cookieParser from 'cookie-parser';       // Middleware for parsing cookies
import jwt from 'jsonwebtoken';                 // JSON Web Token for authentication
import bcryptjs from 'bcryptjs';                // Library for hashing passwords
import axios from 'axios';                      // Promise-based HTTP client for making requests
import ServerlessHttp from 'serverless-http';   // For making the Express app compatible with serverless environments
import nodemailer from 'nodemailer';            // To send emails (e.g., for OTP generation)

// Initializing the Express app
const app = express();

//Middlewares
const lambda = ServerlessHttp(app);      // Wrap the express app with ServerlessHttp for AWS Lambda compatibility
app.use(express.urlencoded({extended:true}));   // Middleware for parsing URL-encoded bodies
app.use(bodyParser.json());            // Middleware for parsing JSON bodies
app.use(cors({
  origin:"*"
}));                                 // Enabling Cross-Origin Resource Sharing for handling requests from other domains
app.use(cookieParser());               // Parsing cookies from incoming requests

// Authentication Middleware
const isAuth=async(req,res,next)=>{
  //console.log(req)
  const {token}  = req.headers;                         // Extracting token from headers
  //console.log(token)
  if (!token) return res.status(401).send("Login first");       // If no token, send an error message

    try {
      // Verifying the token using JWT's secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.activeUser = await UserModel.findById(decoded._id);          // Attach user data to request object
        next();                                                       // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).send("Invalid or expired token");        // If token is invalid or expired, send an error
    }
}

// Configuration for external API access (MarketStack API) and database password
const params = {
  access_key: process.env.MARKETSTACK_API_KEY,          // API key for MarketStack API
  db_password:process.env.DB_PASSWORD
}
//Database Connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
})
.then(() => console.log("Database connected"))
.catch((e) => {
  console.log("Database connection failed: " + e);
});


//HOME route
app.get('/',function(req,res){
  console.log("Server started on port 3000");
  res.send("Server Home");             // Send a simple message when the home route is accessed
})

//Signup user
app.post('/signup', async function(req, res) {
  try {
   // Hash the password using bcrypt before storing it
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    const newUser = { ...req.body, "password": hashedPassword };      // Create a new user object
    await UserModel.create(newUser);                                 // Save the user in the database
    const userData = await UserModel.findOne({ email: req.body.email });
    if(userData){
      const token = jwt.sign({ _id: userData._id }, process.env.JWT_SECRET);
        res.cookie('token', token, {
          httpOnly: false,
          expires: new Date(Date.now() + 60 * 1000 * 10),
        });
        const response = {
          userId: userData._id,
          username: userData.username, 
          email: newUser.email,
          balance: userData.balance,
          message: 'User added successfully',
          jwt:token
        };
        return res.status(200).json(response);
    }
    else{
      return res.status(401).send('Error');
    }
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send("Couldn't add user");
  }
});

//OTP Genrator
const generateOTP = () => {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 5; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];    // Generate a random 5-digit OTP
  }
  return OTP;
}

// Send OTP for password reset route
app.post('/send-otp',async function(req,res) {
  try
  {
    const {email} = req.body;                        // Get email from request body

    const userData= await UserModel.findOne({email:email});       // Check if user exists in the database
    if(userData)
    {
      const otp = generateOTP();                          // Generate OTP
      const transporter = nodemailer.createTransport(
        {
          host: "smtp.gmail.com",
          port:465,
          secure: true,
          auth: { 
            user: process.env.EMAIL,               //Sender email from environment variables
            pass: process.env.PASSWORD             // Sender email password from environment variables
          }
        }
      );

       // Sending OTP email
      transporter.sendMail(
        {
          to: email,                                        // Recipient email
          from: process.env.EMAIL,                            // Sender email
          subject: "OTP for password reset",
          text: `Your OTP for password reset is ${otp}`,
          html: `<b>Your OTP for password reset is ${otp}</b>`,
        }).catch((error) => {
          console.log(error);
          return res.status(500).send(error);                 // Handle any errors during email sending
        });

          // Save the OTP in the database
      await UserModel.updateOne({email:email},{$set:{otp:otp}}); //updating otp in database
    }
    else
    {
      return res.status(404).send("User not found");        // If user doesn't exist
    }
    return res.status(200).send("OTP Sent");                 // Send success message
  }
  catch(error)
  {
    console.log(error);
    return res.status(500).send(error);   // Send error if any
  }
  
})

// Verify OTP route
app.post('/verify-otp',async function(req,res) {
  try
  {
    const {email,otp} = req.body;                            // Get email and OTP from request body
    const userData= await UserModel.findOne({email:email});   // Check if user exists
    if(userData)
    {
      if(userData.otp==otp)
      {
        return res.status(200).send("OTP Verified");         // If OTP matches, send success message
      }
      else
      {
        return res.status(401).send("Invalid OTP");           // If OTP doesn't match, send error
      }
    }
    else
    {
      return res.status(404).send("User not found");         // If user doesn't exist
    }
  }
  catch(error)
  {
    console.log(error);
    return res.status(500).send(error);
  } 
})

// Change password route
app.post("/change-password",async function(req,res){
    try
    {
      const {email,password} = req.body;                       // Get email and new password from request body
      const userData= await UserModel.findOne({email:email});  // Check if user exists
      if(userData){
        const hashedPassword = await bcryptjs.hash(password,10);   // Hash the new password
        await UserModel.updateOne({email:email},{$set:{password:hashedPassword}});    // Update the user's password in the database
        return res.status(200).send("Password changed successfully");
      }
      else{
        return res.status(404).send("User not found");
      }
    }
    catch(error)
    {
      console.log(error);
      return res.status(500).send(error);
    }
  })

//User Login route
app.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body;                    // Get email and password from request body
    const userData = await UserModel.findOne({ email: email });

    if (userData) {    
      const isPasswordValid = await bcryptjs.compare(password, userData.password);  // Check if the provided password matches the stored hashed password
      if (isPasswordValid) {
        const token = jwt.sign({ _id: userData._id }, process.env.JWT_SECRET);  // Generate JWT token
        res.cookie('token', token, {                  // Set token as a cookie
          httpOnly: false,
          expires: new Date(Date.now() + 60 * 1000 * 10),         // Cookie expires after 10 minutes
        });
        const response = {
          userId: userData._id,
          username: userData.username, 
          email: email,
          balance: userData.balance,
          message: 'Login Successful',
          jwt:token
        };
        return res.status(200).json(response);   // Send login success response
      }else{
        return res.status(401).send('Incorrect password');
      }
    }else{
      return res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('An error occurred');
  }
});

// Logout route
app.get('/logout',(req,res)=>{
  try {
     // Clear the cookie by setting an expired date
    res.cookie("token",0),{
      httpOnly:true,
      expires:Date.now()
    }
    res.status(200).send("Logout successful")

    
  }catch (error) {
    console.error('Error updating balance:', error.message);
    res.status(500).send("Internal Server Error");   // Handle any errors
  }
})

//Refresh stock database
app.get('/stocks/list', async function(req,res){
   // Iterate through the stock list and add/update stock in the database
  await stockList.forEach(stock =>{
    const newStock = {
      number:stock.number,
      ticker:stock.ticker,
      name:stock.name
    }
    StockModel.create(newStock);   // Create new stock entry in the database
  });
  
  res.send("stock list updated")    // Send success message
})

//Add Balance
app.post('/getBalance', isAuth, async function(req,res){
  try {
    const { balance } = await UserModel.findOne({ _id: req.body.userId });
    //console.log(balance);
    res.status(200).send({balance});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
// Add Balance
app.post('/addBalance', isAuth, async function(req, res) {
  try {
    const newBalance = parseInt(req.body.balance) + parseInt(req.activeUser.balance);

    // Use await to ensure the update is completed before sending the response
    await UserModel.findByIdAndUpdate(
      { _id: req.activeUser._id },
      { $set: { balance: newBalance } }
    );

    res.status(200).send("Balance added");
  } catch (error) {
    console.error('Error updating balance:', error.message);
    res.status(500).send("Internal Server Error");
  }
});


//update close price(ltp)
app.post('/stocks/update', isAuth, async function(req,res){
  //console.log('hit stocks update')
  const ownedStocks = await AccountModel.find({userId:req.activeUser._id})

  let apiUrl = "http://api.marketstack.com/v1/eod/latest?access_key="+ params.access_key+"&symbols=";

  ownedStocks.forEach(stock => {
    apiUrl = apiUrl + stock.ticker + ".XNSE,";
  });
  const apiResponse =  await axios.get(apiUrl.slice(0,-1));
  const latestData =apiResponse.data.data;

  for (let i = 0; i < ownedStocks.length; i++) {
    await AccountModel.updateOne({_id:ownedStocks[i]._id},{ltp:latestData[i].close})
  }
  res.send("Stocks Price updated");
});


//Purchase stocks
app.post('/stocks/purchase', isAuth,async function(req,res) {

  const buyStock = await AccountModel.findOne({userId:req.activeUser._id,ticker:req.body.ticker})
  //console.log(buyStock)
  //buying new stock
  if(!buyStock){
    const stockInfo = await StockModel.findOne({ticker:req.body.ticker});
    if (stockInfo === null) {
      return res.send("Invalid Stock"); // Send response and exit the function
    }

    let marketInfo = {};
    try {
      const apiResponse = await axios.get('http://api.marketstack.com/v1/eod/latest?access_key='+ params.access_key+'&symbols='+req.body.ticker+'.XNSE');
      marketInfo = apiResponse.data.data[0];
      //console.log(marketInfo)
    } catch (error) {
      console.error(error);
    }  

    if((parseFloat(marketInfo.close) * parseInt(req.body.quantity))>req.activeUser.balance){
      res.send("Insufficient funds")
    }else{
      //call stocks/get
      // console.log(marketInfo)
      const request = {
        quantity:req.body.quantity,
        price:marketInfo.close,
        ltp:marketInfo.close,
        userId:req.activeUser._id,
        stockId:stockInfo._id,
        ticker:req.body.ticker
      }
      await AccountModel.create(request);
      await UserModel.updateOne({_id:req.activeUser._id},{balance:parseInt(req.activeUser.balance)-parseInt(parseFloat(marketInfo.close) * parseInt(req.body.quantity))});
      res.send('Purchase successfull');
    }

  }else{//stock already exists
    //console.log("owned stock");

    // Getting LTP
    let marketInfo = {};
    try {
      const apiResponse = await axios.get('http://api.marketstack.com/v1/eod/latest?access_key='+ params.access_key+'&symbols='+req.body.ticker+'.XNSE');
      marketInfo = apiResponse.data.data[0];
      //console.log(marketInfo)
    } catch (error) {
      console.error(error);
    }

    if((parseFloat(marketInfo.close) * parseInt(req.body.quantity))>req.activeUser.balance){
      //console.log("insuff")
      res.send("Insufficient funds");
    }else{
      await AccountModel.updateOne(
        { _id: buyStock._id },
        {
          $set: {
            quantity: parseInt(buyStock.quantity) + parseInt(req.body.quantity),
            price: ((parseFloat(buyStock.price) * parseInt(buyStock.quantity)) +
              (parseFloat(marketInfo.close) * parseInt(req.body.quantity))) /
              (parseInt(buyStock.quantity) + parseInt(req.body.quantity)),
          },
        }
      );
      await UserModel.updateOne({_id:req.activeUser._id},{balance:parseInt(req.activeUser.balance)-parseInt(parseFloat(marketInfo.close) * parseInt(req.body.quantity))});
      res.send('Purchase successfull');

    }

  }
})

//Sell stocks
app.post('/stocks/sell', isAuth, async function(req,res){
  //console.log(req.body._id)
  const sellStock = await AccountModel.findOne({userId:req.activeUser._id,ticker:req.body.ticker})
  //console.log(sellStock);
  try {

    if (sellStock.quantity==req.body.quantity) {
      const {balance} = await UserModel.findOne({_id:req.activeUser._id});
      await UserModel.updateOne({_id:req.activeUser._id},{balance:balance+(sellStock.ltp*req.body.quantity)});
      await AccountModel.deleteOne({_id:sellStock._id})
    }else if(sellStock.quantity>req.body.quantity){
      const {balance} = await UserModel.findOne({_id:req.activeUser._id});
      await UserModel.updateOne({_id:req.activeUser._id},{balance:balance+(sellStock.ltp*req.body.quantity)});
      await AccountModel.updateOne({_id:sellStock._id},{quantity:sellStock.quantity-req.body.quantity})

    }
  } catch (error) {
    res.send("Something went Wrong !!")
  }
  //check price and add price*req.body.quanity to balance
  //adjust average

  res.send("Stock sold successfully")
})

app.post('/stocks/get', isAuth, async function(req,res){
  //console.log('hit stocks get')
  const ownedStocks = await AccountModel.find({userId:req.activeUser._id})

  // let apiUrl = "http://api.marketstack.com/v1/eod/latest?access_key="+ params.access_key+"&symbols=";

  // ownedStocks.forEach(stock => {
  //   apiUrl = apiUrl + stock.ticker + ".XNSE,";
  // });
  // const apiResponse =  await axios.get(apiUrl.slice(0,-1));
  // const latestData =apiResponse.data.data;

  // for (let i = 0; i < ownedStocks.length; i++) {
  //   await AccountModel.updateOne({_id:ownedStocks[i]._id},{ltp:latestData[i].close})
  // }



  res.send(ownedStocks);
})

app.listen(process.env.PORT);

export default app;
// export async function handler(event, context) {
//   return lambda(event, context)
// }
