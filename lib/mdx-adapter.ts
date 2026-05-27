'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import postType from '@/src/components/Post/postType';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export async function getMDXPosts(): Promise<postType[]> {  

  const files = fs.readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'));

  const postsWithSerializedContent = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(POSTS_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
 
      return {
        index: data.index || 0,
        imageSource: data.imageSource || '/images/blog/default.jpg',
        publishDate: new Date(data.publishDate),
        tag: Array.isArray(data.tag) ? data.tag : [data.tag],
        title: data.title || 'Sin título',
        shortDescription: data.shortDescription || '',
        author: data.author || 'Carlos Naveda',
        tableOfContents: data.tableOfContents || [],
        content: content,               
      } as postType;      
    })
  );

  return postsWithSerializedContent.sort(
    (a, b) => b.publishDate.getTime() - a.publishDate.getTime()
  );
}