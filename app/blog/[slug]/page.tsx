
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
                    <div className="blog-slug flex flex-row items-center justify-center gap-10"> 
                        <div className='blog-slug-content min-h-screen flex flex-col items-left justify-center gap-2'> 
                            <h1 className='blog-slug-title'>{post.title}</h1>
                            <h2 className='blog-slug-created'>{postCreated} {formatDateToString(post.publishDate)}</h2>
                            <Image src={post.imageSource} alt={post.title} className="post-image object-cover" width={image_width} height={image_height}/>
                            <p className='content'>{post.content}</p>
                        </div>
                        <div className="index-content self-start">
                            <h2 className='index-content-title'>{indexContent}</h2>
                            <ul className="index-content-list">
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