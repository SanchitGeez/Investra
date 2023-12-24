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


const app = express();

//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
const isAuth=async(req,res,next)=>{
  const {token}  = req.cookies;
  if(token){
    // console.log(token);
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
  const newUser = {...req.body,"password":hashedPassword,"balance":0}
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
app.post('/login',async function(req,res){
  try {
    const {email,password} = req.body;
    const userData = await UserModel.findOne({email: email});

    if (!userData) {
      return res.status(404).send('User not found');
    }

    if(await bcrypt.compare(userData.password,password)){
      res.status(401).send('Incorrect password')
    }
    else{
      res.cookie("token",jwt.sign({_id:userData._id},"jwtrandomstring"),{
        httpOnly:true,
        expires:new Date(Date.now() + 60*1000)
      })
      const response = {
        userId:userData._id,
        username:userData.username,
        email:email,
        message:"Login Successful",
        jwt:req.cookies.token
      }
      return res.status(200).json(response);
    }

  } catch (error) {
      console.error('Error:', error);
      res.status(500).send('An error occurred');
  }
  const {email,password} = req.body;
  const userData = await UserModel.findOne({email: email});
})

app.get('/logout',(req,res)=>{
  res.cookie("token",null),{
    httpOnly:true,
    expires:new Date(Date.now())
  }
  res.status(200).send("Logout successful")
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

//Purchase stocks
app.post('/stocks/purchase', isAuth,async function(req,res) {

  const buyStock = await AccountModel.findOne({userId:req.activeUser._id,ticker:req.body.ticker})
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
  }else{
    let marketInfo = {};
    try {
      const apiResponse = await axios.get('http://api.marketstack.com/v1/eod/latest?access_key='+ params.access_key+'&symbols='+req.body.ticker+'.XNSE');
      marketInfo = apiResponse.data.data[0];
      //console.log(marketInfo)
    } catch (error) {
      console.error(error);
    }
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

app.listen(4000);
