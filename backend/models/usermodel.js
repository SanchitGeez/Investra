const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 10000 },
  stocks: { type: Array, default: [] },
  watchlist: { type: [String], default: [] }, // Add watchlist as an array of stock symbols
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
