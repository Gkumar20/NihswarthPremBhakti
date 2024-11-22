// pages/api/youtube.ts

import { NextResponse } from 'next/server';
import { videoLinks } from '@/utils/videos'; // Import video links

export async function GET() {
  try {
    // Simply return the video links from utils
    return NextResponse.json({ videos: videoLinks });
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}
