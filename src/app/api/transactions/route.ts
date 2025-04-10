// src/app/api/transactions/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, where, Timestamp, QueryDocumentSnapshot, getFirestore, Query } from 'firebase-admin/firestore';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, category, date, description } = body;
    const userId = 'test-user-id'; // Replace with actual user ID retrieval

    if (!amount || !category || !date) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const docRef = await addDoc(collection(getFirestore(), 'transactions'), {
      userId,
      amount,
      category,
      date: Timestamp.fromDate(new Date(date)),
      description,
    });

    return NextResponse.json({id: docRef.id, message: 'Transaction created'}, {status: 201});
  } catch (error) {
    console.error('Error creating transaction:', error);
    return NextResponse.json({ message: 'Error creating transaction' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = 'test-user-id'; // Replace with actual user ID retrieval
    const q: Query = query(collection(getFirestore(), 'transactions'), where('userId', '==', userId));

    const querySnapshot = await q.get();
    const transactions = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(transactions, { status: 200 });
    } catch (error) {
        console.error('Error getting transactions:', error);
        return NextResponse.json({message: 'Error getting transactions'}, {status: 500});
    }
}