'use client';

import {HouseHeart, UserStar, BriefcaseBusiness, CirclePlay, NotebookPen} from 'lucide-react';
import {useSection} from '../../Hook/useSection';
import { useState,useEffect,useRef } from 'react';

const sectionsToShowNav = ["sobreMi", "experiencia","tonextaxis","blog"]; //Secciones que se muestran en la barra lateral
export default function LeftBarNav() {
    
    const icon_size = 20;
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
        
        if (!prev && showLeftBar) {
        setAnimationClass(direction === "down" 
            ? "opacity-100 translate-y-[5%]"
            : "opacity-100 -translate-y-[5%]"); 
        } else if (prev && !showLeftBar) {
        setAnimationClass("opacity-0 pointer-events-none");
        }
        
        prevShowLeftBar.current = showLeftBar;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
        
   
 
    return (        
        <aside className={`left-bar flex flex-col transition-all duration-500 ${animationClass}`}>                               
            <nav>
                <ul className='left-bar-nav flex flex-col items-left gap-2'> 
                    <li className={activeSection === "inicio" ? "active-left-nav" : "inactive-left-nav"} >
                        <a href=""><HouseHeart size={icon_size}/></a>INICIO  
                    </li>
                    <li className={activeSection === "sobreMi" ? "active-left-nav" : "inactive-left-nav"} >
                        <a href=""><UserStar size={icon_size}/></a>SOBRE MÍ
                    </li>
                    <li className={activeSection === "experiencia" ? "active-left-nav" : "inactive-left-nav"} >
                        <a href=""><BriefcaseBusiness size={icon_size}/></a>EXPERIENCIA
                    </li>                    
                    <li className={activeSection === "tonextaxis" ? "active-left-nav" : "inactive-left-nav"} > 
                        <a href=""><CirclePlay size={icon_size}/></a>TONEXTAXIS 
                    </li>
                    <li className={activeSection === "blog" ? "active-left-nav" : "inactive-left-nav"} >
                        <a href=""><NotebookPen size={icon_size}/></a>BLOG
                    </li>                    
                </ul>                                       
            </nav>       
        </aside>   
    );
}

