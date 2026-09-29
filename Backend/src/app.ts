import express from "express"
import authRoutes from "./routes/user.route.js"
import transactionRoutes from "./routes/transaction.route.js"
import analyticsRouter from "./routes/analytics.route.js"
import route from "./routes/ai.route.js"
import { connectionDb } from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"
// import { aiResponseService } from "./services/ai.service.js"
import mcpRoutes from "./routes/mcp.route.js"


const app = express();

connectionDb();
// aiResponseService("hello! how are you")

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api/auth", authRoutes)
app.use("/api", transactionRoutes)
app.use("/api", analyticsRouter)
app.use("/ai" , route)
app.use("/mcp" , mcpRoutes)

export default app