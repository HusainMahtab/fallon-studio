import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Feedback from '@/models/Feedback';

export async function GET() {
  try {
    await dbConnect();
    const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
    return NextResponse.json(feedbacks);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch feedbacks' }, { status: 500 });
  }
} 