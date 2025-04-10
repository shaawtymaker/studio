import React from "react";
import { formatCurrency } from "@/lib/utils";

interface BalanceData {
  title: string;
  data: number;
}

interface BalanceOverviewProps {
  data: BalanceData[];
}

function BalanceOverview({ data }: BalanceOverviewProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((item) => (
        <div className="p-4 rounded-md border border-solid" key={item.title}>
          <h2 className="mb-2">{item.title}</h2>
          <p
            className="text-2xl font-bold"
            dangerouslySetInnerHTML={{ __html: formatCurrency(item.data) }}
          />
        </div>
      ))}
    </section>
  );
}

export default BalanceOverview;