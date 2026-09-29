# 🌿 FinMate AI — Personal Finance & AI Intelligence Platform

FinMate is a modern, full-stack personal finance management web application. It combines traditional budgeting, transaction tracking, and spending analytics with an **AI Financial Co-Pilot** powered by **Google Gemini** and the **Model Context Protocol (MCP)**.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [System Architecture](#-system-architecture)
- [Folder Structure Breakdown](#-folder-structure-breakdown)
  - [1. Root Directory](#1-root-directory)
  - [2. Backend Folder (`/Backend`)](#2-backend-folder-backend)
  - [3. Frontend Folder (`/Frontend`)](#3-frontend-folder-frontend)
  - [4. MCP Server Folder (`/Mcp_Server`)](#4-mcp-server-folder-mcp_server)
- [Tech Stack](#-tech-stack)
- [Getting Started Step-by-Step](#-getting-started-step-by-step)
  - [Prerequisites](#prerequisites)
  - [1. Backend Setup](#1-backend-setup)
  - [2. Frontend Setup](#2-frontend-setup)
  - [3. MCP Server Setup](#3-mcp-server-setup)
- [API Routes Overview](#-api-routes-overview)
- [Design System & Theme](#-design-system--theme)
- [License](#-license)

---

## 🌟 Overview

Managing personal finances often feels stressful and overwhelming. **FinMate** simplifies money management by offering:
- **Real-Time Financial Dashboard**: Visual summaries of your Income, Expenses, and Net Balance.
- **Interactive Analytics**: SVG-based Income vs. Expense curves and category donut charts.
- **Transaction Logs**: Record, inspect, and categorize income and expenses.
- **AI Financial Assistant**: Ask questions in plain English (*"How much did I spend on groceries this month?"*) and receive accurate insights.
- **Model Context Protocol (MCP)**: Lets AI assistants securely call database tools to analyze your finances on demand.

---

## 🏗 System Architecture

```text
       ┌────────────────┐
       │ React Frontend │  (Vite + Tailwind CSS + Redux Toolkit)
       └───────┬────────┘
               │ HTTP / JSON API
               ▼
       ┌────────────────┐         ┌───────────────┐
       │ Express Server │ ◄─────► │ MongoDB (DB)  │
       └───────┬────────┘         └───────────────┘
               │
        ┌──────┴───────┐
        ▼              ▼
┌──────────────┐ ┌───────────────┐
│ Gemini AI SDK│ │  MCP Server   │ (Tool calling for financial data)
└──────────────┘ └───────────────┘
```

---

## 📂 Folder Structure Breakdown

### 1. Root Directory

| File / Folder | Purpose |
| :--- | :--- |
| `Backend/` | Node.js + Express + TypeScript server handling business logic, database, and auth. |
| `Frontend/` | React 19 single-page app built with Vite and Tailwind CSS. |
| `Mcp_Server/` | Model Context Protocol server exposing financial analysis tools to AI models. |
| `DESIGN.md` | Complete UI/UX design specifications (colors, typography, glassmorphism tokens). |
| `README.md` | Main project documentation and onboarding guide (this file). |

---

### 2. Backend Folder (`/Backend`)

The backend is built with **Node.js**, **Express 5**, and **TypeScript**, connected to **MongoDB**.

```text
Backend/
├── src/
│   ├── app.ts               # Express application initialization and middleware configuration
│   ├── config/              # Database connection (Mongoose/MongoDB)
│   ├── controller/          # Request handlers (User, Transactions, Analytics, AI, MCP)
│   ├── middleware/          # Authentication & token verification middleware
│   ├── model/               # MongoDB Mongoose schemas (User, Transaction, etc.)
│   ├── routes/              # Express API route declarations
│   ├── services/            # Business logic and Google Gemini AI service integration
│   ├── types/               # TypeScript interfaces and custom type definitions
│   └── utils/               # Reusable utility functions (token generation, hashing)
├── server.ts                # Server entry point (starts Express on configured PORT)
├── tsconfig.json            # TypeScript compiler configuration
└── package.json             # Backend dependencies and run scripts
```

**Key Responsibilities:**
- Secure User Authentication via JWT (Access & Refresh tokens with HTTP-only cookies).
- RESTful CRUD operations for transactions (income and expense records).
- Aggregation pipelines for monthly breakdown and category percentages.
- Communicates with Google Gemini API and MCP clients.

---

### 3. Frontend Folder (`/Frontend`)

The frontend is a **React 19** application created with **Vite** and **Tailwind CSS**.

```text
Frontend/
├── src/
│   ├── app/
│   │   ├── layouts/         # Layout shells (DashboardLayout with Sidebar & Navbar)
│   │   ├── routes/          # Application routing (PublicRoutes, ProtectedRoutes, AppRoutes)
│   │   └── store.jsx        # Redux Toolkit centralized global store
│   ├── features/            # Feature-sliced modular architecture
│   │   ├── auth/            # Login, Register, useAuth hook, authReducer & actions
│   │   └── dashboard/       # Dashboard pages, modular UI subcomponents, and data.js
│   ├── shared/
│   │   └── components/      # Reusable UI widgets:
│   │       ├── Loading.jsx  # Luminous Emerald spinner loader
│   │       └── Navbar.jsx   # Glassmorphic top navigation bar
│   ├── components/          # Export proxies for shared components
│   ├── config/
│   │   └── axiosInstance.jsx# Axios client with auto-refresh token interceptors
│   ├── assets/              # Static branding and media assets
│   ├── App.jsx              # Main app wrapper
│   ├── main.jsx             # React entry point mounting to root DOM
│   └── index.css            # Base stylesheet with Tailwind CSS imports and fonts
├── vite.config.js           # Vite build and plugin settings
└── package.json             # Frontend dependencies and dev scripts
```

**Key Responsibilities:**
- Clean, minimal, glassmorphic user interface matching the `DESIGN.md` specification.
- Redux-backed authentication and protected route redirection.
- Real-time Axios response interceptors that automatically renew expired tokens.
- Interactive SVG charts for visual expense breakdown without external heavy chart libraries.

---

### 4. MCP Server Folder (`/Mcp_Server`)

The MCP (Model Context Protocol) server allows an AI agent to query user transactions as structured tools.

```text
Mcp_Server/
├── src/
│   ├── index.ts             # McpServer instance registering tool schemas using Zod
│   └── tools/
│       └── analyize.tools.ts# Tool implementations (getTotalIncome, getTotalExpenses, addTransaction)
├── tsconfig.json            # TypeScript configuration for the MCP runner
└── package.json             # MCP server dependencies (@modelcontextprotocol/server, zod, tsx)
```

**Key Tools Provided:**
- `getTotalIncome`: Calculates user's total incoming cash flow.
- `getTotalExpenses`: Aggregates categorized outgoing expenses.
- `addTransaction`: Allows an AI assistant to log an expense or income via natural language.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS v4, Redux Toolkit, React Router v7, Axios |
| **Backend** | Node.js, Express 5, TypeScript, Mongoose (MongoDB), JWT, Bcrypt |
| **AI & MCP** | Google Gemini (`@google/genai`), Model Context Protocol (`@modelcontextprotocol/server` & `client`) |
| **Styling & Design** | Luminous Emerald theme, Plus Jakarta Sans, Refined Dark & Light Glassmorphism |

---

## 🚀 Getting Started Step-by-Step

Follow these steps to run the entire FinMate platform locally.

### Prerequisites

Ensure you have the following installed on your computer:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally on port `27017` or via MongoDB Atlas)
- [Git](https://git-scm.com/)

---

### 1. Backend Setup

1. Open your terminal and navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create or check your `.env` file in `/Backend/.env`:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/finmate
   ACCESS_TOKEN=your_jwt_access_secret_key
   REFERESH_TOKEN=your_jwt_refresh_secret_key
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The backend will be running at `http://localhost:3000`.*

---

### 2. Frontend Setup

1. Open a new terminal tab and navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *Open your browser and visit `http://localhost:5173` to see the application.*

---

### 3. MCP Server Setup

If you wish to run or test the Model Context Protocol tools independently:

1. Navigate to the MCP server directory:
   ```bash
   cd Mcp_Server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the MCP server with a valid access token:
   ```bash
   FINMATE_ACCESS_TOKEN="your_user_token" npx tsx src/index.ts
   ```

---

## 📡 API Routes Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user account |
| `POST` | `/api/auth/login` | Log in and receive JWT access & refresh cookies |
| `POST` | `/api/auth/logout` | Clear auth cookies and log out |
| `GET` | `/api/auth/generate-access-token` | Refresh an expired access token |
| `GET` | `/api/transactions` | Fetch all user transactions |
| `POST` | `/api/transactions` | Create a new transaction (income / expense) |
| `GET` | `/api/analytics/summary` | Get aggregated totals (Income, Expense, Balance) |
| `POST` | `/ai/ask` | Send queries to the Gemini AI Financial Assistant |

---

## 🎨 Design System & Theme

FinMate follows the **Luminous Emerald FinTech** design language detailed in [DESIGN.md](DESIGN.md):
- **Primary Emerald (`#10B981`)**: Highlights positive income, active buttons, and financial growth.
- **Secondary Cyan (`#38BDF8`)**: Highlights AI insights and secondary analytics data.
- **Negative / Alert (`#EF4444`)**: Highlights expenses and alerts.
- **Glassmorphic Depth**: Subtle white/slate frosted backdrops (`backdrop-blur-xl`), hairline borders (`rgba(255,255,255,0.08)`), and soft shadows.
- **Typography**: Clean, computational sans-serif with **Plus Jakarta Sans**.

---

## 📄 License

This project is licensed under the **ISC License**. Feel free to use and extend it for your own financial applications!
