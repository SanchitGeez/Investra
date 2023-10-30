import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
    number: {type:Number, unique: true},
    ticker: {type:String, unique: true},
    name: {type:String, unique: true}
});

const StockModel = mongoose.model('Stock', StockSchema);

export default StockModel;
