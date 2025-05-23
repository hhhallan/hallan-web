import { getContentMap } from '@/lib/notion/content';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const contentMap = await getContentMap();
    return NextResponse.json({ content: contentMap });
  } catch (error) {
    console.error('Error in content API route:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}