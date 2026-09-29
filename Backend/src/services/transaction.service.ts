import transactionModel from "../model/transaction.model.js";
import type { Transaction } from "../types/transaction.types.js"

export async function createTransactionService(
    transaction: Transaction
) {
    try {

        console.log("========== SERVICE ==========");
        console.log("TRANSACTION:");
        console.log(transaction);

        console.log("TYPE:");
        console.log(transaction.type);

        console.log("TYPE JSON:");
        console.log(JSON.stringify(transaction.type));

        console.log("IS VALID:");
        console.log(
            ["income", "expense"].includes(transaction.type)
        );

        if (!["income", "expense"].includes(transaction.type)) {
            throw new Error("Invalid transaction type");
        }

        if (!transaction.category) {
            throw new Error("Please fill the Category");
        }

        if (!transaction.description) {
            throw new Error("Please Fill the description");
        }

        if (transaction.amount <= 0) {
            throw new Error("Amount must be greater than 0");
        }

        const createdTransaction = await transactionModel.create({
            userId: transaction.userId,
            type: transaction.type,
            category: transaction.category,
            amount: transaction.amount,
            description: transaction.description,
            date: transaction.date
        });

        return {
            transaction: createdTransaction
        };

    }
    catch (error) {
        console.log(error.message)
        throw new Error("Failed to create Transaction")
    }
}

export async function getAllTransactionService(userId: string) {
    try {
        const Transaction = await transactionModel.find({
            userId
        })

        if (!Transaction) {
            throw new Error("No transactions found");
        }
        return {
            Transaction
        }
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error("Failed to get transactions")
    }
}

export async function getTransactionByIdService(transactionId: string) {
    try {
        if (!transactionId) {
            throw new Error("Please Provide Transaction ID")
        }
        const Transaction = await transactionModel.findById({
            _id: transactionId
        })

        if (!Transaction) {
            throw new Error("No transaction found");
        }
        return {
            Transaction
        }
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error("Failed to get transaction")
    }
}

export async function deleteTransactionService(userId: string, transactionId: string) {
    try {
        if (!transactionId) {
            throw new Error("Please Provide Transaction ID")
        }
        const Transaction = await transactionModel.findByIdAndDelete({
            _id: transactionId,
            userId
        })

        if (!Transaction) {
            throw new Error("No transaction found");
        }
        return {
            Transaction
        }
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error("Failed to delete transaction")
    }
}

export async function updateTransactionService(transaction: Transaction) {
    try {
        const { transactionId , userId } = transaction
        if (!transactionId) {
            throw new Error("Please Provide Transaction ID")
        }

        if (
            transaction.type &&
            !["income", "expense"].includes(transaction.type)
        ) {
            throw new Error("Invalid transaction type");
        }

        if (transaction.amount !== undefined && transaction.amount <= 0) {
            throw new Error("Amount must be greater than 0");
        }

        const Transaction = await transactionModel.findByIdAndUpdate(
            {
                _id: transactionId,
                userId: userId
            },
            {
                $set: transaction
            },
            {
                returnDocument:"after",
                runValidators: true
            }

        )

        if (!Transaction) {
            throw new Error("No transaction found");
        }
        return {
            Transaction
        }
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error("Failed to update transaction")
    }
}

