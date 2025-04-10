import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { app } from '@/lib/firebase';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const auth = getAuth(app);
    const userRecord = await auth.getUserByEmail(email);

    if (!userRecord) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // In a real application, we would need to compare the provided password with the hashed password stored in Firebase
    // Since we are not storing the password, we can't check if it's correct.
    // This is a placeholder for the correct functionality.

    const user = {
      uid: userRecord.uid,
      email: userRecord.email,
    };
    
    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    console.error('Error logging in user:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}