import { getProjects } from '@/lib/notion/projects';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Error in projects API route:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}