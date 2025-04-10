import { BudgetGoals } from "@/components/BudgetGoals";
import { ExpenseCategorization } from "@/components/ExpenseCategorization";
import { ExpenseChatbot } from "@/components/ExpenseChatbot";
import { SpendingCharts } from "@/components/SpendingCharts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-blue-100 to-blue-50">
      <ExpenseChatbot />
      <ExpenseCategorization />
      <SpendingCharts />
      <BudgetGoals />
    </main>
  );
}

