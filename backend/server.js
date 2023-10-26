import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import UserModel from './models/User.js';
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
  res.send("Server Home")
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
  console.log(userData);
})



app.listen(4000);
