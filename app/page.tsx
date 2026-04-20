'use client';

import { ChevronDown } from 'lucide-react';

export default function Home() {
  return (    
    <main>
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-8">
        <h1 className="text-4xl md:text-6xl font-bold" style={{color: 'var(--green)'}}>
          Hola, soy Carlos Naveda
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed" style={{color: 'var(--white)'}}>
          Aprendo, construyo...<br />
          <span className="text-[var(--gray)]">          
          y voy descubriendo el camino<br />
          mientras avanzo.
          </span>
        </p>
        <button className="mt-8 animate-bounce" style={{color: 'var(--gray)'}}
          onClick={() => {
            const aboutSection = document.getElementById("about-me");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        }}>
          <ChevronDown size={32} />
        </button>        
      </section> 

      <section id="about-me" className="min-h-screen flex items-center justify-center gap-4 px-8">
        <h2 className="text-6xl max-w-xl w-full text-center " style={{color: 'var(--green)'}}>
          SOBRE MI <br />          
        </h2>
        <p className="text-lg max-w-2xl w-full text-left" style={{color: 'var(--white)'}}>
          
          Soy alguien que suele mirar más hacia adentro, pero con una necesidad constante de compartir lo que voy aprendiendo. <br />
          Me interesa la tecnología, no solo por lo que es, sino por lo que permite construir. <br /><br />

          Actualmente estoy desarrollando ToNextAxis, un espacio donde documento lo que voy aprendiendo y exploro la creación de contenido audiovisual. <br />
          Ha sido una de las decisiones más importantes que he tomado. <br /> <br />

          En paralelo, sigo fortaleciendo mis habilidades en QA Automation e Ingeniería, construyendo una base más sólida para lo que venga. <br />
          No sé exactamente a dónde lleva todo esto… y está bien.<br /> <br />
          Pero sé que estoy avanzando en la dirección correcta. <br />
        </p>
      </section>


    </main>    
  );
}