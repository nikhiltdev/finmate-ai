import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstance";

export const getTotalNetBalance = createAsyncThunk(
    "dashboard/totalNetBalance",
    async ({type}, thunkApi) => {
        try {
            const response = await axiosInstance.get(`/api/total-balance/${type}`);
            return response.data.data;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message || error.message
            );
        }
    }
);

export const getTotalIncome = createAsyncThunk(
    "dashboard/totalIncome",
    async ({type}, thunkApi) => {
        try {
            const response = await axiosInstance.get(`/api/total-income/${type}`);
            return response.data.data;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message || error.message
            );
        }
    }
);

export const getTotalExpenses = createAsyncThunk(
    "dashboard/totalExpenses",
    async ({type}, thunkApi) => {
        try {
            const response = await axiosInstance.get(`/api/total-expense/${type}`);
            return response.data.data;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message || error.message
            );
        }
    }
);
