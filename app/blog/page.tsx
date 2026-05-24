
'use client';
import mapPosts from '../../src/data/posts';
import PostPreview from '@/src/components/Post/PostPreview';
import FooterBar from '@/src/components/FooterBar/FooterBar';
import generateDelay  from '@/src/utils/generateDelay';
import generateDuration from '@/src/utils/generateDuration';
import generateDistance from '@/src/utils/generateDistance';
import getUniqueArray  from '@/src/utils/getUniqueArray';

export default function BlogMain() {
  
  const allUniqueTags = getUniqueArray(mapPosts.flatMap(post => post.tag));

  return (    
    <main>
        <div className="blog-main min-h-screen flex flex-col items-center justify-center gap-1 md:gap-4 p-8 pb-20 md:pb-0 text-balanced"> 
            <div className="blog-tags flex flex-col items-center justify-center center gap-2 font-dm-sans">
                <h2 className='title-filter text-2xl md:text-4xl font-outfit'>Filtrar por tag</h2>             
                <div className='wrapper-tags w-[300px] h-[200px] xs:w-[350px] xs:h-[250px] md:w-[500px] md:h-[300px] lg:w-[900px] lg:h-[500px]'>                                    
                    <small className='flex flex-row items-center justify-center center gap-2'> 
                        {allUniqueTags.map((tag, tagIndex) => ( //Recorro el array de tags únicos
                            <span key={tag} className="tag-to-filter top-[55%] md:top-[50%]"  
                            style={{'--orbit-radius': `${generateDistance(0, tagIndex)}px`, 
                                animationDelay: `${generateDelay(0, tagIndex)}s`,
                                animationDuration: generateDuration(0, tagIndex),  
                            }as React.CSSProperties}>{tag}</span>  
                        ))
                        }
                    </small>                    
                </div>
            </div>
            <h2 className='title-posts text-2xl md:text-4xl font-outfit'>Posts</h2>
            <div className='blog-main-posts-preview flex flex-col md:pb-20 lg:pb-auto xl:grid xl:grid-cols-2 items-center justify-center gap-2 md:gap-4'> 
                <PostPreview mapPosts={mapPosts}/>
            </div>            
        </div>            
       <FooterBar /> 
    </main>     
  );
}