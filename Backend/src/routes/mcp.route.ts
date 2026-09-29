import express from "express";
import {McpController} from "../controller/mcp.controller.ts";


const mcpRoutes = express.Router();


mcpRoutes.get("/mcp-controller" , McpController)

export default mcpRoutes;