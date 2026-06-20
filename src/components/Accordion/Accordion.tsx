import { useState,useEffect, useRef } from "react"
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import navItems from "@/src/data/navItems";
import Link from 'next/link'
import {useRouter} from 'next/navigation';
import { useSound } from '@/src/hook/useSound';
import { createPortal } from 'react-dom';


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
    const logo_size = 48;
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
        <div ref={accordionRef} className="accordion sticky top-0 z-[1001] px-4 py-3" >
            <div className="relative w-10 h-10 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12">
                <AnimatePresence mode="sync">
                    {currentState ? (
                        <motion.div
                            key="minus"
                            className="absolute inset-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <Image className="accordion-icon w-full h-full object-contain" src="/images/logos/Carlos-Naveda-CN-02.png" alt="Tecla presionada" width = {logo_size} height= {logo_size} onClick={() => {playSoftGlass(); setCurrentState(invertedState(currentState))} }/>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="plus"
                            className="absolute inset-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <Image className="accordion-icon w-full h-full object-contain" src="/images/logos/Carlos-Naveda-CN-01.png" alt="Tecla sin presionar" width = {logo_size} height= {logo_size} onClick={() =>{playSoftGlass(); setCurrentState(invertedState(currentState))}}/>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {currentState && (
                    <>
                        {createPortal(
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
                                onClick={() => setCurrentState(false)}
                            />,
                            document.body
                        )}
                        <motion.aside
                        initial={{ opacity: 0, x: -200, boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)" }}
                        animate={{ opacity: 1, x: 0, boxShadow: "0 0 14px 2px rgba(139, 92, 246, 0.25)" }}
                        exit={{ opacity: 0, x: -200, boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-16 left-0 w-[200px] z-[1000] text-white rounded-b-2xl"
                        >
                        <nav className="w-auto h-auto left-[5px] top-[25px]">
                            <ul className="accordion-options flex flex-col gap-0 px-6 h-full">
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
                                className="text-sm item flex flex-row gap-2 items-center py-3 border-b border-white/10 w-full"
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