import express from "express";
import {registerController , loginController , getUserController , generateAccessTokenController} from "../controller/user.controller.js";
import {authMiddleware} from "../middleware/user.middleware.js";

const authRoutes = express.Router()


authRoutes.post("/register", registerController)
authRoutes.post("/login", loginController)

authRoutes.get("/getme" , authMiddleware ,  getUserController)
authRoutes.get("/generate-access-token" ,  generateAccessTokenController)

export default authRoutes