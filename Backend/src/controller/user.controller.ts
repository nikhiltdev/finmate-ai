import type { Request, Response } from "express";
import { registerService , loginService , getUserService} from "../services/user.services.js";
import type { LoginUserInput, RegisterUserInput } from "../types/user.type.js";
import { verifyRefreshToken ,  generateAccessToken } from "../utils/generateToken.utils.js"

export async function registerController(req:Request, res:Response) 
{
    const userData: RegisterUserInput = req.body;

    const result = await registerService(userData);

    res.cookie("accessToken", result.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.cookie("refreshToken", result.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({  
        success: true,
        message: "User registered successfully",
        data: result,
    })
}

export async function loginController(req:Request, res:Response)
{
    const userData : LoginUserInput = req.body;
    
    const result = await loginService(userData);

    res.cookie("accessToken", result.accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.cookie("refreshToken", result.refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
        success: true,
        message: "User logged in successfully",
        data: result,
    })
}

export async function getUserController(req:Request , res:Response)
{
    const id = req.user?._id;

    const user = await getUserService(id);

    res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: user,
    })
}

export async function generateAccessTokenController(req:Request , res:Response)
{
   const refreshToken = req.cookies.refreshToken;

   const result = await verifyRefreshToken(refreshToken)

   if (!result)
   {
    return res.status(401).json({
        success: false,
        message: "Invalid refresh token",
    })
   }

   const accessToken = await generateAccessToken(result.id);

   res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
   });

   res.status(200).json({
    success: true,
    message: "Access token generated successfully",
    data: accessToken,
   })
}