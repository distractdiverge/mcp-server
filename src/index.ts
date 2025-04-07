import { MCPServer } from "mcp-framework";

const server = new MCPServer();

server.start().catch((error)=>{
    console.error("Server Error:", error);
    process.exit(1);
});