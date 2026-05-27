import Link from 'next/link';
import {Frown, ArrowUpLeft} from 'lucide-react';

export default function NotFoundPage() {
  return (    
    <section className="not-found-page min-h-screen flex flex-col items-center justify-center gap-4 text-center px-8 font-dm-sans">              
      <div className="not-found-warning text-5xl flex flex-row items-center justify-around gap-4">              
        <Frown size={50}/>
        <span>La página que buscas no existe</span>
      </div> 
      <Link href="/" className="not-found-return mt-8 text-3xl flex flex-row items-center gap-2">
        <ArrowUpLeft size={40} /> 
        <span>Regresar al Inicio</span> 
      </Link>          
    </section>     
  ); 
}