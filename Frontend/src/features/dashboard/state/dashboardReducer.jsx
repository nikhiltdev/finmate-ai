import { createSlice } from "@reduxjs/toolkit";
import { getTotalExpenses, getTotalIncome, getTotalNetBalance } from "./dashboardAction";

const initialState = {
    summary: {
        totalBalance: 0,
        totalIncome: 0,
        totalExpense: 0,
    },

    spending: [],

    transactions: [],

    loading: false,

    error: null,
};

const dashboardReducer = createSlice({
    name: "dashboard",

    initialState,

    reducers: {
        setSummary: (state, action) => {
            state.summary = action.payload;
        },
        clearDashboard: (state) => {
            state.summary = {
                totalBalance: 0,
                totalIncome: 0,
                totalExpense: 0,
            };

            state.spending = [];
            state.transactions = [];
            state.error = null;
        },
    },

    extraReducers: (builder) => {
    builder
        .addCase(getTotalIncome.fulfilled, (state, action) => {
            state.summary.totalIncome = action.payload;
        })
        .addCase(getTotalExpenses.fulfilled, (state, action) => {
            state.summary.totalExpense = action.payload;
        })
        .addCase(getTotalNetBalance.fulfilled, (state, action) => {
            state.summary.totalBalance = action.payload;
        });
}
});

export const { setSummary, clearDashboard } = dashboardReducer.actions;

export default dashboardReducer.reducer;