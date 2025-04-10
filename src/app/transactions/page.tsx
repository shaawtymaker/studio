//tsx

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';

interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newTransactionAmount, setNewTransactionAmount] = useState('');
  const [newTransactionCategory, setNewTransactionCategory] = useState('');
  const [newTransactionDate, setNewTransactionDate] = useState('');
  const [newTransactionDescription, setNewTransactionDescription] = useState('');

  

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/transactions');
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        const data = await response.json();
        setTransactions(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  const handleAddTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(newTransactionAmount),
          category: newTransactionCategory,
          date: newTransactionDate,
          description: newTransactionDescription,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add transaction');
      }
      const data = await response.json();
      console.log('Transaction added:', data);
      // Optionally, refresh the transactions list here
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full">
      <h1>Transactions</h1>
      <form onSubmit={handleAddTransaction}>
        <Input type="number" placeholder="Amount" value={newTransactionAmount} onChange={(e) => setNewTransactionAmount(e.target.value)} required />
        <Input type="text" placeholder="Category" value={newTransactionCategory} onChange={(e) => setNewTransactionCategory(e.target.value)} required />
        <Input type="date" placeholder="Date" value={newTransactionDate} onChange={(e) => setNewTransactionDate(e.target.value)} required />
        <Input type="text" placeholder="Description" value={newTransactionDescription} onChange={(e) => setNewTransactionDescription(e.target.value)} />
        <Button type="submit">Add Transaction</Button>
      </form>
       {isLoading && <p>Loading transactions...</p>}
      
      
      


      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Amount</TableHead>
            </TableRow>
            </TableHeader>
          <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      )}
    </div>
  );
}