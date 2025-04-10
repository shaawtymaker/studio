"use client";
import { FormEvent, useEffect, useState } from "react";

interface Budget {
  id: string;
  category: string;
  amount: number;
  period: string;
  startDate: Date;
}

export default function BudgetPage() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newBudget, setNewBudget] = useState({
    category: "",
    amount: 0,
    period: "",
    startDate: new Date(),
  });

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const response = await fetch("/api/budgets");
        if (!response.ok) {
          throw new Error("Failed to fetch budgets");
        }
        const data = await response.json();
        setBudgets(data);
      } catch (error: any) {
        setError(error.message || "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBudgets();
  }, []);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setNewBudget((prevBudget) => ({
      ...prevBudget,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/budgets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBudget),
      });
      if (!response.ok) {
        throw new Error("Failed to add budget");
      }
      const data = await response.json();
      console.log("Budget added:", data);
      setNewBudget({category:"", amount:0, period:"", startDate: new Date()})
    } catch (error: any) {
      setError(error.message || "An unknown error occurred");
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Budgets</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul>
        {budgets.map((budget) => (
          <li key={budget.id}>{budget.amount}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-4">
        <input type="text" name="category" placeholder="Category" value={newBudget.category} onChange={handleInputChange} className="border p-2 mr-2" required/>
        <input type="number" name="amount" placeholder="Amount" value={newBudget.amount} onChange={handleInputChange} className="border p-2 mr-2" required/>
        <input type="text" name="period" placeholder="Period" value={newBudget.period} onChange={handleInputChange} className="border p-2 mr-2" required/>
        <input type="date" name="startDate" value={newBudget.startDate.toISOString().split('T')[0]} onChange={handleInputChange} className="border p-2 mr-2" required/>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Budget
        </button>
      </form>
    </div>
  );
}

