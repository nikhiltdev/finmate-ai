import userModel from "../model/user.model.js";
import type { RegisterUserInput , LoginUserInput } from "../types/user.type.js";
import bcrypt from "bcrypt";
import {generateAccessToken, generateRefreshToken} from "../utils/generateToken.utils.js";

export async function registerService(userData: RegisterUserInput) {
  const { name, email, password } = userData;

  // Check if user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const user = await userModel.create({
    name,
    email,
    password
  });

  const accessToken = await generateAccessToken(user._id.toString());
  const refreshToken = await generateRefreshToken(user._id.toString());

  return {
    accessToken,
    refreshToken,
    user,
  }
}


export async function loginService(userData: LoginUserInput)
{
    const {email, password} = userData;

    const existingUser = await userModel.findOne({email});
    if(!existingUser)
    {
        throw new Error("User not found");
    }

    const isPasswordValid = await existingUser.comparePassword(password);
    if(!isPasswordValid)
    {
        throw new Error("Invalid password");
    }

    const accessToken = await generateAccessToken(existingUser._id.toString());
    const refreshToken = await generateRefreshToken(existingUser._id.toString());

    return {
        accessToken,
        refreshToken,
        user: existingUser,
    }
}

export async function getUserService(id: string) {
    const user = await userModel.findById(id);
    return user;
}   
