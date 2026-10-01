import { createSlice } from "@reduxjs/toolkit";
import { chatAction } from "./chatActions";

const chatReducer = createSlice({
    name: "chat",

    initialState: {
        messages: [],
        isLoading: false,
        error: null
    },

    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },

        clearMessages: (state) => {
            state.messages = [];
        }
    },

    extraReducers: (builder) => {
        builder

            .addCase(chatAction.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(chatAction.fulfilled, (state, action) => {
                state.isLoading = false;

                state.messages.push({
                    id: Date.now(),
                    sender: "gemini",
                    text: JSON.stringify(action.payload)
                });
            })

            .addCase(chatAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {
    addMessage,
    clearMessages
} = chatReducer.actions;

export default chatReducer.reducer;