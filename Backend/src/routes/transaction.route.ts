import { createTransactionCotroller , getAllTransactionController , getTransactionByIdController , deleteTransactionController ,updateTransactionController } from "../controller/transaction.controller.js";
import { authMiddleware } from "../middleware/user.middleware.js";
import express from "express";

const transactionRoutes = express.Router()

transactionRoutes.post("/create-transaction", authMiddleware ,createTransactionCotroller)
transactionRoutes.get("/getall-transaction" , authMiddleware , getAllTransactionController)
transactionRoutes.get("/get-transaction/:transactionId" , authMiddleware , getTransactionByIdController)
transactionRoutes.delete("/delete-transaction/:transactionId" , authMiddleware , deleteTransactionController)
transactionRoutes.patch("/update-transaction/:transactionId" , authMiddleware , updateTransactionController)
export default transactionRoutes