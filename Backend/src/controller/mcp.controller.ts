import type { Request, Response } from "express";
import { getMcpClientService } from "../services/mcp.service.js";
import { convertMcpToolsToGeminiTools } from "../services/tool-converter.service.js";
import {
    aiResponseService,
    aiFinalReplyService,
    extractText,
} from "../services/ai.service.js";

export async function McpController(req: Request, res: Response) {
    let client: Awaited<ReturnType<typeof getMcpClientService>> | undefined;

    try {
        const prompt = req.body?.prompt;
        if (typeof prompt !== "string" || !prompt.trim()) {
            return res.status(400).json({ success: false, message: "Prompt is required" });
        }

        const accessToken = req.cookies?.accessToken;
        if (!accessToken) {
            return res.status(401).json({ success: false, message: "User is not authenticated" });
        }

        client = await getMcpClientService(accessToken);

        const toolList = await client.listTools();
        const tools = convertMcpToolsToGeminiTools(toolList);

        // Call 1: Gemini picks a tool
        const geminiResponse = await aiResponseService({ tools, prompt });

        const toolCall: any = geminiResponse.steps?.find(
            (step: any) => step.type === "function_call"
        );

        // No tool needed: return plain text
        if (!toolCall) {
            return res.json({
                success: true,
                reply:
                    extractText(geminiResponse) ||
                    "Sorry, I didn't understand that. Please rephrase.",
            });
        }

        // Run the tool
        const toolResult: any = await client.callTool({
            name: toolCall.name,
            arguments: toolCall.arguments,
        });

        const toolResultText = toolResult.content?.[0]?.text ?? "";

        // Call 2: Gemini writes the final reply
        const reply = await aiFinalReplyService({
            prompt,
            toolName: toolCall.name,
            toolResultText: toolResult.isError
                ? `Error: ${toolResultText}`
                : toolResultText,
        });

        return res.json({
            success: true,
            reply: reply || "Done! Your request was processed.",
        });
    } catch (error) {
        console.error("MCP controller error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again.",
        });
    } finally {
        await client?.close();
    }
}