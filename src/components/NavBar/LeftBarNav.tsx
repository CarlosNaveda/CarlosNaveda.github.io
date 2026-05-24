'use client';

import {HouseHeart, UserStar, BriefcaseBusiness, CirclePlay, NotebookPen} from 'lucide-react';
import {useSection} from '../../Hook/useSection';
import { useState,useEffect,useRef } from 'react';
import { ListCollapse } from 'lucide-react';
import Link from 'next/link'


const sectionsToShowNav = ["sobreMi", "experiencia","tonextaxis","blog"]; //Secciones que se muestran en la barra lateral
export default function LeftBarNav() {
    
    const icon_size = 20;   
    const { activeSection } = useSection();    
    
    //Para manejar la visibilidad del modo acordión
    const [currentState, setCurrentState] = useState(false);
    const accordionRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: Event) => {            
            // Si el acordeón está abierto y el clic fue fuera del elemento referenciado
            if (accordionRef.current && event.target instanceof Node && !accordionRef.current.contains(event.target)) { 
                setCurrentState(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('touchend', handleClickOutside);        

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('touchend', handleClickOutside);        
        };
    }, []);
    
     //Para manejar la visibilidad del footer
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        setIsFooterVisible(entries[0].isIntersecting);
    }, { threshold: 0.1 });

    const footer = document.querySelector("footer");
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
    }, []);
    
    //Para manejar las animaciones del LeftBar
    const activeSectionRef = useRef(activeSection);
    const isFooterVisibleRef = useRef(isFooterVisible);

    useEffect(() => {
    activeSectionRef.current = activeSection;
    }, [activeSection]);

    useEffect(() => {
    isFooterVisibleRef.current = isFooterVisible;
    }, [isFooterVisible]);

 
    const prevShowLeftBar = useRef(false);
    const [animationClass, setAnimationClass] = useState("opacity-0 pointer-events-none");

    useEffect(() => {
    let lastY = window.scrollY;
    
    const handleScroll = () => {
        const direction = window.scrollY > lastY ? "down" : "up";        
        lastY = window.scrollY;

        const prev = prevShowLeftBar.current;
        const showLeftBar = sectionsToShowNav.includes(activeSectionRef.current) && !isFooterVisibleRef.current; //Se muestra la barra lateral en las secciones indicadas y cuando el footer no se ve
        
        if (!prev) { //Si no se ha mostrado la barra lateral antes
            if(showLeftBar) {//Se mostrará ahora
                setAnimationClass(direction === "down" 
                ? "opacity-100 translate-y-[2%] top-[4%] md:top-[3%] md:translate-y-[1%] lg:translate-y-[5%]" //Si está bajando, aparece y viene de arriba    
                : "opacity-100 -translate-y-[2%]  top-[4%] md:top-[3%] md:-translate-y-[1%] lg:-translate-y-[5%]"); //Si está subiendo, aparece y viene de abajo         
            }            
        }    
        else{ //Si se ha mostrado la barra lateral antes
            if(!showLeftBar) { //Se ocultará ahora
                setAnimationClass("opacity-0 pointer-events-none") //Sea que suba o baje desaparece solamente  
            }            
        }    
                
       prevShowLeftBar.current = showLeftBar;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);    
    
    //Para manejar si estoy o no en Desktop
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
    const handleResize = () => {
        setIsDesktop(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);    
    
    function navLeftBarDesktop() { 
        return (         
        <aside className={`left-bar flex flex-col transition-all duration-500 ${animationClass} left-[1%] top-[6%] xs:top-[5%] md:top-[4%] lg:top-[40%] text-xs md:text-xl`}>      
            <nav className='font-outfit'>
                <ul className='left-bar-nav flex flex-col items-left gap-2'> 
                    <li className={activeSection === "inicio" ? "active-left-nav" : "inactive-left-nav"}>
                        <HouseHeart size={icon_size}/>
                        <Link className='transition-all' href={"#inicio"} onClick={() => setAnimationClass("opacity-0 pointer-events-none")}>INICIO</Link>                        
                    </li>
                    <li className={activeSection === "sobreMi" ? "active-left-nav" : "inactive-left-nav"}>
                        <UserStar size={icon_size}/>
                        <Link href={"#sobreMi"}>SOBRE MÍ</Link>                        
                    </li>
                    <li className={activeSection === "experiencia" ? "active-left-nav" : "inactive-left-nav"}>
                        <BriefcaseBusiness size={icon_size}/>
                        <Link href={"#experiencia"}>EXPERIENCIA</Link>                        
                    </li>                    
                    <li className={activeSection === "tonextaxis" ? "active-left-nav" : "inactive-left-nav"}> 
                        <CirclePlay size={icon_size}/>
                        <Link href={"#tonextaxis"}>TONEXTAXIS</Link>                        
                    </li>
                    <li className={activeSection === "blog" ? "active-left-nav" : "inactive-left-nav"}>
                        <NotebookPen size={icon_size}/>
                        <Link href={"#blog"}>BLOG</Link>                        
                    </li>                    
                </ul>                                       
            </nav>          
        </aside>            
        );
    }


    function navLeftBarMobileTablet() { 
        
        const backgroundMobileTablet = "max-lg:bg-[rgba(18,17,43,0.85)] max-lg:backdrop-blur-md max-lg:border max-lg:border-[rgba(126,122,222,0.2)] max-lg:rounded-xl p-3";

        return (
            <div ref={accordionRef} className="accordion">     
            <ListCollapse className="accordion-icon relative" onClick={() => setCurrentState(!currentState)}/>             
                <aside className={`left-bar flex flex-col transition-all duration-500 left-[1%] top-[6%] xs:top-[5%] md:top-[4%] lg:top-[40%] ${backgroundMobileTablet} text-xs md:text-base ${currentState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>                               
                    <nav>
                        <ul className='left-bar-nav flex flex-col items-left gap-2'> 
                            <li className={activeSection === "inicio" ? "active-left-nav" : "inactive-left-nav"} onClick={(e) => { e.stopPropagation(); setCurrentState(false); }}>
                                 <HouseHeart size={icon_size}/>
                                <Link className='transition-all' href={"#inicio"} >INICIO</Link>                        
                            </li>
                            <li className={activeSection === "sobreMi" ? "active-left-nav" : "inactive-left-nav"} onClick={(e) => { e.stopPropagation(); setCurrentState(false); }}>
                                 <UserStar size={icon_size}/>
                                <Link href={"#sobreMi"}>SOBRE MÍ</Link>    
                            </li>
                            <li className={activeSection === "experiencia" ? "active-left-nav" : "inactive-left-nav"} onClick={(e) => { e.stopPropagation(); setCurrentState(false); }}>
                                <BriefcaseBusiness size={icon_size}/>
                                <Link href={"#experiencia"}>EXPERIENCIA</Link>
                            </li>                    
                            <li className={activeSection === "tonextaxis" ? "active-left-nav" : "inactive-left-nav"} onClick={(e) => { e.stopPropagation(); setCurrentState(false); }}> 
                                <CirclePlay size={icon_size}/>
                                <Link href={"#tonextaxis"}>TONEXTAXIS</Link> 
                            </li>
                            <li className={activeSection === "blog" ? "active-left-nav" : "inactive-left-nav"} onClick={(e) => { e.stopPropagation(); setCurrentState(false); }}>
                                <NotebookPen size={icon_size}/>
                                <Link href={"#blog"}>BLOG</Link>
                            </li>                    
                        </ul>                                       
                     </nav>       
                </aside>                         
        </div>    
        );
    } 
    
 
    return (      
        isDesktop ? navLeftBarDesktop() : navLeftBarMobileTablet()     
    );
}

