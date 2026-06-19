import PlaylistItemType from "@/src/components/Youtube/PlaylistItemType";
import IframeVideos from "@/src/components/IFrame/IframeVideosType";
import { unstable_cache } from 'next/cache'; 

async function getYoutubeVideos(): Promise<IframeVideos[]> {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    try {
        // Paso 1: Obtener el playlist ID de uploads (1 unidad)
        const channelRes = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=contentDetails`,
            { next: { revalidate: 86400 } }
        );
        
        const channelData = await channelRes.json();
        if (!channelData.items?.[0]) {
            console.error('Canal no encontrado');
            return [];
        }

        const uploadPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Paso 2: Obtener videos del playlist (1 unidad)
        const videosRes = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${uploadPlaylistId}&part=snippet&maxResults=4&order=date`,
            { next: { revalidate: 86400 } }
        );

        const data = await videosRes.json();

        if (!data.items || !Array.isArray(data.items)) {
            console.error('Error en YouTube API:', data);
            return [];
        }

       return data.items.map((item: PlaylistItemType, index: number) => ({
            index,
            source: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
            title: item.snippet.title
        }));
    } catch (error) {
        console.error('Error YouTube API:', error);
        return [];
    }
}

export const getYoutubeVideosCache = unstable_cache(
    () => getYoutubeVideos(),
    ['youtube-videos'],
    { revalidate: 86400 }
);