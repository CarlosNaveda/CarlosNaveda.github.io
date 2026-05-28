import { NextResponse } from 'next/server';

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID!;
const MAX_RESULTS = 4;

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${MAX_RESULTS}&type=video`;

  const response = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hora
  const data = await response.json();

  return NextResponse.json(data);
}