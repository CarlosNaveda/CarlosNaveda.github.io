'use client';
import { usePathname } from 'next/navigation';
import LeftBarNav from './LeftBarNav';
import { useIsDesktop } from '../../hook/useIsDesktop';
import TypingKeyboard from '../Animations/TypingKeyboard';
import SwitchSound from '../NavBar/SwitchSound';
import { useEffect, useState } from 'react';
import TopBarNav from './TopBarNav';


export default function NavWrapper() {
  const pathname = usePathname();
  const isDesktop = useIsDesktop(); // Hook para manejar si estoy o no en desktop
  const [isNotFound, setIsNotFound] = useState(false); // Para manejar si estoy o no en la pagina de 404
  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsNotFound(document.body.getAttribute('data-page') === 'not-found');
    });

  observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);  

  return (
    <>
      {!isDesktop && !isNotFound && !pathname.startsWith('/blog') && <TopBarNav />}      
      {isDesktop && !isNotFound && (
        <>
          <TypingKeyboard className="animate-keyboard left-10 top-10 w-[80px] h-[80px] rounded-lg p-1 bg-[rgba(126,122,222,0.15)] border border-[rgba(126,122,222,0.2)]"/>
          <SwitchSound />
          {!pathname.startsWith('/blog') && <LeftBarNav />}
        </>
        )
      }      
    </>
  ); 

  
}