import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"
dotenv.config()
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function aiResponseService({
    tools: tools,
    prompt: prompt
}) {
    try {
        console.log("========== AI SERVICE ==========");
        console.log("PROMPT:", prompt);
        console.log("TOOLS:");
        console.dir(tools, { depth: null });

        const response = await ai.interactions.create({
            model: "gemini-3.5-flash-lite",
            input: prompt,
            tools: tools,
        });

        console.log("========== GEMINI RESPONSE ==========");
        console.dir(response, { depth: null });

        for (const step of response.steps) {
            if (step.type === "function_call") {
                console.log("Tool name:", step.name);
                console.log("Arguments:", step.arguments);
            }
        }

        return response;

    } catch (error: any) {
        console.error("AI SERVICE ERROR:", error);

        throw new Error("Failed to get response from AI");
    }
}