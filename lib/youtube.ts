import itemType from "@/src/components/Youtube/itemType";
import IframeVideos from "../src/components/IFrame/IframeVideosType";

export async function getYoutubeVideos(): Promise<IframeVideos[]> {

    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`,
        {
            next: { revalidate: 3600 }
        }
    );

    const data = await response.json();

    return data.items.map((item: itemType, index: number) => ({
        index,
        source: `https://www.youtube.com/embed/${item.id.videoId}`,
        title: item.snippet.title
    }));
}