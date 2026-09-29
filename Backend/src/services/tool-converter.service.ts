export function convertMcpToolsToGeminiTools(toolList: any) {
    return toolList.tools.map((tool: any) => ({
        type: "function",
        name: tool.name,
        description: tool.description,
        parameters: tool.inputSchema
    }));
}