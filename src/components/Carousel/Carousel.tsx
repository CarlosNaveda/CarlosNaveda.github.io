'use client';

import { useState,useEffect } from 'react';
import postType from "../Post/postType";
import Image from 'next/image';
import formatDateToString from '@/src/utils/formatDate';
import {ChevronLeft, ChevronRight } from 'lucide-react';
import formatTitleToKebabCase from '../../../src/utils/formatTitle';
import { useRouter } from 'next/navigation';



const Carousel = ({posts}: {posts: postType[]}) =>{

    const [currentIndex, setCurrentIndex] = useState(0);    
    const router = useRouter();

    //Para mobile
    const mobileMaxWidth = 768;
    const [isMobile, setIsMobile] = useState<boolean | null>(null); 

    //Para Tablet   
    const tabletMaxWidth = 1024;
    const [isTablet, setIsTablet] = useState<boolean | null>(null); 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mobileMaxWidth);
            setIsTablet(window.innerWidth < tabletMaxWidth);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        <button className="mt-8 animate-bounce absolute right-[310px] bottom-[200px] xs:bottom-[170px] md:bottom-[370px] lg:bottom-auto md:right-[540px] lg:right-[600px]" style={{color: 'var(--paragraph)'}} onClick={() => setCurrentIndex(previousSlide(currentIndex))}>
            <ChevronLeft size={40} />
        </button>        
    );
    } 

    /**
     * Botón con ícono ChevronRight con animación de rebote, al hacer clic, desplaza suavemente la vista hacia el anterior post del carrusel.
     */
    function buttonChevronRight() { 
    return (
        <button className="mt-8 animate-bounce absolute left-[310px] bottom-[200px] xs:bottom-[170px] md:bottom-[370px] lg:bottom-auto md:left-[500px] lg:left-[600px]" style={{color: 'var(--paragraph)'}} onClick={() => setCurrentIndex(nextSlide(currentIndex))}>
            <ChevronRight size={40} /> 
        </button>        
    );
    }
   
    if (isMobile === null || isTablet === null) {
        return null; 
    }       
    
    return(
        <div className="posts flex flex-row gap-4 items-center justify-center w-[350px] h-[350px] md:w-[600px] md:h-[600px]" style={{position: "relative"}}>  
            {buttonChevronLeft()}
            {posts.toReversed().map((post, index) => (               
                <div key={post.index} className="carousel flex flex-col transition-all duration-300 ease-in-out bottom-[110px] xs:bottom-[80px] md:bottom-[190px] lg:bottom-auto" 
                    onClick={() => router.push(`/blog/${formatTitleToKebabCase(post.title)}`)} 
                    style={{
                    position: "absolute", 
                    left:
                    index === currentIndex
                        ? isMobile 
                        ? "55px" //Para mobile
                        : isTablet
                        ? "95px" //Para Tablet
                        : "25px" //Para Desktop                        
                        : isMobile
                        ? `${55 + (currentIndex - index) * 5}px`  //Para mobile
                        : isTablet
                        ? `${95 + (currentIndex - index) * 10}px`  //Para tablet
                        : `${25 + (currentIndex - index) * 15}px`, //Para desktop
                    zIndex: 
                    index === currentIndex 
                        ? 10    //Si estamos en el post actual, ponemos un z-index alto
                        : 10 - Math.abs(index - currentIndex), //Si no, ponemos un z-index basado en la distancia al post actual
                    transform: 
                    index === currentIndex 
                        ? "scale(1) translateX(0)" //Si estamos en el post actual, no aplicamos ninguna transformación                        
                        :`scale(${isMobile || isTablet ? 1 - Math.abs(index - currentIndex) * 0.02: 1 - Math.abs(index - currentIndex) * 0.05})` //Si no, aplicamos una transformación basada en la distancia al post actual
                    }}>       
                    <div className="carousel-content w-[245px] h-[245px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] font-dm-sans" style={{position: "relative"}}>
                        <Image src={post.imageSource} alt={post.title} className={index === currentIndex ? "carousel-image": "carousel-image-off"} width={500} height={500} loading="eager"/> 
                        <div className={index === currentIndex ? "carousel-info flex flex-col gap-1 px-4 py-2 md:gap-2 md:p-5": "carousel-info-off flex flex-col gap-1 px-4 py-2 md:gap-2 md:p-5"}>
                            <div className="date-separator-tag flex flex-row gap-4 items-center justify-center">
                                <h3 className="date text-[10px] items-end md:text-base">{formatDateToString(post.publishDate)}</h3> 
                                <hr className="separator"></hr>
                                <h3 className="tag text-[10px] md:text-base">{post.tag}</h3> 
                            </div>
                            <h2 className="carousel-title text-[12px] md:text-2xl font-outfit">{post.title}</h2> 
                            <p className="carousel-shortDescription text-[10px] md:text-base">{post.shortDescription}</p>  
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