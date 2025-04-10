import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { getAuth } from 'firebase-admin/auth';
import { collection, addDoc, getDocs, query, where, Timestamp, QueryDocumentSnapshot } from 'firebase-admin/firestore';

export async function POST(request: NextRequest) {
    try {
    const data = await request.json();
    const { category, amount, period, startDate } = data;

    if (!category || !amount || !period || !startDate) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }
    
    const authorization = request.headers.get('Authorization');

    if (!authorization) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const token = authorization.split(' ')[1];
    const decodedToken = await getAuth().verifyIdToken(token);
    const userId = decodedToken.uid;

    const docRef = await addDoc(collection(db, "budgets"), {
        userId,
        category,
        amount,
        period,
        startDate
    });

    return NextResponse.json({ message: 'Budget created', id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating budget' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const authorization = request.headers.get('Authorization');

    if (!authorization) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const token = authorization.split(' ')[1];
    const decodedToken = await getAuth().verifyIdToken(token);
    const userId = decodedToken.uid;

    const q = query(collection(db, "budgets"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const budgets = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => ({
        id: doc.id,
        ...doc.data()
    }));
    return NextResponse.json(budgets, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error getting budgets' }, { status: 500 });
  }
}