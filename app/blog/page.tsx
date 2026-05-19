
'use client';
import mapPosts from '../../src/data/posts';
import PostPreview from '@/src/components/Post/PostPreview';

export default function BlogMain() {
  return (    
    <main>
        <div className="blog-main min-h-screen flex flex-col items-center justify-center gap-4 px-8 text-balanced">
            <h2 className='title-filter text-4xl'>Filtrar por tag: </h2>
            <input type="text" id="blog-input-filter" placeholder="Ingresa un tag"/><hr />
            <div className='blog-tags flex flex-row items-center justify-center center gap-2'>
                {mapPosts.map((post) => (               
                 <small key={post.index} className='tag-to-filter'>{post.tag}</small>                    
                 ))
                }
            </div><hr /> 
            <h2 className='title-posts text-4xl'>Posts</h2>
            <div className='blog-main-posts-preview grid grid-cols-2 items-center justify-center gap-4'>
                <PostPreview mapPosts={mapPosts}/>
            </div> 
        </div>
            
      

    </main>     
  );
}