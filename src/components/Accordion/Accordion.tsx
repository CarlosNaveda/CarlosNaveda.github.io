import { useState,useEffect, useRef } from "react"
import mapSections from '@/src/data/sections';
import {HouseHeart, UserStar, BriefcaseBusiness, CirclePlay, NotebookPen} from 'lucide-react';
import { ListCollapse } from 'lucide-react';

/**
 * Función para invertir el estado del accordion.
 * @param {state} state - Estado actual del accordion
 * @returns {boolean} El estado invertido
*/
function invertedState(state: boolean): boolean {
    return !state;
}


const Accordion = () => {

    const icon_size = 20;    
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


    return (
        <div ref={accordionRef} className="accordion"> 
            <ListCollapse className="accordion-icon relative" onClick={() => setCurrentState(invertedState(currentState))}/>
            {currentState && ( //Si se hizo click en el icono, se muestra el menu
                <nav className="accordion-options w-auto h-auto bg-[var(--white)] absolute left-[5px] top-[25px] z-10">
                    <ul className='top-bar-nav flex flex-col'>  
                        <li className={`${mapSections['inicio']} text-xs flex flex-row items-center justify-left gap-1`} onClick={() => setCurrentState(false)}> 
                            <a href=""><HouseHeart size={icon_size}/>
                            </a>{mapSections['inicio'].toUpperCase()}    
                        </li>
                        <li className={`${mapSections['sobreMi']} text-xs flex flex-row items-center justify-left gap-1`} onClick={() => setCurrentState(false)}> 
                            <a href=""><UserStar size={icon_size}/>
                            </a>{mapSections['sobreMi'].toUpperCase()}  
                        </li>
                        <li className={`${mapSections['experiencia']} text-xs flex flex-row items-center justify-left gap-1`} onClick={() => setCurrentState(false)}> 
                            <a href=""><BriefcaseBusiness size={icon_size}/>
                            </a>{mapSections['experiencia'].toUpperCase()}  
                        </li>                    
                        <li className={`${mapSections['tonextaxis']} text-xs flex flex-row items-center justify-left gap-1`} onClick={() => setCurrentState(false)}> 
                            <a href=""><CirclePlay size={icon_size}/>
                            </a>{mapSections['tonextaxis'].toUpperCase()}  
                        </li>
                        <li className={`${mapSections['blog']} text-xs flex flex-row items-center justify-left gap-1`} onClick={() => setCurrentState(false)}> 
                            <a href=""><NotebookPen size={icon_size}/>
                            </a>{mapSections['blog'].toUpperCase()}  
                        </li>                    
                    </ul>
                </nav>    
            )}
            
        </div>
    )
}

export default Accordion