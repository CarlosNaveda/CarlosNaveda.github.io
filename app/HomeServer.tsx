import { getMapPosts } from '@/src/data/posts';
import { getYoutubeVideosCache } from '@/lib/youtube';
import HomeClient from '@/app/HomeClient';

export default async function HomeServer() {

  const mapPosts = await getMapPosts();
  const mapVideos = await getYoutubeVideosCache();

  return (
    <HomeClient 
      mapPosts={mapPosts}
      mapVideos={mapVideos}
    />
  );
}