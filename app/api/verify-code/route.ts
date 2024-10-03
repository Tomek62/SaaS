import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { code } = await req.json();

  // Compare code with the one stored in the database or session
  const storedCode = "123456"; // Example, fetch from your database

  if (code === storedCode) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: 'Code de vérification invalide' }, { status: 400 });
}
