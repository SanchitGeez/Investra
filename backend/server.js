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
import bcrypt from 'bcrypt';
import axios from 'axios';


//TODO: balance update on purchase
//TODO: scroll area for stocks
//TODO: live price fetch - profit calculation based on price - per stock & total
//TODO: Add balance function

const app = express();

//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
const isAuth=async(req,res,next)=>{
  //console.log(req)
  const {token}  = req.headers;
  console.log(token)
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
  access_key: '24970f7e7ba06eb0e5efdb7e7df880cc'
}

//Database Connection
mongoose.connect("mongodb://127.0.0.1:27017",{
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
  const hashedPassword = await bcrypt.hash(req.body.password,10);
  const newUser = {...req.body,"password":hashedPassword}
  UserModel.create(newUser)
  .then(()=>{
    res.send("User added successfully")
  })
  .catch((e)=>{
    console.error("Error adding user:", e);
    res.status(400).send("Couldn't add user: " + e);
  });

})

//Login user
app.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body;
    const userData = await UserModel.findOne({ email: email });

    if (!userData) {
      return res.status(404).send('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, userData.password);

    if (!isPasswordValid) {
      return res.status(401).send('Incorrect password');
    }

    const token = jwt.sign({ _id: userData._id }, 'jwtrandomstring');

    res.cookie('token', token, {
      httpOnly: false,
      expires: new Date(Date.now() + 60 * 1000 * 10),
    });

    const response = {
      userId: userData._id,
      username: userData.username, // Assuming you have a 'username' field in your user model
      email: email,
      balance: userData.balance,
      message: 'Login Successful',
      jwt:token
    };

    return res.status(200).json(response);
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
    console.log(balance);
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


//Purchase stocks
app.post('/stocks/purchase', isAuth,async function(req,res) {

  const buyStock = await AccountModel.findOne({userId:req.activeUser._id,ticker:req.body.ticker})
  console.log(buyStock)
  if(!buyStock){
    const stockInfo = await StockModel.findOne({ticker:req.body.ticker});
    
    let marketInfo = {};
    try {
      const apiResponse = await axios.get('http://api.marketstack.com/v1/eod/latest?access_key='+ params.access_key+'&symbols='+req.body.ticker+'.XNSE');
      marketInfo = apiResponse.data.data[0];
      //console.log(marketInfo)
    } catch (error) {
      console.error(error);
    }  

    if((parseFloat(marketInfo.close) * parseInt(req.body.quantity))>req.activeUser.balance){
      res.status(400).send("Insufficient funds")
    }else{
      //call stocks/get
      // console.log(marketInfo)
      const request = {
        quantity:req.body.quantity,
        price:marketInfo.close,
        userId:req.activeUser._id,
        stockId:stockInfo._id,
        ticker:req.body.ticker
      }
      await AccountModel.create(request);
      await UserModel.updateOne({_id:req.activeUser._id},{balance:parseInt(req.activeUser.balance)-parseInt(parseFloat(marketInfo.close) * parseInt(req.body.quantity))})
    }

  }else{

    let marketInfo = {};
    try {
      const apiResponse = await axios.get('http://api.marketstack.com/v1/eod/latest?access_key='+ params.access_key+'&symbols='+req.body.ticker+'.XNSE');
      marketInfo = apiResponse.data.data[0];
      //console.log(marketInfo)
    } catch (error) {
      console.error(error);
    }

    if((parseFloat(marketInfo.close) * parseInt(req.body.quantity))>req.activeUser.balance){
      res.status(400).send("Insufficient funds")
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
      await UserModel.updateOne({_id:req.activeUser._id},{balance:parseInt(req.activeUser.balance)-parseInt(parseFloat(marketInfo.close) * parseInt(req.body.quantity))})
    }

  }

  res.send('Purchase successfull')
})

//Sell stocks
app.post('/stocks/sell', isAuth, async function(req,res){
  console.log(req.body._id)
  const sellStock = await AccountModel.findOne({userId:req.activeUser._id,ticker:req.body.ticker})
  console.log(sellStock);
  if(sellStock.quantity>=req.body.quantity){
    await AccountModel.updateOne({_id:sellStock._id},{quantity:sellStock.quantity-req.body.quantity})
  }
  //check price

  res.send("Stock sold successfully")
})

app.post('/stocks/get', isAuth, async function(req,res){
  console.log('hit stocks get')
  const ownedStocks = await AccountModel.find({userId:req.activeUser._id})
  res.send(ownedStocks);
})

app.listen(4000);
