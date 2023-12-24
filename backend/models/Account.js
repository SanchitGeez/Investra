import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types; // Destructure ObjectId from Schema.Types

const AccountSchema = new mongoose.Schema({
    userId: { type: ObjectId },
    stockId: { type: ObjectId },
    ticker:{type:String},
    quantity: { type: Number },
    price: { type: Number },
    createdAt: { type: Date, default: Date.now },
});

const AccountModel = mongoose.model('Account', AccountSchema);

export default AccountModel;
