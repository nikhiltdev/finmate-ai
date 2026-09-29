import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstance";

export const registerUser = createAsyncThunk("auth/register" , async(credential , thunkApi)=>{
    try {
        const response = await axiosInstance.post("/auth/register" , credential)
        console.log("register response : " , response.data)
        return response.data
    } catch (error) {
        console.log(error)
        thunkApi.rejectWithValue(error)
    }
})

export const loginUser = createAsyncThunk("auth/login" , async(credential , thunkApi)=>{
    try {
        const response = await axiosInstance.post("/auth/login" , credential)
        console.log("login response : " , response.data)
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const getUser = createAsyncThunk("auth/getUser" , async(_ , thunkApi)=>{
    try{
        const response = await axiosInstance.get("/auth/getme")
        console.log("getme : " , response.data)
        return response.data
    } catch(error) {
        return thunkApi.rejectWithValue(error)
    }
})