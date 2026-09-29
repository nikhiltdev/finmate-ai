import type { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/generateToken.utils.js";
import userModel from "../model/user.model.js";

export async function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {

    try {

        const cookieToken = req.cookies.accessToken;

        const headerToken =
            req.headers.authorization?.startsWith("Bearer ")
                ? req.headers.authorization.split(" ")[1]
                : undefined;

        const accessToken = cookieToken || headerToken;

        if (!accessToken) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const decodeToken = await verifyAccessToken(
            accessToken
        );

        const user = await userModel.findById(
            decodeToken.id
        );

        if (!user) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        req.user = user;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }
}