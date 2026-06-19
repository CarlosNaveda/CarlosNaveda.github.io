import { useState,useEffect, useRef } from "react"
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import navItems from "@/src/data/navItems";
import Link from 'next/link'
import {useRouter} from 'next/navigation';
import { useSound } from '@/src/hook/useSound';

/**
 * Función para invertir el estado del accordion.
 * @param {state} state - Estado actual del accordion
 * @returns {boolean} El estado invertido
*/
function invertedState(state: boolean): boolean {
    return !state;
}


const Accordion = () => {
     
    const router = useRouter(); 
    const logo_size = 200;    
    const [currentState, setCurrentState] = useState(false);
    const accordionRef = useRef<HTMLDivElement | null>(null);

    //Para el sonido cuando se selecciona una sección
    const { play: playSoftGlass} = useSound('ui-soft-glass', '/sounds/ui-soft-glass.mp3', 0.4);   
    
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


    //Lo muestro solo en mobile
    return (
        <div ref={accordionRef} className="accordion sticky top-0 z-50 px-4 py-3" >              
            <div style={{width: 24,height: 24,position: "relative"}}>
                <AnimatePresence mode="sync">
                    {currentState ? (
                        <motion.div
                            key="minus"
                            className="absolute inset-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >                            
                            <Image className="accordion-icon sticky top-0 z-50" src="/images/logos/Carlos-Naveda-CN-02.png" alt="Tecla presionada" width = {logo_size} height= {logo_size} onClick={() => {playSoftGlass(); setCurrentState(invertedState(currentState))} }/>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="plus"
                            className="absolute inset-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <Image className="accordion-icon sticky top-0 z-50" src="/images/logos/Carlos-Naveda-CN-01.png" alt="Tecla sin presionar" width = {logo_size} height= {logo_size} onClick={() =>{playSoftGlass(); setCurrentState(invertedState(currentState))}}/>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>            
            <AnimatePresence>
                {currentState && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                            onClick={() => setCurrentState(false)}
                        />
                        <motion.aside
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-14 left-0 w-full z-50 text-lg text-white accordion-menu"
                        >
                        <nav className="w-auto h-auto left-[5px] top-[25px]">
                            <ul className="accordion-options flex flex-col items-center justify-center gap-4">                              
                            {navItems.map((item, index) => (
                                <motion.li
                                key={item.id}
                                initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -10}}
                                transition={{
                                    duration: 0.2,
                                    delay: index * 0.05
                                }}
                                className="text-xl item flex flex-row items-center justify-center gap-1"
                                >
                                {item.icon}
                                <Link href={`/#${item.id}`} onClick={() => {router.push(`#${item.id}`); setCurrentState(false)}}>{item.label}</Link>                              
                                </motion.li>
                            ))}
                            </ul>
                        </nav>
                        </motion.aside>
                    </>  
                )}
            </AnimatePresence>
        </div>
    )
    }


export default Accordion