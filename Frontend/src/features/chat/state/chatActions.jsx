import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstance";

export const chatAction = createAsyncThunk(
    "chat/Messages",
    async (credentials, thunkApi) => {
        const { prompt } = credentials;

        try {
            const response = await axiosInstance.post("/mcp/mcp-controller",{ prompt });
            console.log(response)

            return response.data.toolResult.content[0].text;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message || error.message
            );
        }
    }
);