'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import {Frown, ArrowUpLeft} from 'lucide-react';

export default function NotFoundPage() {

  useEffect(() => {
    document.body.setAttribute('data-page', 'not-found');    
    return () => document.body.removeAttribute('data-page');
  }, []);

  return (    
    <section className="not-found-page min-h-screen flex flex-col items-center justify-center gap-4 text-center px-8 font-dm-sans">              
      <div className="not-found-warning text-base md:text-3xl lg:text-5xl flex flex-row items-center justify-around gap-4">              
        <Frown className="w-[20px] h-[20px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px]"/>
        <span>La página que buscas no existe</span>
      </div> 
      <Link href="/" className="not-found-return mt-8 text-sm md:text-2xl lg:text-3xl flex flex-row items-center gap-2">
        <ArrowUpLeft className="w-[20px] h-[20px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px]" /> 
        <span>Regresar al Inicio</span> 
      </Link>          
    </section>     
  ); 
}