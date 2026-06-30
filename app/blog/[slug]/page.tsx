
import {getMapPosts} from '@/src/data/posts';
import formatTitleToKebabCase from '@/src/utils/formatTitle';
import formatDateToString from '@/src/utils/formatDate';
import Image from "next/image";
import FooterBar from '@/src/components/FooterBar/FooterBar';
import DynamicTableOfContents from '@/src/components/Post/DynamicTableOfContents';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import mdxStyles from '@/src/utils/mdxStyles';
import { notFound } from 'next/navigation';
import TopBarBlogNav from '@/src/components/NavBar/TopBarBlogNav';
import GiscusComments from '@/src/components/Comments/GiscusComments';
import { BlogImage } from '@/src/components/Mdx/BlogImage';
import { Highlight } from '@/src/components/Mdx/Highlight';
import { Callout } from '@/src/components/Mdx/Callout';
import { Timeline, TimelineItem } from '@/src/components/Mdx/Timeline';
import { ComparisonTable, ComparisonRow } from '@/src/components/Mdx/ComparisonTable';
import { YouTubeEmbed } from '@/src/components/Mdx/YouTubeEmbed';
import { Sources, Source } from '@/src/components/Mdx/Sources';
import ShareButtons from '@/src/components/Button/ShareButtons';

/**
 * Genera parámetros estáticos para las rutas de los posts.
 * Esta función se utiliza en Next.js para pre-renderizar las rutas de los posts
 * durante el proceso de construcción del sitio.
 *
 * @returns {Promise<{slug: string}[]>} Una promesa que resuelve en un array de objetos
 * con el slug de cada post, utilizado para generar las rutas estáticas.
 */
export async function generateStaticParams() {
  const mapPosts = await getMapPosts();

  return mapPosts.map((post) => ({
    slug: formatTitleToKebabCase(post.title),
  }));
}

export default async function BlogSlug({params}:{params: {slug: string}}) {
  
  const { slug } = await params;  
  const mapPosts = await getMapPosts();
  const post = mapPosts.find(p => formatTitleToKebabCase(p.title) === slug) //Obtengo el post que corresponde al slug  
  
  if (!post) { //Si el post no existe    
      notFound();      
  }  
    
  const postDetails = `Autor: ${post.author} | Fecha: ${formatDateToString(post.publishDate)}`;      
  const image_width = 500;
  const image_height = 600;
  const postUrl = `https://carlosnavedam.com/blog/${slug}`;


    return (    
          <>
              {post && ( //Si el post existe
                  <main className='pt-2 flex flex-col items-center w-full'>
                    <TopBarBlogNav/>
                    <div className="blog-slug w-full max-w-[1800px] mx-auto px-0 xs:px-0 md:px-12 lg:px-6 xl:px-10 pt-10 lg:pt-28 pb-20 grid grid-cols-12 gap-4 lg:gap-6 xl:gap-10">
                        {/* Columna 1 - Izquierda*/}
                        <aside className="hidden xl:block xl:col-span-1">
                        <div className="sticky top-28"></div>
                        </aside>
                        {/* Columna 2 - Centro*/}
                        <article className='blog-slug-content col-span-12 lg:col-span-8 xl:col-span-7 flex flex-col gap-4 min-w-0 px-4 sm:px-6 md:px-8 lg:px-10'>
                            <h1 className='blog-slug-title text-2xl md:text-4xl'>{post.title}</h1>
                            <h2 className='blog-slug-details text-sm md:text-2xl'>{postDetails}</h2>                            
                            <Image src={post.imageSource} alt={post.title} className="post-image object-cover w-[100%] h-[300px] md:w-[100%] md:h-[500px]" width={image_width} height={image_height} loading="eager"/>                                                        
                            <div className={`mdx-content prose prose-invert max-w-none font-dm-sans ${mdxStyles}`}>  
                              <MDXRemote source={post.content}
                                         components={{ BlogImage, Highlight, Callout, Timeline, TimelineItem, ComparisonTable, ComparisonRow, YouTubeEmbed, Sources, Source }}
                                         options={{
                                          mdxOptions: 
                                            {remarkPlugins: [remarkGfm],                                               
                                            },
                                            }}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4'>
                              <ShareButtons postUrl={postUrl} postTitle={post.title}/>                                               
                            </div>                            
                            <GiscusComments />    
                        </article >
                        {/* Columna 3 - Derecha*/}
                        <aside className="hidden lg:block lg:col-span-4">
                          <DynamicTableOfContents/>
                        </aside>
                    </div>                    
                    <FooterBar />    
                  </main>          
              )}
          </> 
  );
}