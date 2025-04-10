"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DashboardOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Income</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$0.00</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$0.00</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$0.00</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Budget Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">On Track</div>
        </CardContent>
      </Card>
    </div>
  );
};
