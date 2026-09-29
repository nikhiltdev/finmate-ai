import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";

export async function getMcpClientService(accessToken: string) {

    const transport = new StdioClientTransport({
        command: "npx",

        args: [
            "tsx",
            "../Mcp_server/src/index.ts"
        ],

        env: {
            ...process.env,
            FINMATE_ACCESS_TOKEN: accessToken
        }
    });

    const client = new Client({
        name: "Finmate Mcp Server",
        version: "1.0.0"
    });

    await client.connect(transport);

    return client;
}