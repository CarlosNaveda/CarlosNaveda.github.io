
'use server';

import { getMDXPosts } from '@/lib/mdx-adapter';

export async function getMapPosts() {  
  return await getMDXPosts();
}