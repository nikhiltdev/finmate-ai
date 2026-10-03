import React, { useEffect } from "react";
import Navbar from "../../../../components/Navbar";
import SummaryCard from "../../../../components/dashboard/ui/SummaryCard";
import { useDashboard } from "../../hooks/useDashboard";
import { useDispatch, useSelector } from "react-redux";
import { setSummary } from "../../state/dashboardReducer";

const SUMMARY_CARDS = [
    {
        id: "net-balance",
        field: "totalBalance", // key in summary
        title: "TOTAL NET BALANCE",
        currency: "INR",
        supportingText: "↑ 12.5% vs last month",
        label: "Liquid pool",
        trendPositive: true,
        icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                <circle cx="17.5" cy="12.5" r=".5" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: "total-income",
        field: "totalIncome",
        title: "TOTAL INCOME",
        currency: "INR",
        supportingText: "↑ +₹5,000 bonus inflow",
        label: "this month",
        trendPositive: true,
        icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
        ),
    },
    {
        id: "total-expenses",
        field: "totalExpense", // singular, matches your reducer
        title: "TOTAL EXPENSES",
        currency: "INR",
        supportingText: "36% burn / Healthy ratio",
        label: "this month",
        trendPositive: true,
        icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7l9.2 9.2M17 7v10H7" />
            </svg>
        ),
    },
];

function Dashboard() {
    const { summary, totalBalance, totalIncome, totalExpenses } = useDashboard();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);

    useEffect(() => {
        const loadSummary = async () => {
            try {
                const [income, expense, balance] = await Promise.all([
                    totalIncome("income"),
                    totalExpenses("expense"),
                    totalBalance("balance"),
                ]);

                dispatch(
                    setSummary({
                        totalIncome: income.payload,
                        totalExpense: expense.payload,
                        totalBalance: balance.payload,
                    })
                );
            } catch (err) {
                // Failed to load summary
            }
        };

        loadSummary();
    }, [dispatch]);

    return (
        <div className="w-full h-full flex flex-col overflow-y-auto">
            <Navbar />

            <div className="flex-1 px-4 sm:px-6 py-5 space-y-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        Good evening, {user.data.name} 👋
                    </h1>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">
                        Here's your real-time financial health and liquid portfolio overview
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                    {SUMMARY_CARDS.map((card) => (
                        <SummaryCard
                            key={card.id}
                            title={card.title}
                            amount={summary[card.field]} 
                            currency={card.currency}
                            supportingText={card.supportingText}
                            label={card.label}
                            icon={card.icon}
                            trendPositive={card.trendPositive}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;