"use client";

import React from "react";
import { spendingData } from "@/lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function SpendingCharts() {
  return (
    <div className="p-4 rounded-md border border-solid">
      <h2>Spending Chart</h2>
      <BarChart width={600} height={300} data={spendingData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default SpendingCharts;
