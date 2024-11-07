import mongoose from "mongoose";          // Importing the mongoose library to interact with MongoDB
const { ObjectId } = mongoose.Schema.Types; // Destructure ObjectId from Schema.Types

// Defining the schema for the "Account" collection.
// A schema in mongoose defines the structure of the documents within the collection.
const AccountSchema = new mongoose.Schema({
    userId: { type: ObjectId },          // userId field: Stores the reference to the user that owns the account.
    stockId: { type: ObjectId },         // stockId field: Stores the reference to the stock related to this account.
    ticker:{type:String},                // ticker field: Stores the stock ticker symbol
    quantity: { type: Number },           // quantity field: Stores the number of shares the user owns in this stock.
    price: { type: Number },              // price field: Stores the price at which the user bought the stock.
    ltp:{type:Number},                    // ltp field: Represents the "Last Traded Price" for the stock.
    createdAt: { type: Date, default: Date.now },   // createdAt field: Automatically stores the date and time when the account was created.
});

// Creating the model for the "Account" collection based on the schema defined above.
// The model is a class that provides an abstraction layer to interact with the MongoDB collection.
const AccountModel = mongoose.model('Account', AccountSchema);

// Exporting the AccountModel so it can be used in other parts of the application to interact with the "Account" collection.
export default AccountModel;
