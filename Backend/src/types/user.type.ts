import type { Document, Model } from "mongoose";

// Base User attributes
export interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Instance methods for User Document
export interface IUserMethods {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Combined User Document type
export type IUserDocument = Document & IUser & IUserMethods;

// Mongoose User Model type
export type UserModel = Model<IUser, {}, IUserMethods>;

// DTO types for authentication / API requests
export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface UserResponse {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
