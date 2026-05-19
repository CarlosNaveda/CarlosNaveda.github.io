
import mapPosts from '../../../src/data/posts';
import formatTitleToKebabCase from '../../../src/utils/formatTitle';
import formatDateToString from '../../../src/utils/formatDate';
import Image from "next/image";

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
    <main>
        {post && ( //Si el post existe
             <div className="blog-slug">
                  <div className='blog-slug-content min-h-screen flex flex col items-center justify-center gap-4'>
                    <title>{post.title}</title>                    
                    <h2>{postCreated} {formatDateToString(post.publishDate)}</h2>
                    <Image src={post.imageSource} alt={post.title} className="post-preview-image object-cover" width={image_width} height={image_height}/>
                    <p>{post.content}</p>
                </div>
                <div className="index-content">
                    <h2>{indexContent}</h2>
                    <ul>
                        {post.tableOfContents.map((tableOfContent) => (
                            <li key={post.index}>
                              {tableOfContent.title}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>             
        )}
    </main>     
  );
}