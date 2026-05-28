'use client';

import navItems from '../../data/navItems';
import {useSection} from '../../hook/useSection';
import { useState,useEffect,useRef } from 'react';
import Link from 'next/link'
import { useSound } from '../../hook/useSound';

const sectionsToShowNav = ["sobreMi", "experiencia","tonextaxis","blog"]; //Secciones que se muestran en la barra lateral
export default function LeftBarNav() {
    
 
    const { activeSection } = useSection();    
    
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
    

    //Para el sonido cuando se selecciona una sección
    const { play: playSoftGlass} = useSound('ui-soft-glass', '/sounds/ui-soft-glass.mp3', 0.4);  
    
    const classConfigDesktop = `left-bar flex flex-col transition-all duration-500 ${animationClass} left-[1%] top-[6%] xs:top-[5%] md:top-[4%] lg:top-[40%] text-xs md:text-xl`;    
 
    return (
            <aside className={classConfigDesktop}>
                <nav className='font-outfit'>
                    <ul className='left-bar-nav flex flex-col items-left gap-2'>  
                        {navItems.map((item) => (
                            <li key={item.id} className={activeSection === item.id ? "active-left-nav" : "inactive-left-nav"} onClick={() => {playSoftGlass();}}>
                                {item.icon}
                                <Link className={`${item.id === "inicio" ? "transition-all" : ""}`} href={`#${item.id}`} onClick={() => { if (item.id === "inicio") setAnimationClass("opacity-0 pointer-events-none");}}>{item.label}</Link>                        
                            </li>
                        ))}                                               
                    </ul>                                       
                    </nav>       
            </aside>                                    
    );
}

