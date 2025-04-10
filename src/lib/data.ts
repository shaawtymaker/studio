// This file contains dummy data for the application.

// This is dummy data

// Interfaces
export interface SpendingData {
  name: string;
  amount: number;
}

export interface BudgetGoal {
  category: string;
  goal: number;
}

export interface TransactionData {
  id: string;
  amount: number;
  category: string;
  date: string;
}

// Constants

export const currentBalance = 1000;
export const categories = ['Food', 'Transportation', 'Entertainment', 'Housing', 'Utilities', 'Healthcare', 'Shopping', 'Savings', 'Other'];
export const totalExpenses = 500;
export const totalIncome = 1500;

export const spendingData: SpendingData[] = [
  { name: 'Food', amount: 300 },
  { name: 'Transportation', amount: 150 },
  { name: 'Entertainment', amount: 100 },
  { name: 'Housing', amount: 800 },
  { name: 'Utilities', amount: 200 },
];

export const budgetGoals: BudgetGoal[] = [
  { category: "Food", goal: 400 },
  { category: "Transportation", goal: 200 },
  { category: "Entertainment", goal: 150 },
  { category: "Housing", goal: 900 },
  { category: "Utilities", goal: 250 },
];

export const transactions: TransactionData[] = [
  { id: "1", amount: 100, category: "Food", date: "2024-04-10" },
  { id: "2", amount: 50, category: "Transportation", date: "2024-04-09" },
  { id: "3", amount: 25, category: "Entertainment", date: "2024-04-08" },
  { id: "4", amount: 75, category: "Food", date: "2024-04-07" },
  { id: "5", amount: 120, category: "Utilities", date: "2024-04-06" },
  { id: "6", amount: 30, category: "Transportation", date: "2024-04-05" },
  { id: "7", amount: 60, category: "Entertainment", date: "2024-04-04" },
  { id: "8", amount: 90, category: "Food", date: "2024-04-03" },
  { id: "9", amount: 110, category: "Utilities", date: "2024-04-02" },
  { id: "10", amount: 40, category: "Transportation", date: "2024-04-01" },
  { id: "11", amount: 100, category: "Housing", date: "2024-03-31" },
  { id: "12", amount: 30, category: "Shopping", date: "2024-03-30" },
  { id: "13", amount: 20, category: "Healthcare", date: "2024-03-29" },
  { id: "14", amount: 100, category: "Other", date: "2024-03-28" }
];
