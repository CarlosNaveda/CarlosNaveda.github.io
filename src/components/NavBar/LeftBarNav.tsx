'use client';

import {HouseHeart, UserStar, BriefcaseBusiness, CirclePlay, NotebookPen} from 'lucide-react';
import {useSection} from '../../Hook/useSection';
import { useState,useEffect,useRef } from 'react';
import Link from 'next/link'
import { useIsDesktop } from '../../Hook/useIsDesktop';
import TypingKeyboard from '../Animations/TypingKeyboard';


const sectionsToShowNav = ["sobreMi", "experiencia","tonextaxis","blog"]; //Secciones que se muestran en la barra lateral
export default function LeftBarNav() {
    
    const icon_size = 20;   
    const { activeSection } = useSection();    

    //Items del LeftBar
    const navItems = [
        { id: 'inicio', label: 'INICIO', icon: <HouseHeart size={icon_size} /> },
        { id: 'sobreMi', label: 'SOBRE MÍ', icon: <UserStar size={icon_size} /> },
        { id: 'experiencia', label: 'EXPERIENCIA', icon: <BriefcaseBusiness size={icon_size} /> },
        { id: 'tonextaxis', label: 'TONEXTAXIS', icon: <CirclePlay size={icon_size} /> },
        { id: 'blog', label: 'BLOG', icon: <NotebookPen size={icon_size} /> },
    ];
    
    //Para manejar la visibilidad del modo acordión
    const [currentState, setCurrentState] = useState(false);

    //Para manejar el acordeón
    const accordionRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: Event) => {      
            
             const path = event.composedPath(); //Utilizado para evitar que el browser los detecte como si hubiera hecho click fuera del acordeón
             const clickedInsideAccordion = path.some(
                (el) => el instanceof HTMLElement && el.classList.contains('accordion')
            );            

            // Si el acordeón está abierto y el clic fue fuera del elemento referenciado
            if (!clickedInsideAccordion) {                 
                setCurrentState(false);
            }          
        };        
        
        document.addEventListener('click', handleClickOutside,);                 

        return () => { 
            document.removeEventListener('click', handleClickOutside);             
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
    
    // Hook para manejar si estoy o no en desktop
    const isDesktop = useIsDesktop();    

    const isMobileTablet = !isDesktop;
    const classConfigDesktop = `left-bar flex flex-col transition-all duration-500 ${animationClass} left-[1%] top-[6%] xs:top-[5%] md:top-[4%] lg:top-[40%] text-xs md:text-xl`;    
    const backgroundMobileTablet = "max-lg:bg-[rgba(126, 122, 222, 1)] max-lg:backdrop-blur-md max-lg:border max-lg:border-[rgba(126,122,222,0.2)] max-lg:rounded-xl p-3";         
    const classConfigMobileTablet = `left-bar flex flex-col transition-all duration-500 left-[5%] md:left-[2%] ${animationClass} top-[9%] xs:top-[7%] md:top-[7%] lg:top-[40%] ${backgroundMobileTablet} text-xs md:text-base ${currentState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`
 
    return (      
           <div ref={accordionRef} className="accordion">  
                {isMobileTablet && (
                    <TypingKeyboard  
                    className={`animate-keyboard left-5 top-5 w-[40px] h-[40px] md:w-[60px] md:h-[60px] cursor-pointer transition-transform duration-150 rounded-lg ${currentState ? 'ring-2 ring-[#4653a8] scale-95' : 'hover:scale-105'}`}
                    onClick={() => setCurrentState(!currentState)} 
                    />)
                }            
                <aside className={isMobileTablet ? classConfigMobileTablet : classConfigDesktop}>                               
                    <nav className='font-outfit'>
                        <ul className='left-bar-nav flex flex-col items-left gap-2'> 
                            {navItems.map((item) => (
                                <li key={item.id} className={activeSection === item.id ? "active-left-nav" : "inactive-left-nav"} onClick={(e) => { if(isMobileTablet) e.stopPropagation(); setCurrentState(false); }}>
                                    {item.icon}
                                    <Link className={`${item.id === "inicio" ? "transition-all" : ""}`} href={`#${item.id}`} onClick={() => { if (!isMobileTablet) if (item.id === "inicio") setAnimationClass("opacity-0 pointer-events-none");}}>{item.label}</Link>                        
                                </li>
                            ))}                                               
                        </ul>                                       
                     </nav>       
                </aside>                         
           </div>  
    );
}

