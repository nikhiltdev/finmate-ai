export const dashboardData = {
  userName: "John",
  greeting: "Good morning",
  subtitle: "Here's what's happening with your finances today.",
  dateRange: "Apr 26, 2025 - May 26, 2025",

  summary: {
    totalIncome: 2450.00,
    incomeChange: "+12%",
    incomeChangeType: "positive",
    totalExpense: 1320.00,
    expenseChange: "+8%",
    expenseChangeType: "neutral",
    balance: 1130.00,
    balanceChange: "+15%",
    balanceChangeType: "positive",
  },

  chartData: {
    period: "This Month",
    categories: ["Income", "Expense"],
    yAxis: [3000, 2000, 1000, 0],
    labels: ["Apr 1", "Apr 7", "Apr 14", "Apr 21", "Apr 28"],
    incomeSeries: [1600, 2400, 1900, 2700, 2100],
    expenseSeries: [900, 1300, 1100, 1500, 1200],
  },

  spendingCategories: [
    {
      id: "food",
      name: "Food & Dining",
      amount: 420,
      percentage: 32,
      color: "#10B981", // emerald
    },
    {
      id: "shopping",
      name: "Shopping",
      amount: 260,
      percentage: 20,
      color: "#6366F1", // indigo
    },
    {
      id: "transport",
      name: "Transport",
      amount: 180,
      percentage: 14,
      color: "#A855F7", // purple
    },
    {
      id: "bills",
      name: "Bills & Utilities",
      amount: 160,
      percentage: 12,
      color: "#F59E0B", // amber
    },
    {
      id: "entertainment",
      name: "Entertainment",
      amount: 120,
      percentage: 9,
      color: "#EC4899", // pink
    },
    {
      id: "others",
      name: "Others",
      amount: 180,
      percentage: 13,
      color: "#60A5FA", // sky blue
    },
  ],

  transactions: [
    {
      id: 1,
      description: "Grocery Shopping",
      category: "Food & Dining",
      categoryType: "food",
      amount: -45.20,
      date: "May 25, 2025",
      type: "expense",
    },
    {
      id: 2,
      description: "Salary",
      category: "Income",
      categoryType: "income",
      amount: 2450.00,
      date: "May 24, 2025",
      type: "income",
    },
    {
      id: 3,
      description: "Uber Ride",
      category: "Transport",
      categoryType: "transport",
      amount: -18.60,
      date: "May 22, 2025",
      type: "expense",
    },
    {
      id: 4,
      description: "Electricity Bill",
      category: "Bills & Utilities",
      categoryType: "bills",
      amount: -120.00,
      date: "May 20, 2025",
      type: "expense",
    },
    {
      id: 5,
      description: "Online Shopping",
      category: "Shopping",
      categoryType: "shopping",
      amount: -75.40,
      date: "May 18, 2025",
      type: "expense",
    },
  ],

  aiAssistant: {
    badge: "Beta",
    title: "Ask FinMate AI",
    subtitle: "Get instant insights about your finances.",
    placeholder: "Type your question...",
    suggestedQuestions: [
      "How much did I spend on food this month?",
      "What's my total income?",
      "Show me my spending by category.",
    ],
  },

  promoBanner: {
    tag: "Better financial decisions",
    title: "Build a richer future",
    description: "Track your spending, save more, and reach your goals with FinMate.",
    cta: "Add Transaction",
  },
};
