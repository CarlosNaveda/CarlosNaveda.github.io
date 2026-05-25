'use client';
import { usePathname } from 'next/navigation';
import LeftBarNav from './LeftBarNav';
import { useIsDesktop } from '../../Hook/useIsDesktop';
import TypingKeyboard from '../Animations/TypingKeyboard';


export default function NavWrapper() {
  const pathname = usePathname();
  const isDesktop = useIsDesktop(); // Hook para manejar si estoy o no en desktop

  
  return (
    <>
       {isDesktop && <TypingKeyboard className="animate-keyboard left-10 top-10 w-[80px] h-[80px] rounded-lg p-1 bg-[rgba(126,122,222,0.15)] border border-[rgba(126,122,222,0.2)]"/>} 
      {!pathname.startsWith('/blog') ? <LeftBarNav /> : null}
    </>
  );

  
}