
'use client';
import mapPosts from '../../src/data/posts';
import PostPreview from '@/src/components/Post/PostPreview';
import FooterBar from '@/src/components/FooterBar/FooterBar';

export default function BlogMain() {
  return (    
    <main>
        <div className="blog-main min-h-screen flex flex-col items-center justify-center gap-1 md:gap-4 px-2 md:px-8 pb-20 md:pb-0 text-balanced"> 
            <h2 className='title-filter text-2xl md:text-4xl'>Filtrar por tag: </h2>
            {/* <input type="text" id="blog-input-filter" placeholder="Ingresa un tag"/><hr /> */}
            <div className='blog-tags flex flex-col items-center justify-center center gap-2'>
                {mapPosts.map((post) => (               
                 <small key={post.index} className='flex flex-row items-center justify-center center gap-2'> 
                    {post.tag.map((tag) => (
                        <span key={tag} className='tag-to-filter'>{tag}</span>
                    ))
                    }
                 </small>                    
                 ))
                }
            </div><hr /> 
            <h2 className='title-posts text-2xl md:text-4xl'>Posts</h2>
            <div className='blog-main-posts-preview flex flex-col md:pb-10 xl:grid xl:grid-cols-2 items-center justify-center gap-2 md:gap-4'>
                <PostPreview mapPosts={mapPosts}/>
            </div>            
        </div>            
       <FooterBar />
    </main>     
  );
}