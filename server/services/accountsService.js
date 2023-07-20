import jwt from "jsonwebtoken";
import User from "../database/models/userModel.js";
import Accounts from "../database/models/accountsModel.js";
import Transactions from "../database/models/transactionModel.js";
import CategoriesModel from "../database/models/categoriesModel.js";

const getUserAccounts = async serviceData => {
    try {
        const jwtToken = serviceData.headers.authorization.split("Bearer")[1].trim();
        const decodedJwtToken = jwt.decode(jwtToken);
        const user = await User.findOne({_id: decodedJwtToken.id});
        if (!user) {
            throw {message: "No account not found for the given token!", type: 401};
        }

        return await Accounts.find({user_id: user._id});
    } catch (error) {
        console.error("Error in userService.js getUserAccounts", error);
        throw {message: "An error occurred while getting user accounts!: " + error.message, type: 500};
    }
};

const getUserTransactions = async serviceData => {
    try {
        const account_id = serviceData.query.account_id;
        return await Transactions.findOne({parent_id: account_id}).populate("history");
    } catch (error) {
        console.error("Error in userService.js getUserTransactions", error);
        throw {message: "An error occurred while getting user transactions!: " + error.message, type: 500};
    }
}

const getCategories = async serviceData => {
    try {
        return await CategoriesModel.find({});
    } catch (error) {
        console.error("Error in userService.js getCategories", error);
        throw {message: "An error occurred while getting categories!: " + error.message, type: 500};
    }
}

export default {
    getUserAccounts,
    getUserTransactions,
    getCategories
}