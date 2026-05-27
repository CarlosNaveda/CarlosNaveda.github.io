
'use client';

import PostPreview from '@/src/components/Post/PostPreview';
import FooterBar from '@/src/components/FooterBar/FooterBar';
import generateDelay  from '@/src/utils/generateDelay';
import generateDuration from '@/src/utils/generateDuration';
import generateDistance from '@/src/utils/generateDistance';
import getUniqueArray  from '@/src/utils/getUniqueArray';
import { useState } from 'react';
import {useIsDesktop} from '@/src/Hook/useIsDesktop';
import {useSound} from '@/src/Hook/useSound';
import postType from '@/src/components/Post/postType';

export default function BlogMain({ mapPosts }: { mapPosts: postType[] }) {
    
  const allUniqueTags = getUniqueArray(mapPosts.flatMap(post => post.tag));
  const isDesktop = useIsDesktop(768);

  //Para filtrar los posts por tag
  const [tagToFilter, setTagToFilter] = useState("");
  const filterPostsByTag = (tag: string) => {
    return mapPosts.filter(post => post.tag.includes(tag));
  };

  //Para el sonido cuando se hace hover en un tag
  const { play: playUiOrbit} = useSound('ui-orbit', '/sounds/ui-orbit.mp3', 0.4);  


  return (    
    <main>
        <div className="blog-main min-h-screen flex flex-col items-center justify-center gap-1 md:gap-4 p-8 pb-20 md:pb-0 text-balanced"> 
            <div className="blog-tags flex flex-col items-center justify-center center gap-2 font-dm-sans">
                <h2 className='title-filter text-2xl md:text-4xl font-outfit'>Filtrar por tag</h2>             
                <div className='wrapper-tags w-[300px] h-[200px] xs:w-[350px] xs:h-[250px] md:w-[500px] md:h-[300px] lg:w-[900px] lg:h-[500px]'>                                    
                    <small className='flex flex-row items-center justify-center center gap-2'> 
                        {/* Recorro el array de tags únicos     */}
                        {allUniqueTags.map((tag, tagIndex) => (                  
                            <span key={tag} className="tag-to-filter text-base top-[55%] md:top-[50%]" onClick={() => {setTagToFilter(tag);playUiOrbit();}}  
                                style={{'--orbit-radius': `${generateDistance(0, tagIndex,isDesktop)}px`, 
                                    animationDelay: `${generateDelay(0, tagIndex)}s`,
                                    animationDuration: generateDuration(0, tagIndex),   
                                }as React.CSSProperties}>{tag}
                            </span>  
                        ))
                        }
                    </small>                    
                </div>
            </div>
            <h2 className='title-posts text-2xl md:text-4xl font-outfit'>Posts</h2> 
            <div className={`blog-main-posts-preview flex flex-col md:pb-20 lg:pb-auto xl:grid ${tagToFilter!="" && filterPostsByTag(tagToFilter).length===1 ? "xl:grid-cols-1" : "xl:grid-cols-2"} items-center justify-center gap-2 md:gap-4`}>                 
                {/* Si no se filtra por tag, se muestran todos los posts */}
                <PostPreview mapPosts={tagToFilter==="" ? mapPosts : filterPostsByTag(tagToFilter)}/>
            </div>            
        </div>            
       <FooterBar /> 
    </main>     
  );
}