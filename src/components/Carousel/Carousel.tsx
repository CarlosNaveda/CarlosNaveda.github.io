import { useState } from 'react';
import PostType from "./PostType";
import Image from 'next/image';
import formatDateToString from '@/src/utils/formatDate';
import { relative } from 'path';


const Carousel = ({posts}: {posts: PostType[]}) =>{

    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * Devuelve el índice del siguiente slide.
     * @param {currentIndex} currentIndex - El índice actual.
     * @returns {number} El índice del siguiente slide.
     */
    function nextSlide (currentIndex:number):number{
        //Si estoy en el último slide, solo salgo.
        if (currentIndex === posts.length - 1) {
            return 0;
        }
        return currentIndex + 1;
    } 

    /**
     * Devuelve el índice del anterior slide.
     * @param {currentIndex} currentIndex - El índice actual.
     * @returns {number} El índice del anterior slide.
     */
    function previousSlide (currentIndex:number):number {
        //Si estoy en el primer slide, retorno el último índice.
        if (currentIndex === 0) {
            return posts.length - 1;
        }
        return currentIndex - 1;
    }
   
    return(
        <div className="posts flex flex-row gap-4 items-center" style={{position: "relative"}}>
            {posts.toReversed().map((post) => (               
                 <div key={post.index} className="carousel flex flex-col" style={{position: "absolute",left: post.index === currentIndex ? "none": `calc(${currentIndex - post.index} * 40px)`}}>    
                    <div className="carousel-content">
                        <Image src={post.imageSource} alt={post.title} className={post.index === currentIndex ? "carousel-image": "carousel-image-off"} width={500} height={500}/>
                        <div className={post.index === currentIndex ? "carousel-info flex flex-col gap-2": "carousel-info-off flex flex-col gap-2"}>
                            <div className="date-separator-tag flex flex-row gap-4 items-center justify-center">
                                <h3 className="date">{formatDateToString(post.publishDate)}</h3>
                                <hr className="separator"></hr>
                                <h3 className="tag">{post.tag}</h3>
                            </div>
                            <h2 className="carousel-title text-2xl">{post.title}</h2> 
                            <p className="carousel-shortDescription">{post.shortDescription}</p> 
                        </div>
                    </div>
                </div>                         
            ))
            }                             
        </div>                  
    ); 

 }

export default Carousel;