'use client';

import {HouseHeart, UserStar, BriefcaseBusiness, CirclePlay, NotebookPen} from 'lucide-react';
import {useSection} from '../../Hook/useSection';
import { useState,useEffect } from 'react';

export default function LeftBarNav() {
    
    const icon_size = 20;
    const { activeSection } = useSection();    
    const sectionsToShowNav = ["sobreMi", "experiencia","tonextaxis","blog"]; //Secciones que se muestran en la barra lateral
    
    
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

    const showLeftBar = sectionsToShowNav.includes(activeSection) && !isFooterVisible;

     //Para manejar la dirección del scroll
    const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");

    useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
        setScrollDirection(window.scrollY > lastY ? "down" : "up");
        lastY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
 
    return (        
        <aside className={`left-bar flex flex-col transition-all duration-500 
            ${showLeftBar && scrollDirection === "down"
            ? "opacity-100 translate-y-[5%]"  //Animación: Aparece y se mueve hacia abajo
            : showLeftBar && scrollDirection === "up"
            ?"opacity-100 translate-y-[-5%]"  //Animación:  Aparece y se mueve hacia arriba
            :"opacity-0 -translate-y-0 pointer-events-none" //Animación: Desaparece suave                    
            }                 
            }`}                
            >                
            <nav>
                <ul className='left-bar-nav flex flex-col items-left gap-4'> 
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

