import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import UserModel from './models/User.js';
import StockModel from './models/Stock.js';
import stockList from './common/stocks.js';
import AccountModel from './models/Account.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import axios from 'axios';
import ServerlessHttp from 'serverless-http';
import nodemailer from 'nodemailer';
const app = express();

//Middlewares
const lambda = ServerlessHttp(app);
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
  origin:"*"
}));
app.use(cookieParser());
const isAuth=async(req,res,next)=>{
  //console.log(req)
  const {token}  = req.headers;
  //console.log(token)
  if (!token) return res.status(401).send("Login first");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.activeUser = await UserModel.findById(decoded._id);
        next();
    } catch (error) {
        return res.status(401).send("Invalid or expired token");
    }
}
const params = {
  access_key: process.env.MARKETSTACK_API_KEY,
  db_password:process.env.DB_PASSWORD
}
//Database Connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
})
.then(() => console.log("Database connected"))
.catch((e) => {
  console.log("Database connection failed: " + e);
});


//HOME
app.get('/',function(req,res){
  console.log("Server started on port 3000");
  res.send("Server Home");
})

//Signup user
app.post('/signup', async function(req, res) {
  try {
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    const newUser = { ...req.body, "password": hashedPassword };
    await UserModel.create(newUser);
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
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

// Forget Password Feature
app.post('/send-otp',async function(req,res) {
  try
  {
    const {email} = req.body;

    const userData= await UserModel.findOne({email:email});
    if(userData)
    {
      const otp = generateOTP();
      const transporter = nodemailer.createTransport(
        {
          host: "smtp.gmail.com",
          port:465,
          secure: true,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
          }
        }
      );

      transporter.sendMail(
        {
          to: email,
          from: process.env.EMAIL,
          subject: "OTP for password reset",
          text: `Your OTP for password reset is ${otp}`,
          html: `<b>Your OTP for password reset is ${otp}</b>`,
        }).catch((error) => {
          console.log(error);
          return res.status(500).send(error);
        });

      await UserModel.updateOne({email:email},{$set:{otp:otp}}); //updating otp in database
    }
    else
    {
      return res.status(404).send("User not found");
    }
    return res.status(200).send("OTP Sent");
  }
  catch(error)
  {
    console.log(error);
    return res.status(500).send(error);
  }
  
})

app.post('/verify-otp',async function(req,res) {
  try
  {
    const {email,otp} = req.body;
    const userData= await UserModel.findOne({email:email});
    if(userData)
    {
      if(userData.otp==otp)
      {
        return res.status(200).send("OTP Verified");
      }
      else
      {
        return res.status(401).send("Invalid OTP");
      }
    }
    else
    {
      return res.status(404).send("User not found");
    }
  }
  catch(error)
  {
    console.log(error);
    return res.status(500).send(error);
  } 
})

app.post("/change-password",async function(req,res){
    try
    {
      const {email,password} = req.body;
      const userData= await UserModel.findOne({email:email});
      if(userData){
        const hashedPassword = await bcryptjs.hash(password,10);
        await UserModel.updateOne({email:email},{$set:{password:hashedPassword}});
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

//Login user
app.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body;
    const userData = await UserModel.findOne({ email: email });

    if (userData) {    
      const isPasswordValid = await bcryptjs.compare(password, userData.password);
      if (isPasswordValid) {
        const token = jwt.sign({ _id: userData._id }, process.env.JWT_SECRET);
        res.cookie('token', token, {
          httpOnly: false,
          expires: new Date(Date.now() + 60 * 1000 * 10),
        });
        const response = {
          userId: userData._id,
          username: userData.username, 
          email: email,
          balance: userData.balance,
          message: 'Login Successful',
          jwt:token
        };
        return res.status(200).json(response);
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

app.get('/logout',(req,res)=>{
  try {
    res.cookie("token",0),{
      httpOnly:true,
      expires:Date.now()
    }
    res.status(200).send("Logout successful")

    
  }catch (error) {
    console.error('Error updating balance:', error.message);
    res.status(500).send("Internal Server Error");
  }
})

//Refresh stock database
app.get('/stocks/list', async function(req,res){
  
  await stockList.forEach(stock =>{
    const newStock = {
      number:stock.number,
      ticker:stock.ticker,
      name:stock.name
    }
    StockModel.create(newStock);
  });
  
  res.send("stock list updated")
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

app.get("/stock/data",async function(req,res,next){
  try {
    const query = req.query.q;

    console.log(query);
  // if (!query) {
  //     return res.status(400).json({ message: 'Query parameter "q" is required' });
  // }

  //     const response = await axios.get(`https://query1.finance.yahoo.com/v1/finance/search`, {
  //         params: {
  //             q: query,
  //             quotesCount: 5,
  //             newsCount: 0,
  //             enableFuzzyQuery: false,
  //             quotesQueryId: 'tss_match_phrase_query',
  //             multiQuoteQueryId: 'multi_quote_single_token_query',
  //             region: 'US',
  //             lang: 'en-US',
  //         },
  //     })

  //   console.log(response.data);

  //   const symbol = response.data.quotes[0].symbol.slice(0,-3);
  
  //   console.log(symbol);
  //   // Fetch the stock list
  //   const resp = await axios.get('https://eodhistoricaldata.com/api/exchange-symbol-list/NSE', {
  //     params: {
  //       api_token: '67140e4f624e22.73357466',
  //     },
  //     responseType: 'text',
  //   });
  
  //   // Split the response text by new lines to get each row (CSV format)
  //   const lines = resp.data.split('\n');
    let isin;
  
    // Parse each line and look for the specific symbol
    const stocksWithISIN = [
      { name: 'Reliance', isin: 'INE002A01018' },
      { name: 'Tata', isin: 'INE155A01022' },
      { name: 'Infosys', isin: 'INE009A01021' },
      { name: 'HDFC', isin: 'INE001A01036' },
      { name: 'Wipro', isin: 'INE075A01022' },
      { name: 'ICICI', isin: 'INE185A01016' },
      { name: 'Adani', isin: 'INE523A01024' },
      { name: 'ITC', isin: 'INE154A01025' },
      { name: 'Bharti Airtel', isin: 'INE397D01024' },
      { name: 'Bajaj Auto', isin: 'INE235A01016' },
      { name: 'Larsen & Toubro', isin: 'INE018A01030' },
      { name: 'Maruti Suzuki', isin: 'INE585B01010' },
      { name: 'HCL Technologies', isin: 'INE868A01027' },
      { name: 'Mahindra & Mahindra', isin: 'INE101A01026' },
      { name: 'Tata Steel', isin: 'INE081A01012' },
      { name: 'ONGC', isin: 'INE213A01029' },
      { name: 'Hindalco', isin: 'INE038A01015' },
      { name: 'Axis Bank', isin: 'INE238A01034' },
      { name: 'SBI', isin: 'INE062A01020' },
      { name: 'Kotak Mahindra', isin: 'INE237A01024' },
      { name: 'Asian Paints', isin: 'INE021A01026' },
      { name: 'Sun Pharma', isin: 'INE044A01036' },
      { name: 'Tech Mahindra', isin: 'INE769A01024' },
      { name: 'JSW Steel', isin: 'INE019A01038' },
      { name: 'Titan Company', isin: 'INE280A01028' },
      { name: 'UltraTech Cement', isin: 'INE481G01011' },
      { name: 'Grasim Industries', isin: 'INE046A01013' },
      { name: 'Power Grid Corporation', isin: 'INE752E01010' },
      { name: 'NTPC', isin: 'INE733E01010' },
      { name: 'Coal India', isin: 'INE522F01014' },
      { name: 'BPCL', isin: 'INE029A01011' },
      { name: 'Hero MotoCorp', isin: 'INE158A01026' },
      { name: 'Nestle India', isin: 'INE239A01016' },
      { name: 'IndusInd Bank', isin: 'INE095A01016' },
      { name: 'Divi’s Laboratories', isin: 'INE361B01024' },
      { name: 'Bajaj Finserv', isin: 'INE918I01018' },
      { name: 'Zee Entertainment', isin: 'INE256A01026' },
      { name: 'Apollo Hospitals', isin: 'INE437A01024' },
      { name: 'Godrej Consumer Products', isin: 'INE102D01025' },
      { name: 'PVR', isin: 'INE191E01014' },
      { name: 'Tata Motors', isin: 'INE155A01027' },
      { name: 'Eicher Motors', isin: 'INE066A01022' },
      { name: 'Dabur', isin: 'INE016A01026' },
      { name: 'Bata India', isin: 'INE176A01029' },
      { name: 'Dr. Reddy’s Laboratories', isin: 'INE089A01023' },
      { name: 'Motherson Sumi', isin: 'INE102A01010' },
      { name: 'Siemens', isin: 'INE003A01024' },
      { name: 'ABB India', isin: 'INE117A01014' },
      { name: 'GAIL', isin: 'INE129A01019' },
      { name: 'Bharat Forge', isin: 'INE464A01016' },
      { name: 'Pidilite Industries', isin: 'INE234A01025' },
      { name: 'Muthoot Finance', isin: 'INE414F01012' },
      { name: 'IRCTC', isin: 'INE532E01030' },
      { name: 'Shree Cement', isin: 'INE070A01018' },
      { name: 'Cipla', isin: 'INE059A01026' },
      { name: 'Biocon', isin: 'INE376G01013' },
      { name: 'Havells India', isin: 'INE176B01024' },
      { name: 'Ashok Leyland', isin: 'INE158A01026' },
      { name: 'Tata Power', isin: 'INE245A01021' },
      { name: 'Exide Industries', isin: 'INE302A01020' },
      { name: 'Voltas', isin: 'INE226A01013' },
      { name: 'Colgate-Palmolive', isin: 'INE259A01012' },
      { name: 'Britannia', isin: 'INE221A01026' },
      { name: 'Federal Bank', isin: 'INE171A01013' },
      { name: 'Jubilant FoodWorks', isin: 'INE797F01012' },
      { name: 'InterGlobe Aviation', isin: 'INE742F01027' },
      { name: 'Hindustan Unilever', isin: 'INE030A01027' },
      { name: 'Godrej Properties', isin: 'INE484J01027' },
      { name: 'Glenmark Pharma', isin: 'INE935A01032' },
      { name: 'Mangalore Refinery', isin: 'INE169A01014' },
      { name: 'Aurobindo Pharma', isin: 'INE406A01037' },
      { name: 'Crompton Greaves', isin: 'INE399D01026' },
      { name: 'Hindustan Zinc', isin: 'INE267A01025' },
      { name: 'Torrent Power', isin: 'INE195G01027' },
      { name: 'TVS Motor', isin: 'INE494B01023' },
      { name: 'Ambuja Cements', isin: 'INE079A01024' },
      { name: 'Pfizer', isin: 'INE529A01025' },
      { name: 'Sun TV Network', isin: 'INE949D01010' },
      { name: 'Escorts', isin: 'INE600A01024' },
      { name: 'Yes Bank', isin: 'INE528G01011' },
      { name: 'MindTree', isin: 'INE018T01012' },
      { name: 'Max Healthcare', isin: 'INE221B01019' },
      { name: 'Aditya Birla Fashion', isin: 'INE100A01025' },
      { name: 'Avenue Supermarts', isin: 'INE192R01014' },
      { name: 'Zydus Wellness', isin: 'INE803A01022' },
      { name: 'IDFC First Bank', isin: 'INE092T01018' },
      { name: 'Page Industries', isin: 'INE761H01025' },
      { name: 'Blue Star', isin: 'INE189A01023' },
      { name: 'Bajaj Holdings', isin: 'INE118A01026' },
      { name: 'Lupin', isin: 'INE326D01028' },
      { name: 'Emami', isin: 'INE496B01020' },
      { name: 'Kajaria Ceramics', isin: 'INE195J01027' },
      { name: 'Berger Paints', isin: 'INE463A01022' },
      { name: 'L&T Finance', isin: 'INE147A01013' },
      { name: 'Mphasis', isin: 'INE356A01019' },
      { name: 'Quess Corp', isin: 'INE102T01011' },
      { name: 'Syngene International', isin: 'INE134Z01025' },
      { name: 'Manappuram Finance', isin: 'INE926D01022' },
      { name: 'SpiceJet', isin: 'INE800A01014' },
      { name: 'Indiabulls Housing Finance', isin: 'INE148D01024' },
      { name: 'Sunteck Realty', isin: 'INE121I01027' },
      { name: 'NMDC', isin: 'INE586A01011' },
      { name: 'Bombay Dyeing', isin: 'INE081A01023' },
      { name: 'Ramco Cements', isin: 'INE172C01039' },
      { name: 'ICICI Prudential', isin: 'INE765G01015' }
    ]

    isin = stocksWithISIN.find(stock => stock.name.includes(query))?.isin;

    console.log(isin)
  
    // If ISIN is not found, return a 404 error
    if (!isin) {
      return res.status(404).json({ message: 'Stock not found' });
    }
  
    // Helper function to check if a given date is a holiday
    const isHoliday = async (date) => {
      try {
        const holidayResponse = await axios.get(`https://api.upstox.com/v2/market/holidays/${date}`);
        return holidayResponse.data.isHoliday;
      } catch (error) {
        console.error('Error checking holiday status:', error);
        return false; // Default to not a holiday in case of API error
      }
    };
  
    // Helper function to get formatted date string (YYYY-MM-DD)
    const formatDate = (date) => date.toISOString().split('T')[0];
  
    // Get the current date and time
    const currentDate = new Date();
    let currentTime = currentDate.getHours() * 60 + currentDate.getMinutes(); // Convert time to minutes
    let stockDetails;
    
    // Define the time range for intraday data (9:15 AM to 3:30 PM)
    const startTime = 9 * 60 + 15; // 9:15 AM in minutes
    const endTime = 15 * 60 + 30;  // 3:30 PM in minutes
    
    // Set up date for API calls, starting with today
    let dateToFetch = formatDate(currentDate);
    let count = 0;
  
    // Retry logic in case of holiday or empty data
    const retryFetchStockDetails = async () => {
      while (true && count < 5) {
        if (await isHoliday(dateToFetch)) {
          console.log(`Market holiday on ${dateToFetch}, retrying with previous day`);
          currentDate.setDate(currentDate.getDate() - 1);
          dateToFetch = formatDate(currentDate);
          continue;
        }
        
        if (currentTime >= startTime && currentTime <= endTime) {
          // Fetch intraday data if within market hours
          stockDetails = await axios.get(`https://api.upstox.com/v2/historical-candle/intraday/NSE_EQ|${isin}/1minute/`, {
            headers: { "Accept": "application/json" },
          });
        } else {
          // Fetch historical data for the day
          console.log(`Fetching historical data for ${dateToFetch}`);
          stockDetails = await axios.get(`https://api.upstox.com/v2/historical-candle/NSE_EQ|${isin}/1minute/${dateToFetch}/${dateToFetch}`, {
            headers: { "Accept": "application/json" },
          });
        }
  
        // If stock data is available, return it
        if (stockDetails?.data?.data?.candles?.length > 0) {
          count++;
          return stockDetails;
  
        } else {
          count++;
          console.log(`No data for ${dateToFetch}, retrying with previous day`);
          currentDate.setDate(currentDate.getDate() - 1);
          dateToFetch = formatDate(currentDate);
        }
      }
    };
  
    stockDetails = await retryFetchStockDetails();
    
    return res.json(stockDetails?.data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return res.status(500).json({ message: 'An error occurred' });
  }
  
})



app.listen(process.env.PORT,()=>{
  console.log(`Server started on port ${process.env.PORT}`);
});

export default app;
// export async function handler(event, context) {
//   return lambda(event, context)
// }
