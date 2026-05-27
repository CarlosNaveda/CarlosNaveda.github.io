
import { getMapPosts } from '@/src/data/posts';
import BlogMainClient from './BlogMainClient';

export default async function BlogMainServer() {
  const mapPosts = await getMapPosts();
  
  return <BlogMainClient mapPosts={mapPosts} />;
}