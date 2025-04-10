import { db } from "@/lib/firebase";
import * as admin from "firebase-admin";



export function getOverviewData() {
  return [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 200 },
    { name: 'Category D', value: 100 },
  ];
}

export interface Budget {
  name: string;
  value: number;
  budget: number;
}

export async function getBudgetData(): Promise<Budget[]> {
  const collectionRef = admin.firestore().collection('budgets');
  const budgetData: Budget[] = [];
  const querySnapshot = await collectionRef.get();
  querySnapshot.forEach((doc: admin.firestore.QueryDocumentSnapshot) => {    
    const data = doc.data();
    budgetData.push(data as unknown as Budget);
  });

  return budgetData;

}


export function getExpenses():{ name: string; amount: number; }[] {
  return [
    { name: 'Expense 1', amount: 100 },
    { name: 'Expense 2', amount: 200 },
    { name: 'Expense 3', amount: 150 },
    { name: 'Expense 4', amount: 300 },
    { name: 'Expense 5', amount: 250 },
  ];
}

export function getTotalExpenses(): number {
  const expenses = getExpenses();
  return expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
}

export function getTransactionsData() {
  return [
    { name: 'Transaction 1', value: 100 },
    { name: 'Transaction 2', value: 200 },
    { name: 'Transaction 3', value: 150 },
    { name: 'Transaction 4', value: 300 },
    { name: 'Transaction 5', value: 250 },
    { name: 'Transaction 6', value: 50 },
    { name: 'Transaction 7', value: 120 },
    { name: 'Transaction 8', value: 180 },
    { name: 'Transaction 9', value: 220 },
    { name: 'Transaction 10', value: 80 },
  ];
}

export function getChatbotData() {
  return [
    { name: 'Chatbot 1', value: 75 },
    { name: 'Chatbot 2', value: 125 },
  ];
}