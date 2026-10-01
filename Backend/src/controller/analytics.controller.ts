import type {Request , Response} from "express";
import { getTotalIncomeService , getTotalExpenseService , getTotalBalanceService , getExpenseByCategoryService , generateBudgetService} from "../services/analytics.service.js";
import { createTransactionService } from "../services/transaction.service.js";


export async function addTransactionController(
    req: Request,
    res: Response
) {
    try {
        console.log("CONTROLLER BODY:", req.body);

        const userId = req.user!._id.toString();

        const result = await createTransactionService({
            ...req.body,
            userId
        });

        return res.status(201).json({
            success: true,
            message: "Transaction added successfully",
            data: result
        });
    } catch (error: any) {
        console.log(error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to add transaction"
        });
    }
}

export async function getTotalIncomeController(req: Request , res: Response) {
    try {
      const userId = req.user!._id.toString();
      const type = req.params.type;
      
      const data = await getTotalIncomeService(userId, type as string)
      
      return res.status(200).json({
        success : true,
        message : `Total Income Fetched Successfully. ${JSON.stringify(data)}`,
      })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : "Failed to get total income"
        })
    }
}

export async function getTotalExpenseController(req: Request , res: Response) {
    try {
      const userId = req.user!._id.toString();
      const type = req.params.type;
      
      const data = await getTotalExpenseService(userId, type as string)
      
      return res.status(200).json({
        success : true,
        message : `Total Expense Fetched Successfully. ${JSON.stringify(data)}`,
      })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : "Failed to get total expense"
        })
    }
}

export async function getTotalBalanceController(req: Request , res: Response) {
    try {
      const userId = req.user!._id.toString();
      const type = req.params.type;
      
      const data = await getTotalBalanceService(userId, type as string)
      
      return res.status(200).json({
        success : true,
        message : `Total Balance Fetched Successfully. ${JSON.stringify(data)}`,
      })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : "Failed to get total balance"
        })
    }
}

export async function getExpenseByCategoryController(req: Request , res: Response) {
    try {
      const userId = req.user!._id.toString();
      const category = req.params.category;
      
      const data = await getExpenseByCategoryService(userId, category as string)
      
      return res.status(200).json({
        success : true,
        message : `Expense By Category Fetched Successfully. ${JSON.stringify(data)}`,
      })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : "Failed to get expense by category"
        })
    }
}


//Ai Analisis Tools
export async function generateBudgetController(req:Request , res:Response)
{
    try{
        const userId = req.user!._id.toString();

        const aiResponse = await generateBudgetService(userId);
        
        return res.status(200).json({
            success : true,
            message : `Budget Generated Successfully. ${JSON.stringify(aiResponse)}`,
        })
    }
    catch(error)
    {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : "Failed to generate budget"
        })
    }
}