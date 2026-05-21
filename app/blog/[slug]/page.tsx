
import mapPosts from '../../../src/data/posts';
import formatTitleToKebabCase from '../../../src/utils/formatTitle';
import formatDateToString from '../../../src/utils/formatDate';
import Image from "next/image";
import FooterBar from '@/src/components/FooterBar/FooterBar';

export function generateStaticParams() {
  return mapPosts.map((post) => ({
    slug: formatTitleToKebabCase(post.title),
  }));
}
export default async function BlogSlug({params}:{params: {slug: string}}) {
  
  const { slug } = await params;  
  const post = mapPosts.find(p => formatTitleToKebabCase(p.title) === slug) //Obtengo el post que corresponde al slug    
  const postCreated = "Post creado en";
  const indexContent = "Índice de contenidos";
  const image_width = 500;
  const image_height = 300;


    return (    
          <>
              {post && ( //Si el post existe
                  <main>
                    <div className="blog-slug flex flex-row items-center justify-center p-10 gap-5 md:gap-10 h-auto">  
                        <div className='blog-slug-content min-h-screen flex flex-col items-left md:justify-center gap-2'> 
                            <h1 className='blog-slug-title text-2xl md:text-4xl'>{post.title}</h1>
                            <h2 className='blog-slug-created text-xl md:text-2xl'>{postCreated} {formatDateToString(post.publishDate)}</h2>
                            <Image src={post.imageSource} alt={post.title} className="post-image object-cover w-[100%] h-[200px] md:w-[100%] md:h-[300px]" width={image_width} height={image_height}/>
                            <p className='content text-xs md:text-base h-auto'>{post.content}</p> 
                        </div>
                        <div className="index-content self-center md:p-5"> 
                            <h2 className='index-content-title hidden md:block'>{indexContent}</h2>
                            <ul className="index-content-list hidden md:block">
                                {post.tableOfContents.map((tableOfContent) => (
                                    <li key={tableOfContent.index} className="marker:text-[#7E7ADE]" style={{listStyle: "square"}}>
                                      {tableOfContent.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <FooterBar />    
                  </main>          
              )}
          </> 
  );
}