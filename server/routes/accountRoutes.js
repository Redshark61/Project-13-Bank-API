import tokenValidation from "../middleware/tokenValidation.js";
import accountsController from "../controllers/accountsController.js";
import express from "express";
const router = express.Router();

router.get(
    '/accounts',
    tokenValidation,
    accountsController.getUserAccounts
)
router.get(
    '/transactions',
    tokenValidation,
    accountsController.getUserTransactions
)

export default router