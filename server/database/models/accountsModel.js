import mongoose from "mongoose";
import schema from "mongoose/lib/schema.js";

const {Schema} = mongoose;

let accountsSchema = new Schema({
        title: String,
        number_of_transactions: Number,
        balance: Number,
        currency: String,
        description: String,
        user_id: schema.Types.ObjectId
    }
);

export default mongoose.model("Accounts", accountsSchema);
