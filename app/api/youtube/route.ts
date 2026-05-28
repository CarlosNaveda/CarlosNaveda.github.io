import { NextResponse } from "next/server";
import { getYoutubeVideos } from "../../../lib/youtube";

export async function GET() {
    const data = await getYoutubeVideos();

    return NextResponse.json(data);
}