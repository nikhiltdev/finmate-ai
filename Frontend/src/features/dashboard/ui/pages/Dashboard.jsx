import React, { useState } from "react";
import { dashboardData } from "../data";

// ==========================================
// SVG Icons Helper Components
// ==========================================

function ArrowUpIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function ArrowDownIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

function WalletIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
    </svg>
  );
}

function CalendarIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChartBarIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function SparklesIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  );
}

function ClockIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PlusIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function SendIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CategoryIcon({ type, className = "w-4 h-4" }) {
  switch (type) {
    case "food":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case "income":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      );
    case "transport":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case "bills":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "shopping":
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
  }
}

// Format currency in Indian Rupee format
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  })
    .format(amount)
    .replace("INR", "₹")
    .trim();
}

// ==========================================
// 1. Greeting Section Component
// ==========================================

function GreetingSection({ userName, greeting, subtitle, dateRange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          {greeting}, {userName} <span className="inline-block hover:rotate-12 transition-transform">👋</span>
        </h1>
        <p className="text-sm text-slate-500 mt-1 font-medium">{subtitle}</p>
      </div>

      {/* Date Range Filter */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700 shadow-sm hover:border-slate-300 transition-colors cursor-pointer self-start sm:self-auto">
        <CalendarIcon className="w-4 h-4 text-slate-400" />
        <span>{dateRange}</span>
        <svg className="w-3.5 h-3.5 text-slate-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

// ==========================================
// 2. Summary Cards Component
// ==========================================

function SummaryCards({ summary }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Total Income Card */}
      <div className="group relative bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/60 group-hover:scale-105 transition-transform">
            <ArrowUpIcon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 block">Total Income</span>
            <span className="text-2xl font-bold text-slate-900 tracking-tight block mt-0.5">
              {formatCurrency(summary.totalIncome)}
            </span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs">
          <span className="font-semibold text-emerald-600 flex items-center gap-0.5">
            <ArrowUpIcon className="w-3 h-3" />
            {summary.incomeChange.replace("+", "")}
          </span>
          <span className="text-slate-400 font-medium">vs. last month</span>
        </div>
      </div>

      {/* Total Expenses Card */}
      <div className="group relative bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 border border-rose-100/60 group-hover:scale-105 transition-transform">
            <ArrowDownIcon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 block">Total Expenses</span>
            <span className="text-2xl font-bold text-slate-900 tracking-tight block mt-0.5">
              {formatCurrency(summary.totalExpense)}
            </span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs">
          <span className="font-semibold text-rose-500 flex items-center gap-0.5">
            <ArrowUpIcon className="w-3 h-3" />
            {summary.expenseChange.replace("+", "")}
          </span>
          <span className="text-slate-400 font-medium">vs. last month</span>
        </div>
      </div>

      {/* Balance Card */}
      <div className="group relative bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100/60 group-hover:scale-105 transition-transform">
            <WalletIcon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-medium text-slate-500 block">Balance</span>
            <span className="text-2xl font-bold text-slate-900 tracking-tight block mt-0.5">
              {formatCurrency(summary.balance)}
            </span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs">
          <span className="font-semibold text-emerald-600 flex items-center gap-0.5">
            <ArrowUpIcon className="w-3 h-3" />
            {summary.balanceChange.replace("+", "")}
          </span>
          <span className="text-slate-400 font-medium">vs. last month</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. Income vs Expense SVG Chart Component
// ==========================================

function IncomeExpenseChart({ chartData }) {
  // Chart dimensions & coordinates
  const width = 560;
  const height = 180;
  const paddingLeft = 55;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;

  // Max value calculation for Y-scale
  const maxY = 3000;
  const getY = (val) => paddingTop + chartH - (val / maxY) * chartH;
  const getX = (idx) => paddingLeft + (idx / (chartData.labels.length - 1)) * chartW;

  // Generate smooth SVG cubic path
  const createSmoothPath = (series) => {
    const points = series.map((val, idx) => ({ x: getX(idx), y: getY(val) }));
    if (points.length === 0) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = i > 0 ? points[i - 1] : points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = i < points.length - 2 ? points[i + 2] : p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  };

  const incomeLinePath = createSmoothPath(chartData.incomeSeries);
  const expenseLinePath = createSmoothPath(chartData.expenseSeries);

  const lastX = getX(chartData.labels.length - 1);
  const firstX = getX(0);
  const baselineY = paddingTop + chartH;

  const incomeAreaPath = `${incomeLinePath} L ${lastX} ${baselineY} L ${firstX} ${baselineY} Z`;
  const expenseAreaPath = `${expenseLinePath} L ${lastX} ${baselineY} L ${firstX} ${baselineY} Z`;

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ChartBarIcon className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Income vs Expense</h2>
        </div>

        <div className="flex items-center gap-4 self-end sm:self-auto">
          {/* Legend */}
          <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-sm" />
              <span>Income</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block shadow-sm" />
              <span>Expense</span>
            </div>
          </div>

          {/* Time Filter Pill */}
          <div className="px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-1 cursor-pointer hover:bg-slate-100 transition-colors">
            <span>{chartData.period}</span>
            <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto min-w-[420px] select-none"
        >
          <defs>
            {/* Income Gradient */}
            <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>

            {/* Expense Gradient */}
            <linearGradient id="expenseFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines and Y labels */}
          {chartData.yAxis.map((val) => {
            const y = getY(val);
            return (
              <g key={val}>
                <text
                  x={paddingLeft - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-slate-400 text-[10px] font-medium"
                >
                  ₹{val.toLocaleString()}
                </text>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke="#F1F5F9"
                  strokeWidth="1"
                  strokeDasharray={val === 0 ? "none" : "3 3"}
                />
              </g>
            );
          })}

          {/* X axis labels */}
          {chartData.labels.map((label, idx) => (
            <text
              key={label}
              x={getX(idx)}
              y={height - 8}
              textAnchor="middle"
              className="fill-slate-400 text-[10px] font-medium"
            >
              {label}
            </text>
          ))}

          {/* Area Fills */}
          <path d={incomeAreaPath} fill="url(#incomeFill)" />
          <path d={expenseAreaPath} fill="url(#expenseFill)" />

          {/* Stroke Lines */}
          <path
            d={incomeLinePath}
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d={expenseLinePath}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Focal Nodes */}
          {chartData.incomeSeries.map((val, idx) => (
            <circle
              key={`inc-${idx}`}
              cx={getX(idx)}
              cy={getY(val)}
              r="3.5"
              fill="#FFFFFF"
              stroke="#10B981"
              strokeWidth="2"
              className="hover:r-5 transition-all cursor-pointer"
            />
          ))}
          {chartData.expenseSeries.map((val, idx) => (
            <circle
              key={`exp-${idx}`}
              cx={getX(idx)}
              cy={getY(val)}
              r="3.5"
              fill="#FFFFFF"
              stroke="#8B5CF6"
              strokeWidth="2"
              className="hover:r-5 transition-all cursor-pointer"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

// ==========================================
// 4. Spending by Category Component
// ==========================================

function SpendingCategory({ categories, totalExpense }) {
  // SVG Donut calculation
  const size = 160;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let currentAngle = 0;
  const segments = categories.map((cat) => {
    const strokeDasharray = (cat.percentage / 100) * circumference;
    const strokeDashoffset = -currentAngle;
    currentAngle += strokeDasharray;
    return {
      ...cat,
      strokeDasharray: `${strokeDasharray} ${circumference}`,
      strokeDashoffset,
    };
  });

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
          <SparklesIcon className="w-4 h-4" />
        </div>
        <h2 className="text-base font-bold text-slate-900">Spending by Category</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* SVG Donut Chart with Center Total */}
        <div className="relative shrink-0 flex items-center justify-center">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
            {/* Background ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#F1F5F9"
              strokeWidth={strokeWidth}
            />

            {/* Colored arcs */}
            {segments.map((seg) => (
              <circle
                key={seg.id}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={seg.strokeDasharray}
                strokeDashoffset={seg.strokeDashoffset}
                strokeLinecap="butt"
                className="transition-all duration-300 hover:opacity-85"
              />
            ))}
          </svg>

          {/* Donut Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
            <span className="text-base font-bold text-slate-900 tracking-tight leading-tight">
              {formatCurrency(totalExpense)}
            </span>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
              Total Expense
            </span>
          </div>
        </div>

        {/* Category Breakdown List */}
        <div className="w-full space-y-2.5">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center justify-between text-xs py-1">
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="font-medium text-slate-700 truncate">{cat.name}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-2">
                <span className="font-semibold text-slate-900">
                  {formatCurrency(cat.amount)}
                </span>
                <span className="text-slate-400 font-medium w-8 text-right">
                  {cat.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. Recent Transactions Component
// ==========================================

function RecentTransactions({ transactions }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
            <ClockIcon className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Recent Transactions</h2>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group cursor-pointer"
        >
          <span>View All</span>
          <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Table Headers */}
      <div className="hidden sm:grid sm:grid-cols-12 text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 border-b border-slate-100 px-2">
        <div className="col-span-3">Date</div>
        <div className="col-span-4">Description</div>
        <div className="col-span-3">Category</div>
        <div className="col-span-2 text-right">Amount</div>
      </div>

      {/* Transactions List */}
      <div className="divide-y divide-slate-100">
        {transactions.map((tx) => {
          const isIncome = tx.type === "income";

          return (
            <div
              key={tx.id}
              className="py-3.5 px-2 hover:bg-slate-50/70 rounded-xl transition-colors sm:grid sm:grid-cols-12 sm:items-center flex flex-col gap-2 sm:gap-0"
            >
              {/* Date */}
              <div className="col-span-3 text-xs text-slate-500 font-medium">
                {tx.date}
              </div>

              {/* Description */}
              <div className="col-span-4 flex items-center gap-2.5">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isIncome
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <CategoryIcon type={tx.categoryType} className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">
                  {tx.description}
                </span>
              </div>

              {/* Category */}
              <div className="col-span-3 flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span>{tx.category}</span>
              </div>

              {/* Amount */}
              <div className="col-span-2 sm:text-right font-semibold text-xs">
                <span
                  className={
                    isIncome ? "text-emerald-600" : "text-rose-500"
                  }
                >
                  {isIncome ? "+" : "-"} {formatCurrency(Math.abs(tx.amount))}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 6. Ask FinMate AI Component
// ==========================================

function AIInsightCard({ aiAssistant }) {
  const [question, setQuestion] = useState("");

  const handleSelectQuestion = (q) => {
    setQuestion(q);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <SparklesIcon className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-900">{aiAssistant.title}</h2>
          <span className="px-2 py-0.5 text-[10px] font-semibold bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">
            {aiAssistant.badge}
          </span>
        </div>
        <p className="text-xs text-slate-500 font-medium mb-4 pl-10">
          {aiAssistant.subtitle}
        </p>

        {/* Suggested Prompt Pills */}
        <div className="space-y-2 mb-5">
          {aiAssistant.suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectQuestion(q)}
              className="w-full text-left px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200/60 hover:border-emerald-200 text-xs text-slate-700 hover:text-emerald-800 transition-all font-medium cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="relative mt-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={aiAssistant.placeholder}
          className="w-full pl-4 pr-12 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
        />
        <button
          type="button"
          aria-label="Send query"
          className="absolute right-1.5 top-1.5 w-9 h-9 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
        >
          <SendIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 7. Promo / Action Banner Component
// ==========================================

function PromoBanner({ banner }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-6 sm:p-8 text-white shadow-md">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-10 w-48 h-48 rounded-full bg-sky-500/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>{banner.tag}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            {banner.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {banner.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 cursor-pointer shrink-0 self-start md:self-auto"
        >
          <PlusIcon className="w-4 h-4" />
          <span>{banner.cta}</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

// ==========================================
// Main Dashboard Page
// ==========================================

function Dashboard() {
  const {
    userName,
    greeting,
    subtitle,
    dateRange,
    summary,
    chartData,
    spendingCategories,
    transactions,
    aiAssistant,
    promoBanner,
  } = dashboardData;

  return (
    <div className="min-h-full bg-[#F8FAFC] p-4 sm:p-6 lg:p-8 font-['Plus_Jakarta_Sans',sans-serif] space-y-6">
      {/* 1. Greeting Section */}
      <GreetingSection
        userName={userName}
        greeting={greeting}
        subtitle={subtitle}
        dateRange={dateRange}
      />

      {/* 2. Top Summary Metrics */}
      <SummaryCards summary={summary} />

      {/* 3. Charts & Analytics Grid (Two Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Income vs Expense) */}
        <div className="lg:col-span-7">
          <IncomeExpenseChart chartData={chartData} />
        </div>

        {/* Right Column (Spending by Category) */}
        <div className="lg:col-span-5">
          <SpendingCategory
            categories={spendingCategories}
            totalExpense={summary.totalExpense}
          />
        </div>
      </div>

      {/* 4. Secondary Operations Grid (Recent Transactions & AI Assistant) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Recent Transactions) */}
        <div className="lg:col-span-7">
          <RecentTransactions transactions={transactions} />
        </div>

        {/* Right Column (Ask FinMate AI) */}
        <div className="lg:col-span-5 flex">
          <div className="w-full">
            <AIInsightCard aiAssistant={aiAssistant} />
          </div>
        </div>
      </div>

      {/* 5. Bottom Action / Promo Banner */}
      <PromoBanner banner={promoBanner} />
    </div>
  );
}

export default Dashboard;