import mongoose from "mongoose";

const {Schema} = mongoose;

let categoriesSchema = new Schema({
        name: String,
    }
);

export default mongoose.model("Categories", categoriesSchema);
