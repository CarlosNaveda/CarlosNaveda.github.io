'use client';

import TypingKeyboard from '../Animations/TypingKeyboard';
import SwitchSound from '../NavBar/SwitchSound';
import {useEffect,useRef } from 'react';
import {useSection} from '../../hook/useSection';
import navItems from '../../data/navItems';
import Link from 'next/link'
import { useSound } from '../../hook/useSound';

export default function TopBarNav() {    
    
    const classConfigMobileTablet = `top-bar-nav fixed top-0 w-[100%] flex flex-row transition-all duration-500 gap-1 items-center justify-center pt-1`;        
    const { activeSection } = useSection();    

    //Para manejar las animaciones del NavBar
    const activeSectionRef = useRef(activeSection);

    useEffect(() => {
        activeSectionRef.current = activeSection;
        }, [activeSection]);

    //Para el sonido cuando se selecciona una sección
    const { play: playSoftGlass} = useSound('ui-soft-glass', '/sounds/ui-soft-glass.mp3', 0.4);   

    return (
        <aside className={classConfigMobileTablet}>
            <TypingKeyboard className="animate-keyboard-MobileTablet w-[50px] h-[50px] rounded-lg p-1 bg-[rgba(126,122,222,0.15)] border border-[rgba(126,122,222,0.2)]"/>           
            <nav className='font-dm-sans'> 
                <ul className='flex flex-row items-center justify-center gap-1 text-xs'>  
                    {navItems.map((item) => (
                        <li key={item.id} className={activeSection === item.id ? "active-top-nav" : "inactive-top-nav"} onClick={() => {playSoftGlass();}}>
                            {item.icon}
                            <Link className={`${item.id === "inicio" ? "transition-all" : ""}`} href={`#${item.id}`}>{activeSection === item.id ? item.label : ""}</Link>                        
                        </li>
                    ))}                                               
                </ul>                                       
            </nav>
            <SwitchSound />       
        </aside>   
    );
}

