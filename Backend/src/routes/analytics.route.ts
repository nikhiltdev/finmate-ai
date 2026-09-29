import express from "express";
import {getTotalIncomeController , getTotalExpenseController ,getTotalBalanceController,getExpenseByCategoryController , addTransactionController , generateBudgetController } from "../controller/analytics.controller.js";
import { authMiddleware } from "../middleware/user.middleware.js";

const analyticsRouter = express.Router();

analyticsRouter.get("/total-income/:type", authMiddleware ,getTotalIncomeController)
analyticsRouter.get("/total-expense/:type", authMiddleware ,getTotalExpenseController)
analyticsRouter.get("/total-balance/:type", authMiddleware ,getTotalBalanceController)
analyticsRouter.get("/expense-by-category/:category", authMiddleware ,getExpenseByCategoryController)
analyticsRouter.post("/add-transaction", authMiddleware ,addTransactionController)
analyticsRouter.get("/generate-budget", authMiddleware ,generateBudgetController)

export default analyticsRouter