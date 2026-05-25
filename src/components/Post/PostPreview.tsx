import PostType from "./postType";
import Image from "next/image";
import formatDateToString from '@/src/utils/formatDate';
import Link from 'next/link'
import formatTitleToKebabCase from '../../../src/utils/formatTitle';
import { AnimatePresence, motion } from "framer-motion";

const PostPreview = ({mapPosts}: {mapPosts: PostType[]}) =>{

    const image_width = 100;
    const image_height = 100;    

    return(
        <AnimatePresence mode="popLayout">
            {mapPosts.map((mapPost) => (
                    <motion.div layout 
                    key={mapPost.index} 
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.25 }}
                    className="post-preview-content transition-all duration-300 ease-in-out flex flex-row items-center justify-center w-[350] h-[200] md:w-[600] md:h-[260] gap-0 font-dm-sans">                           
                        <div className="post-preview-text flex flex-col gap-1 md:gap-2 w-[260] md:w-[450] h-auto p-1 md:p-10 text-base justify-start"> 
                            <div className="date-separator-tag flex flex-row gap-4 items-center justify-start">
                                <h3 className="date text-xs md:text-base">{formatDateToString(mapPost.publishDate)}</h3> 
                                <hr className="separator"></hr>
                                <h3 className="text-xs md:text-base flex flex-row gap-2">
                                    {mapPost.tag.map((tag,tagIndex) => ( //Recorro el array de tags
                                        <span key={tagIndex} className="tag">{tag}</span>  
                                    ))}
                                </h3>
                            </div>
                            <h2 className="post-preview-title text-lg md:text-2xl font-outfit">{mapPost.title}</h2> 
                            <p className="post-preview-shortDescription text-xs md:text-base">{mapPost.shortDescription}</p>      
                            <Link className="post-slug-link text-sm md:text-lg lg:w-[100px]" href={`/blog/${formatTitleToKebabCase(mapPost.title)}`}>Leer más...</Link>
                        </div>
                        <Image src={mapPost.imageSource} alt={mapPost.title} className="post-preview-image object-cover w-[50] h-[50] md:w-[100] md:h-[100]" width={image_width} height={image_height} loading="eager"/>
                    </motion.div>
            ))}   
        </AnimatePresence>      
    )
} 

export default PostPreview;