import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export async function generateAccessToken(id: string) {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN!, { expiresIn: "1d" });
}

export async function generateRefreshToken(id: string) {
    return jwt.sign({ id }, process.env.REFERESH_TOKEN!, { expiresIn: "7d" });
}

export async function verifyAccessToken(token: string): Promise<any> {
    return jwt.verify(token, process.env.ACCESS_TOKEN!);
}


export async function verifyRefreshToken(token: string): Promise<any> {
    return jwt.verify(token, process.env.REFERESH_TOKEN!);
}