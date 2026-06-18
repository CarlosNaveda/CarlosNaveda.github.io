import { NextResponse } from "next/server";
import { getYoutubeVideos } from "@/lib/youtube";



/**
 * @param none
 * @returns una respuesta JSON con los videos de YouTube cargados en la aplicación
 */
export async function GET(): Promise<NextResponse> {
    const data = await getYoutubeVideos();

    return NextResponse.json(data);
}