import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/states/authReducer";

export const store = configureStore({
    reducer:{
        auth : authReducer
    }
})