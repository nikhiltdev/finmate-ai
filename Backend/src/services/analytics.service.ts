import transactionModel from "../model/transaction.model.js";
import mongoose from "mongoose";
import { aiResponseService } from "../services/ai.service.js"
export async function getTotalIncomeService(userId: String, type: String) {
    try {
        if (!type.includes("income")) {
            throw new Error("Invalid type")
        }
        const data = await transactionModel.aggregate([
            {
                $match: {
                    userId: new mongoose.Types.ObjectId(userId),
                    type: type
                }
            },
            {
                $group: {
                    _id: null,
                    totalAmount: {
                        $sum: "$amount"
                    }
                }
            }
        ]);
        console.log("Total Income: " + data[0]?.totalAmount || 0);
        const totalIncome = data[0]?.totalAmount || 0;
        return totalIncome
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error("Failed to get total income")
    }
}

export async function getTotalExpenseService(userId: String, type: String) {
    console.log(userId)
    try {
        if (!type.includes("expense")) {
            throw new Error("Invalid type")
        }
        const data = await transactionModel.aggregate([
            {
                $match: {
                    userId: new mongoose.Types.ObjectId(userId),
                    type: type
                }
            },
            {
                $group: {
                    _id: null,
                    totalExpense: {
                        $sum: "$amount"
                    }
                }
            }
        ]);
        console.log("Total Expense: " + data[0]?.totalExpense || 0);
        const totalExpense = data[0]?.totalExpense || 0;
        return totalExpense
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error("Failed to get total expense")
    }
}

export async function getTotalBalanceService(userId: String) {
    try {
        const totalIncome = await getTotalIncomeService(userId, "income");
        const totalExpense = await getTotalExpenseService(userId, "expense");
        const totalBalance = totalIncome - totalExpense;
        return totalBalance
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error("Failed to get total balance")
    }
}

export async function getExpenseByCategoryService(userId: String, category: String) {
    try {
        const data = await transactionModel.aggregate([
            {
                $match: {
                    userId: new mongoose.Types.ObjectId(userId),
                    category: category
                }
            },
            {
                $group: {
                    _id: null,
                    totalExpense: {
                        $sum: "$amount"
                    }
                }
            }
        ]);
        console.log("Total Expense: " + data[0]?.totalExpense || 0);
        const totalExpense = data[0]?.totalExpense || 0;
        return totalExpense
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error("Failed to get expense by category")
    }
}

export async function generateBudgetService(userId: string) {
    try {
        const user = new mongoose.Types.ObjectId(userId) || null
        const userData = await transactionModel.find({
            userId: user
        }).select("type amount category date description").lean()
        console.log(userData)
        const prompt = `
You are a personal finance budgeting assistant.

Analyze the user's financial transaction data and create a practical monthly budget.

User transaction data:
${JSON.stringify(userData, null, 2)}

Your task:

1. Calculate the user's total income.
2. Calculate the user's total expenses.
3. Calculate the remaining balance.
4. Group expenses by category.
5. Identify the categories where the user spends the most.
6. Suggest a realistic monthly budget according to the user's actual income and spending habits.
7. Allocate a budget for each major expense category.
8. Keep some amount for savings and emergency funds.
9. Do not suggest a budget greater than the user's income.
10. If the income or transaction data is insufficient, clearly mention it.

Budget rules:

- Total category budgets must not exceed the monthly income.
- Prioritize essential expenses such as food, rent, bills, transport, and healthcare.
- Suggest savings only when the user's income allows it.
- Avoid unrealistic assumptions.
- Use the user's actual transaction data.
- If multiple months of data are available, calculate average monthly income and expenses.
- Explain why each budget amount was suggested.

Return the response in the following JSON format only:

{
  "summary": {
    "averageMonthlyIncome": 0,
    "averageMonthlyExpense": 0,
    "estimatedMonthlySavings": 0
  },
  "recommendedBudget": [
    {
      "category": "food",
      "suggestedLimit": 0,
      "reason": "Reason for this amount"
    }
  ],
  "savingsRecommendation": {
    "amount": 0,
    "percentage": 0,
    "reason": "Savings explanation"
  },
  "insights": [
    "Insight about the user's spending"
  ],
  "warnings": [
    "Warning if expenses are too high or data is insufficient"
  ]
}
`;


        console.log("========== AI PROMPT ==========");
        console.log(prompt);
        console.log("==============================");


        // =========================
        // CALL GEMINI
        // =========================

        const aiResult = await aiResponseService({
            tools: [],
            prompt: prompt
        });


        console.log("========== AI RESULT ==========");
        console.dir(aiResult, { depth: null });
        console.log("==============================");


        // =========================
        // GET GEMINI GENERATED TEXT
        // =========================

        const outputText = aiResult.output_text;

        console.log("GEMINI OUTPUT TEXT:");
        console.log(outputText);

        if (!outputText) {
            throw new Error("Gemini returned empty output");
        }

        const cleanedOutput = outputText
            .replace(/^```json\s*/i, "")
            .replace(/\s*```$/i, "")
            .trim();

        const budget = JSON.parse(cleanedOutput);

        return budget;
    } catch (error: any) {

        console.log("Generate Budget Error:", error.message);

        throw new Error("Failed to generate budget");
    }
}