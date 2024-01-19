// userModel.js

import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Use a regular expression to check if the value is a valid email address
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email format',
    },
  },
  password: { type: String, required: true },
  balance: {type:Number,default:0},
  createdAt: { type: Date, default: Date.now },
});
const UserModel = mongoose.model('User', UserSchema); // Change the model name to 'User'

export default UserModel; // Export 'User' instead of 'UserModel'
