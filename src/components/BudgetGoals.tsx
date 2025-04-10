"use client";

import { budgetGoals } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

function BudgetGoals() {
  return (
    <div className="p-4 rounded-md border border-solid">
      <h2>Budget Goals</h2>
      <ul className="p-4">
        {budgetGoals.map((goal) => (
          <li className="mb-2" key={goal.category}>
            {goal.category}:{" "}
            <span className="font-bold"
              dangerouslySetInnerHTML={{ __html: formatCurrency(goal.goal) }}
            />
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BudgetGoals;
