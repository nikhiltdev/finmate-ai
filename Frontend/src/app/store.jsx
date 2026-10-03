import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/states/authReducer";
import chatReducer from "../features/chat/state/chatSlice"
import dashboardReducer from "../features/dashboard/state/dashboardReducer"
export const store = configureStore({
    reducer:{
        auth : authReducer,
        chat : chatReducer,
        dashboard : dashboardReducer
    }
})