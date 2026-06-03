
import {getMapPosts} from '../../../src/data/posts';
import formatTitleToKebabCase from '../../../src/utils/formatTitle';
import formatDateToString from '../../../src/utils/formatDate';
import Image from "next/image";
import FooterBar from '@/src/components/FooterBar/FooterBar';
import DynamicTableOfContents from '../../../src/components/Post/DynamicTableOfContents';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import mdxStyles from '../../../src/utils/mdxStyles';
import { notFound } from 'next/navigation';
import TopBarBlogNav from '../../../src/components/NavBar/TopBarBlogNav';
import GiscusComments from '../../../src/components/Comments/GiscusComments';
import LikeButton from '../../../src/components/Button/LikeButton';
import { BlogImage } from '../../../src/components/Mdx/BlogImage';
import { Highlight } from '../../../src/components/Mdx/Highlight';
import { Callout } from '../../../src/components/Mdx/Callout';
import ShareButtons from '../../../src/components/Button/ShareButtons';





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
  const image_height = 300;
  const postUrl = `https://carlosnavedam.com/blog/${slug}`;


    return (    
          <>
              {post && ( //Si el post existe
                  <main className='pt-2 flex flex-col items-center w-full'>
                    <TopBarBlogNav/>
                    {/* <div className="blog-slug flex flex-cols-3 items-start justify-center w-full max-w-[380px] xs:max-w-[400px] md:max-w-[650px] lg:max-w-[1800px] mx-auto pt-5 lg:pt-28 p-8 gap-5 md:gap-10 h-auto pb-10 md:pb-20 lg:pb-auto">                                                  */}
                    <div className="blog-slug w-full max-w-[1800px] mx-auto px-0 xs:px-0 md:px-12 lg:px-10 pt-10 lg:pt-28 pb-20 grid grid-cols-12 gap-4 lg:gap-10">                                                   
                        {/* Columna 1 - Izquierda*/}
                        <aside className="hidden xl:block xl:col-span-2">
                        <div className="sticky top-28"></div>
                        </aside>
                        {/* Columna 2 - Centro*/}
                        {/* <article className='blog-slug-content min-h-screen flex flex-col justify-center gap-2 font-outfit w-full max-w-[380px] xs:max-w-[400px] md:max-w-[650px] lg:max-w-[1800px]'>                              */}
                        <article className='blog-slug-content col-span-12 lg:col-span-8 flex flex-col gap-4 min-w-0 px-4 sm:px-6 md:px-8 lg:px-10'>
                            <h1 className='blog-slug-title text-2xl md:text-4xl'>{post.title}</h1>
                            <h2 className='blog-slug-details text-sm md:text-2xl'>{postDetails}</h2>                            
                            <Image src={post.imageSource} alt={post.title} className="post-image object-cover w-[100%] h-[200px] md:w-[100%] md:h-[300px]" width={image_width} height={image_height} loading="eager"/>                                                        
                            <div className={`mdx-content prose prose-invert max-w-none font-dm-sans ${mdxStyles}`}>  
                              <MDXRemote source={post.content}
                                         components={{ BlogImage, Highlight, Callout }} //Para ir agregando componentes y utilizarlos en el blog.
                                         options={{
                                          mdxOptions: 
                                            {remarkPlugins: [remarkGfm],                                               
                                            },
                                            }}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4'>
                              <ShareButtons postUrl={postUrl} postTitle={post.title}/>                 
                              <LikeButton postSlug={slug}/>
                            </div>                            
                            <GiscusComments />    
                        </article >
                        {/* Columna 3 - Derecha*/}       
                        <aside className="hidden lg:block lg:col-span-2">
                          <DynamicTableOfContents/>                                                                     
                        </aside>
                    </div>                    
                    <FooterBar />    
                  </main>          
              )}
          </> 
  );
}