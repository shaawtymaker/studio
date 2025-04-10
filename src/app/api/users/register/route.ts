import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { db } from '@/lib/firebase';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: 'Password should be at least 6 characters long' }, { status: 400 });
    }

    const auth = getAuth();
    const userRecord = await auth.createUser({
      email,
      password,
    });

    await db.collection('users').doc(userRecord.uid).set({
        email: email,
    })

    return NextResponse.json({ user: userRecord }, { status: 201 });
  } catch (error:any) {
    if (error.code === 'auth/email-already-exists') {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}