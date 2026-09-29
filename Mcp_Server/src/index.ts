import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { z } from "zod";
import {
    getTotalIncome,
    getTotalExpenses,
    addTransaction
} from "./tools/analyize.tools.js";


const server = new McpServer({
    name: "Finmate Mcp Server",
    version: "1.0.0"
});


// Get access token from MCP process environment
const accessToken = process.env.FINMATE_ACCESS_TOKEN;

if (!accessToken) {
    throw new Error("FINMATE_ACCESS_TOKEN is missing");
}


// Get Total Income
server.registerTool(
    "getTotalIncome",
    {
        title: "getTotalIncome",

        description: "Get the total income of the user",

        inputSchema: {
            type: z.string().describe(
                "Transaction type, e.g. 'income'"
            ),
        },
    },

    async function getTotalIncomeTool({ type }) {

        try {

            const response = await getTotalIncome(
                type,
                accessToken
            );

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(response),
                    },
                ],
            };

        } catch (err) {

            return {
                content: [
                    {
                        type: "text",
                        text: `Error: ${
                            err instanceof Error
                                ? err.message
                                : String(err)
                        }`,
                    },
                ],

                isError: true,
            };
        }
    }
);


// Get Total Expense
server.registerTool(
    "getTotalExpense",
    {
        title: "getTotalExpense",

        description: "Get the total expense of the user",

        inputSchema: {
            type: z.string().describe(
                "Type of expense, e.g. 'expense'"
            ),
        },
    },

    async function getTotalExpenseTool({ type }) {

        try {

            const response = await getTotalExpenses(
                type,
                accessToken
            );

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(response),
                    },
                ],
            };

        } catch (err) {

            return {
                content: [
                    {
                        type: "text",
                        text: `Error: ${
                            err instanceof Error
                                ? err.message
                                : String(err)
                        }`,
                    },
                ],

                isError: true,
            };
        }
    }
);

server.registerTool("addTransaction" , {
    title : "addTransaction",
    description : "Add a new transaction",
    inputSchema : {
        type : z.object({
            type : z.string().describe("Transaction type, e.g. 'income' or 'expense'"),
            amount : z.number().describe("Transaction amount"),
            category : z.string().describe("Transaction category"),
            date : z.string().describe("Transaction date in YYYY-MM-DD format"),
            description : z.string().describe("Transaction description"),
        })
    },
},async function addTransactionTool({type , amount , category , date , description})
{
    try {
        const response = await addTransaction(
            type,
            amount,
            category,
            date,
            description,
            accessToken
        );

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(response),
                },
            ],
        };

    } catch (err) {

        return {
            content: [
                {
                    type: "text",
                    text: `Error: ${
                        err instanceof Error
                            ? err.message
                            : String(err)
                    }`,
                },
            ],

            isError: true,
        };
    }
})




async function main() {

    const transport = new StdioServerTransport();

    await server.connect(transport);

    console.error("Finmate MCP Server running on stdio");
}


main().catch((error) => {

    console.error(
        "Fatal error in main():",
        error
    );

    process.exit(1);
});