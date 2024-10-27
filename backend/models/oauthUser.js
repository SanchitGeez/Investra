// backend/models/oauthUserModel.js
import mongoose from 'mongoose';

const OauthUserSchema = new mongoose.Schema({
  username: { type: String, required: true },
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
  googleId: { type: String, required: true }, // Store the Google ID
  createdAt: { type: Date, default: Date.now },
});

const OauthUserModel = mongoose.model('OauthUser', OauthUserSchema); // Adjust the model name as needed

export default OauthUserModel;
