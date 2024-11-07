import mongoose from "mongoose"; // Importing the mongoose library to interact with MongoDB

// Defining the schema for the "Stock" collection in MongoDB.
const StockSchema = new mongoose.Schema({
    number: {type:Number, unique: true},   // `number` field: Represents the stock's number, possibly an identifier or a numerical reference.
    ticker: {type:String, unique: true},   // `ticker` field: Represents the stock's ticker symbol
    name: {type:String, unique: true},      // `name` field: Represents the full name of the company associated with the stock.
    close:{type:String}                    // `close` field: Represents the closing price of the stock 
});

// Creating the model for the "Stock" collection based on the schema defined above.
// The model provides an abstraction layer that allows you to interact with the "Stock" collection.
const StockModel = mongoose.model('Stock', StockSchema);

// Exporting the StockModel so that it can be used in other parts of the application for database operations.
export default StockModel;
