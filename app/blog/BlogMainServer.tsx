
import { getMapPosts } from '@/src/data/posts';
import BlogMainClient from '@/app/blog/BlogMainClient';

export default async function BlogMainServer() {
  const mapPosts = await getMapPosts();
  
  return <BlogMainClient mapPosts={mapPosts} />;
}