"use client";

import BalanceOverview from "@/components/BalanceOverview";
import Sidebar from "@/components/Sidebar";
import { currentBalance, totalExpenses, totalIncome } from "@/lib/data";

export default function Home() {
  const balanceData = [
    { title: "Current Balance", data: currentBalance },
    { title: "Total Expenses", data: totalExpenses },
    { title: "Total Income", data: totalIncome },
  ];

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="p-5">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <BalanceOverview data={balanceData} />
        </div>
      </div>
    </main>
  );
}
