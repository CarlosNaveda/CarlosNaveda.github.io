import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import options from './mdx-config';
import PostType from '@/src/components/Post/postType';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  coverImage?: string;
  readingTime?: number;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  source: Record<string, unknown>;
}


/**
 * Retorna los posts en formato de tipo PostType desde el directorio de contenido.
 * @returns {PostType[]} Los posts en forma de arreglo de objetos PostType.
 */
export function getMDXPostsAsPostType(): PostType[] {
  const files = fs.readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'));

  return files
    .map((file) => {
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
      } as PostType;
    })
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

/**
 * Retorna el post con la ruta de acción especificada.
 * @param {string} slug La ruta del archivo markdown.
 * @returns {Post | null} El post correspondiente, o null si no se encontró ninguno.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: mdxContent } = matter(content);

    const mdxSource = await serialize(mdxContent, options as Record<string, unknown>);
    

    return {
      slug,
      metadata: {
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        tags: data.tags,
        coverImage: data.coverImage,
        readingTime: calculateReadingTime(mdxContent),
      },
      source: mdxSource,
    };
  } catch (error) {
    console.error(`Error al leer post "${slug}":`, error);
    return null;
  }
}

/**
 * Calcula el tiempo de lectura del contenido en minutos.
 * @param {string} content El contenido a medir.
 * @returns {number} La cantidad de minutos que se tarda leer el contenido.
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}