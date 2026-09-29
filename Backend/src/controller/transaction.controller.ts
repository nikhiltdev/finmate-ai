import { createTransactionService , getAllTransactionService , getTransactionByIdService , deleteTransactionService , updateTransactionService } from "../services/transaction.service.js";
import type { Request, Response } from "express";


export async function createTransactionCotroller(req:Request, res:Response){
    try{
        const Transaction = await createTransactionService({...req.body ,  userId: req.user!._id.toString()})
        return res.status(201).json({
            success : true,
            message : "Transaction created successfully",
            data : Transaction
        })
    }
    catch(error: any)
    {
        console.log(error.message)
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export async function getAllTransactionController(req:Request, res:Response)
{
    const userId = req.user!._id.toString();
    try{
        const Transaction = await getAllTransactionService(userId);
        return res.status(200).json({
            success : true,
            message : "Transactions fetched successfully",
            data : Transaction
        })
    }
    catch(error: any)
    {
        console.log(error.message)
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export async function getTransactionByIdController(req:Request , res:Response)
{
    const transactionId = req.params.transactionId;
    try{
        const transaction = await getTransactionByIdService(transactionId);
        return res.status(200).json({
            success : true,
            message : "Transaction fetched successfully",
            data : transaction
        })
    }
    catch(error:any)
    {
        console.log(error.message)
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export async function deleteTransactionController(req:Request , res:Response)
{
    const transactionId = req.params.transactionId;
    const userId = req.user!._id.toString();
    try{
        const transaction = await deleteTransactionService(userId,transactionId);
        return res.status(200).json({
            success : true,
            message : "Transaction deleted successfully",
            data : transaction
        })
    }
    catch(error:any)
    {
        console.log(error.message)
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export async function updateTransactionController(req:Request , res:Response)
{
    try{
        const transactionId = req.params.transactionId
        const userId = req.user!._id.toString();
        const transaction = await updateTransactionService({userId , transactionId , ...req.body});
        return res.status(200).json({
            success : true,
            message : "Transaction updated successfully",
            data : transaction
        })
    }
    catch(error:any)
    {
        console.log(error.message)
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}