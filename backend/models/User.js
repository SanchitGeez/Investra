// userModel.js
// Importing the necessary libraries
import mongoose from 'mongoose';  // Mongoose for MongoDB object modeling
import { v4 as uuidv4 } from 'uuid';

// Defining the User schema that will be used to model a user in the MongoDB database.
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true}, // `username` field: A required string that will represent the user's username.
   // `email` field: A required string that will store the user's email address.
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      // Custom email validation using a regular expression to ensure a valid email format
      validator: function (value) {
        // Use a regular expression to check if the value is a valid email address
        return /\S+@\S+\.\S+/.test(value);   // Basic regex to validate email format
      },
      message: 'Invalid email format',    // Error message when validation fails
    },
  },
  password: { type: String, required: true },            // `password` field: A required string to store the user's password.
  balance: {type:Number,default:0},                      // `balance` field: A number that represents the user's balance in some application (e.g., in an e-commerce or banking system)
  createdAt: { type: Date, default: Date.now },          // `createdAt` field: A date that stores when the user was created.
  otp:{type:Number,default : null}
});
const UserModel = mongoose.model('User', UserSchema); // Change the model name to 'User'

export default UserModel; // Export 'User' instead of 'UserModel'
