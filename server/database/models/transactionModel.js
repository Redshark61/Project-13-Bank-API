import mongoose from "mongoose";
import schema from "mongoose/lib/schema.js";

const {Schema} = mongoose;
let HistorySchema = new Schema({
    date: String,
    description: String,
    amount: Number,
    currency: String,
    type: String,
    balance: Number,
    notes: String,
    category_id: schema.Types.ObjectId,
    transaction_type: String
})

let transactionSchema = new Schema({
    parent_id: schema.Types.ObjectId,
    user_id: schema.Types.ObjectId,
    history: [HistorySchema]
});

export default mongoose.model("Transactions", transactionSchema);
