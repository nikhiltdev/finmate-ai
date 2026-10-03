import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstance";

export const registerUser = createAsyncThunk("auth/register" , async(credential , thunkApi)=>{
    try {
        const response = await axiosInstance.post("/api/auth/register" , credential)
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const loginUser = createAsyncThunk("auth/login" , async(credential , thunkApi)=>{
    try {
        const response = await axiosInstance.post("/api/auth/login" , credential)
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const getUser = createAsyncThunk("auth/getUser" , async(_ , thunkApi)=>{
    try{
        const response = await axiosInstance.get("/api/auth/getme")
        return response.data
    } catch(error) {
        return thunkApi.rejectWithValue(error)
    }
})