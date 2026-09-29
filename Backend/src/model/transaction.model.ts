import mongoose from "mongoose";
import type{ Transaction } from "../types/transaction.types.js"

const transactionSchema = new mongoose.Schema<Transaction>({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    type:{
        type:String,
        enum:["income" , "expense"],
        required:[true , "Type is required"]
    },
    category:{
        type:String,
        required:[true , "Category is required"],
        trim:true
    },
    amount:{
        type:Number,
        required:[true , "Amount is required"],
        min:0
    },
    description:{
        type:String,
        required:[true , "Description is required"],
        trim:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:[true , "Date is required"]
    }
},{
    timestamps:true
})

const transactionModel = mongoose.model("Transaction" , transactionSchema);

export default transactionModel;