import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/states/authReducer";
import chatReducer from "../features/chat/state/chatSlice"
export const store = configureStore({
    reducer:{
        auth : authReducer,
        chat : chatReducer
    }
})