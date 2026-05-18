import { useState } from 'react';
import PostType from "../Post/PostType";
import Image from 'next/image';
import formatDateToString from '@/src/utils/formatDate';
import {ChevronLeft, ChevronRight } from 'lucide-react';



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

    /**
     * Botón con ícono ChevronLeft con animación de rebote, al hacer clic, desplaza suavemente la vista hacia el siguiente post del carrusel.
     */
    function buttonChevronLeft() { 
    return (
        <button className="mt-8 animate-bounce" style={{color: 'var(--paragraph)', position:"absolute", right: "700px"}} onClick={() => setCurrentIndex(previousSlide(currentIndex))}>
            <ChevronLeft size={40} />
        </button>        
    );
    } 

    /**
     * Botón con ícono ChevronRight con animación de rebote, al hacer clic, desplaza suavemente la vista hacia el anterior post del carrusel.
     */
    function buttonChevronRight() { 
    return (
        <button className="mt-8 animate-bounce" style={{color: 'var(--paragraph)', position:"absolute", left: "600px"}} onClick={() => setCurrentIndex(nextSlide(currentIndex))}>
            <ChevronRight size={40} />
        </button>        
    );
    }


   
    return(
        <div className="posts flex flex-row gap-4 items-center justify-center" style={{position: "relative"}}> 
            {buttonChevronLeft()}
            {posts.toReversed().map((post) => (               
                 <div key={post.index} className="carousel flex flex-col transition-all duration-300 ease-in-out" style={{position: "absolute",left: post.index === currentIndex ? "0px": `${(currentIndex-post.index) * 25}px`, zIndex: post.index === currentIndex ? 10:10 - Math.abs(post.index - currentIndex), transform: post.index === currentIndex ? "scale(1) translateX(0)":`scale(${1 - Math.abs(post.index - currentIndex) * 0.05})`}}>       
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
             {buttonChevronRight()}                             
        </div>                  
    ); 

 }

export default Carousel;