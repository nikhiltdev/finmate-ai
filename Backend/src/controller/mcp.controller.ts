import type { Request, Response } from "express";
import { getMcpClientService } from "../services/mcp.service.js";
import { convertMcpToolsToGeminiTools } from "../services/tool-converter.service.js";
import { aiResponseService } from "../services/ai.service.js";

export async function McpController(
    req: Request,
    res: Response
) {
    try {
        console.log("========== MCP CONTROLLER ==========");
        console.log("REQ BODY:", req.body);
        console.log("PROMPT:", req.body?.prompt);
        const {prompt , tool} = req.body
        
        // Get access token from logged-in user's cookie
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return res.status(401).json({
                success: false,
                message: "User is not authenticated"
            });
        }

        // Start MCP server with user's token internally
        const client = await getMcpClientService(accessToken);

        // Get MCP tools
        const toolList = await client.listTools();

        // Convert MCP tools → Gemini tools
        const tools = convertMcpToolsToGeminiTools(toolList);

        // Ask Gemini
        const geminiResponse = await aiResponseService({
            tools,
            prompt
        });
        
        // Find function call
        const toolCall = geminiResponse.steps?.find(
            (step: any) => step.type === "function_call"
        );

        if (toolCall) {

            const toolResult = await client.callTool({
                name: toolCall.name,
                arguments: toolCall.arguments,
            });

            console.log("MCP TOOL RESULT:");
            console.dir(toolResult, { depth: null });

            return res.json({
                success: true,
                toolCall,
                toolResult,
            });
        }

        return res.json({
            success: true,
            response: geminiResponse,
        });

    } catch (error: any) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}