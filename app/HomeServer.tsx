import { getMapPosts } from '@/src/data/posts';
import { getYoutubeVideos } from '../lib/youtube';
import HomeClient from './HomeClient';

export default async function HomeServer() {

  const mapPosts = await getMapPosts();
  const mapVideos = await getYoutubeVideos();

  return (
    <HomeClient 
      mapPosts={mapPosts}
      mapVideos={mapVideos}
    />
  );
}