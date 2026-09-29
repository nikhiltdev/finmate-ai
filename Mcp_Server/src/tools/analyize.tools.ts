import axios from "axios";

export async function getTotalIncome(
    type: string,
    accessToken: string
) {

    const response = await axios.get(
        `http://localhost:3000/api/total-income/${type}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );

    return response.data;
}

export async function getTotalExpenses(type:string , token:string)
{
    const response = await axios.get(`http://localhost:3000/api/total-expense/${type}`,{
        headers:{
            Cookie: `accessToken=${token}`
        },
        withCredentials:true,
    })  
    return response.data;
}

export async function addTransaction(
    type: string,
    amount: number,
    category: string,
    date: string,
    description: string,
    token: string
) {
    try {

        const requestBody = {
            type,
            amount,
            category,
            date,
            description
        };

        console.log("========== MCP ADD TRANSACTION ==========");
        console.log("BODY:");
        console.log(requestBody);

        console.log("TOKEN EXISTS:", !!token);
        console.log("TOKEN LENGTH:", token?.length);

        const response = await axios.post(
            "http://localhost:3000/api/add-transaction",
            requestBody,
            {
                headers: {
                    Cookie: `accessToken=${token}`,
                    "Content-Type": "application/json"
                },
                withCredentials: true
            }
        );

        console.log("BACKEND RESPONSE:");
        console.log(response.data);

        return response.data;

    } catch (error: any) {

        console.log("========== ADD TRANSACTION ERROR ==========");

        console.log("MESSAGE:", error.message);
        console.log("STATUS:", error.response?.status);
        console.log("RESPONSE:", error.response?.data);

        throw error;
    }
}