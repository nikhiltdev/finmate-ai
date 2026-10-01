import { createSlice } from "@reduxjs/toolkit";
import { loginUser , registerUser , getUser} from "./authAction";

const authReducer = createSlice({
    name:"auth",
    initialState: {
        user : null,
        isLoading : true,
        error : null
    },
    reducers : {
        addUser : (state , action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        removeUser : (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(registerUser.pending , (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled , (state , action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(registerUser.rejected , (state , action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(loginUser.pending , (state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled , (state , action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        }).addCase(loginUser.rejected , (state , action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(getUser.fulfilled , (state , action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        }).addCase(getUser.rejected , (state , action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(getUser.pending , (state) => {
            state.isLoading = true;
            state.error = null;
        })
    }
})

export const { addUser , removeUser } = authReducer.actions;
export default authReducer.reducer;