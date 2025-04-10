"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface SpendingData {
  category: string;
  amount: number;
}

interface SpendingChartsProps {
  spendingData: SpendingData[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const SpendingCharts = ({ spendingData }: SpendingChartsProps) => {
  return (
    <div>
      <h2>Spending Charts</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="amount"
            isAnimationActive={false}
            data={spendingData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {spendingData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
