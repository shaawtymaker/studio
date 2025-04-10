"use client";

import React from "react";
import { formatCurrency } from "@/lib/utils";

interface BalanceData {
  title: string;
  data: number;
}

interface BalanceOverviewProps  {
    balanceData: BalanceData[];
}

export const BalanceOverview: React.FC<BalanceOverviewProps> = ({ balanceData }) => {
  return (
    <section className="grid grid-cols-3 gap-4">
            {balanceData.map((item, index) => (
                <div
                    key={index}
                    className="p-4 rounded-md border border-solid"
                >
                    <h2 className="mb-2">{item.title}</h2>
                    <p className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: formatCurrency(item.data) }}></p>
                </div>
            ))}
    </section>
  );
};

