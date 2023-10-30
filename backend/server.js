import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import UserModel from './models/User.js';
import StockModel from './models/Stock.js';
import stockList from './common/stocks.js';
import AccountModel from './models/Account.js';

const app = express();

//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


//Database Connection
mongoose.connect("mongodb://127.0.0.1:27017",{
  dbName: "Investra"
})
.then(()=> console.log("Database connected"))
.catch((e)=>{
  console.log("Database connection failed" + e);
});


app.get('/',function(req,res){
  console.log("Server started on port 3000");
  res.send("Server Home");
})


//Signup user
app.post('/signup',function(req,res) {
  UserModel.create(req.body)
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

    if(password != userData.password){
      res.status(401).send('Incorrect password')
    }
    else{
      const response = {
        userId:userData._id,
        username:userData.username,
        email:email,
        message:"Login Successful"
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
app.post('/stocks/purchase', async function(req,res) {
  const stockInfo = await StockModel.findOne({ticker:req.body.ticker});
  const request = {
    quantity:req.body.quantity,
    price:req.body.price,
    userId:req?.body.userId,
    stockId:stockInfo._id,
  }
  AccountModel.create(request);
  res.send('Purchase successfull')
})

app.listen(4000);
