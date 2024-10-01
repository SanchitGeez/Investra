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

const app = express();

//Middlewares
const lambda = ServerlessHttp(app);
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
const isAuth=async(req,res,next)=>{
  //console.log(req)
  const {token}  = req.headers;
  //console.log(token)
  if(token!=0){
    const decoded = jwt.verify(token,"jwtrandomstring");
    // console.log(decoded);
    req.activeUser = await UserModel.findById(decoded._id);
    next()
  }else{
    res.status(401).send("Login first")
  }
}
const params = {
  access_key: process.env.MARKETSTACK_API_KEY,
  db_password:process.env.DB_PASSWORD
}
//Database Connection
mongoose.connect("mongodb+srv://sanchit3546:"+params.db_password+"@investra-cluster0.usvnjhx.mongodb.net/?retryWrites=true&w=majority",{
  dbName: "Investra"
})
.then(()=> console.log("Database connected"))
.catch((e)=>{
  console.log("Database connection failed" + e);
});


//HOME
app.get('/',function(req,res){
  console.log("Server started on port 3000");
  res.send("Server Home");
})

//Signup user
app.post('/signup',async function(req,res) {
  try {
    const hashedPassword = await bcryptjs.hash(req.body.password,10);
    const newUser = {...req.body,"password":hashedPassword}
    await UserModel.create(newUser);
    res.send("User added successfully");
  } catch (error) {
    res.send("Couldn't add user");
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
        const token = jwt.sign({ _id: userData._id }, 'jwtrandomstring');
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

app.listen(process.env.PORT);

export default app;
// export async function handler(event, context) {
//   return lambda(event, context)
// }