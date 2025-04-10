"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardData {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  budgetStatus: string;
}

export const DashboardOverview = ({
  totalIncome,
  totalExpenses,
  balance,
  budgetStatus,
}: DashboardData) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Income</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalIncome.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${balance.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Budget Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{budgetStatus}</div>
        </CardContent>
      </Card>
    </div>
  );
};
