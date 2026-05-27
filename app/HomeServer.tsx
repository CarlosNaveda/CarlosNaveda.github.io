import { getMapPosts } from '@/src/data/posts';
import HomeClient from './HomeClient';

export default async function HomeServer() {
  const mapPosts = await getMapPosts();
  
  return <HomeClient mapPosts={mapPosts} />;
}