import PostType from "../Post/PostType";
import Image from "next/image";
import formatDateToString from '@/src/utils/formatDate';
import Link from 'next/link'

const PostPreview = ({mapPosts}: {mapPosts: PostType[]}) =>{

    const image_width = 50;
    const image_height = 50;

    return(
        <>
            {mapPosts.map((mapPost) => (
                    <div key={mapPost.index} className="post-preview-content flex flex-row items-center justify-center">                           
                            <div className="post-preview-text flex flex-col gap-2">
                                <div className="date-separator-tag flex flex-row gap-4 items-center justify-center">
                                    <h3 className="date">{formatDateToString(mapPost.publishDate)}</h3>
                                    <hr className="separator"></hr>
                                    <h3 className="tag">{mapPost.tag}</h3>
                                </div>
                                <h2 className="post-preview-title text-2xl">{mapPost.title}</h2> 
                                <p className="post-preview-shortDescription">{mapPost.shortDescription}</p> 
                                <Link className="post-slug-link text-xl" href="">Leer más...</Link>
                            </div>
                            <Image src={mapPost.imageSource} alt={mapPost.title} className="post-preview-image object-cover" width={image_width} height={image_height}/>                           
                    </div>
            ))}   
        </>        
    )
}

export default PostPreview
