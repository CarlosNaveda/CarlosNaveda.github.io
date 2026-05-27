
import {getMapPosts} from '../../../src/data/posts';
import formatTitleToKebabCase from '../../../src/utils/formatTitle';
import formatDateToString from '../../../src/utils/formatDate';
import Image from "next/image";
import FooterBar from '@/src/components/FooterBar/FooterBar';
import DynamicTableOfContents from '../../../src/components/Post/DynamicTableOfContents';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import mdxStyles from '../../../src/utils/mdxStyles';
import Link from 'next/link'
import {ChevronLeft} from 'lucide-react';


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
    return (
      <main>
        <h1>Post no encontrado</h1>
      </main>
    );
  }  
    
  const postDetails = `Autor: ${post.author} | Fecha: ${formatDateToString(post.publishDate)}`;      
  const image_width = 500;
  const image_height = 300;

  //Botón para regresar al blog main.  
  function buttonBlogMain() { 
  return (
      <div className="blog-preview-link justify-start">
            <Link className="mt-8 animate-bounce flex flex-row items-center gap-1 lg:gap-2 cursor-pointer text-[var(--paragraph)] hover:text-[var(--titles)] transition-colors" href="/blog">
              <ChevronLeft size={30} /> 
              <span className="text-base md:text-lg lg:text-xl font-dm-sans">Volver</span> 
          </Link>        
      </div>           
  );
  } 

    return (    
          <>
              {post && ( //Si el post existe
                  <main>                    
                    <div className="blog-slug flex flex-row items-center justify-center pt-5 lg:pt-28 p-8 gap-5 md:gap-10 h-auto pb-10 md:pb-20 lg:pb-auto">   
                        <div className='blog-slug-content min-h-screen flex flex-col items-left md:justify-center gap-2 font-outfit'> 
                            {buttonBlogMain()}  
                            <h1 className='blog-slug-title text-2xl md:text-4xl'>{post.title}</h1>
                            <h2 className='blog-slug-details text-sm md:text-2xl'>{postDetails}</h2>                            
                            <Image src={post.imageSource} alt={post.title} className="post-image object-cover w-[100%] h-[200px] md:w-[100%] md:h-[300px]" width={image_width} height={image_height} loading="eager"/>                                                        
                            <div className={`mdx-content prose prose-invert max-w-none font-dm-sans ${mdxStyles}`}>  
                              <MDXRemote source={post.content} 
                                         options={{
                                          mdxOptions: 
                                            {remarkPlugins: [remarkGfm],                                              
                                            },
                                            }}
                                />
                            </div>    
                        </div>                                          
                        <DynamicTableOfContents /> 
                    </div>                    
                    <FooterBar />    
                  </main>          
              )}
          </> 
  );
}