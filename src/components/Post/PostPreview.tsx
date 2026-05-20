import PostType from "../Post/PostType";
import Image from "next/image";
import formatDateToString from '@/src/utils/formatDate';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import formatTitleToKebabCase from '../../../src/utils/formatTitle';

const PostPreview = ({mapPosts}: {mapPosts: PostType[]}) =>{

    const image_width = 100;
    const image_height = 100;
    const router = useRouter();

    return(
        <>
            {mapPosts.map((mapPost) => (
                    <div key={mapPost.index} className="post-preview-content flex flex-row items-center justify-center w-[350] h-[200] md:w-[600] md:h-[260] gap-0" onClick={() => {{router.push(`/blog/${formatTitleToKebabCase(mapPost.title)}`)}}}>                           
                            <div className="post-preview-text flex flex-col gap-1 md:gap-2 w-[260] md:w-[450] h-auto p-1 md:p-10 text-base"> 
                                <div className="date-separator-tag flex flex-row gap-4 items-center justify-center">
                                    <h3 className="date text-xs md:text-base">{formatDateToString(mapPost.publishDate)}</h3> 
                                    <hr className="separator"></hr>
                                    <h3 className="tag text-xs md:text-base">{mapPost.tag}</h3>
                                </div>
                                <h2 className="post-preview-title text-lg md:text-2xl">{mapPost.title}</h2> 
                                <p className="post-preview-shortDescription text-xs md:text-base">{mapPost.shortDescription}</p>     
                                <Link className="post-slug-link text-sm md:text-lg" href="">Leer más...</Link>
                            </div>
                            <Image src={mapPost.imageSource} alt={mapPost.title} className="post-preview-image object-cover w-[50] h-[50] md:w-[100] md:h-[100]" width={image_width} height={image_height}/>
                    </div>
            ))}   
        </>        
    )
}

export default PostPreview
