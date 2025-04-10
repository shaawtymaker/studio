'use server';

import { DashboardOverview } from "@/components/DashboardOverview";
import { ExpenseCategorization } from "@/components/ExpenseCategorization";
import { ExpenseChatbot } from "@/components/ExpenseChatbot";
import { SpendingCharts } from "@/components/SpendingCharts";
import { BudgetGoals } from "@/components/BudgetGoals";

export default async function Home() {
  // Mock data for demonstration purposes
  const dashboardData = {
    totalIncome: 5000,
    totalExpenses: 3000,
    balance: 2000,
    budgetStatus: "On Track",
  };

  const spendingData = [
    { category: "Food", amount: 1500 },
    { category: "Transportation", amount: 500 },
    { category: "Entertainment", amount: 300 },
    { category: "Utilities", amount: 200 },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashboardOverview {...dashboardData} />
      <ExpenseChatbot />
      <ExpenseCategorization />
      <SpendingCharts spendingData={spendingData} />
      <BudgetGoals />
    </main>
  );
}
