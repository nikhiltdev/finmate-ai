import { aiResponseService } from "../services/ai.service.js"
import express from "express"


const route = express.Router()

route.post("/response" , aiResponseService)

export default route
