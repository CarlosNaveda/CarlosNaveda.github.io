'use client';
import { usePathname } from 'next/navigation';
import LeftBarNav from '@/src/components/NavBar/LeftBarNav';
import { useIsDesktop } from '@/src/hook/useIsDesktop';
import TopBarDesktopNav from '@/src/components/NavBar/TopBarDesktopNav';
import { useEffect, useState } from 'react';
import TopBarNav from '@/src/components/NavBar/TopBarNav';


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
      {/* Para mobile,Tablet */}
      {!isDesktop && !isNotFound && !pathname.startsWith('/blog') && <TopBarNav />}      
      {/* Para Desktop */}
      {isDesktop && !isNotFound && !pathname.startsWith('/blog') && (
        <>
        <TopBarDesktopNav /> 
        <LeftBarNav /> 
        </>)}
    </>
  );   
}