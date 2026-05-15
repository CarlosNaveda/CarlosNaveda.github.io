'use client';

import { ChevronDown } from 'lucide-react';

export default function Home() {
  return (    
    <main>
      {/* Hero */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-8">
        <h1 className="text-4xl md:text-6xl font-bold" style={{color: 'var(--titles)'}}>
          Hola, soy Carlos Naveda
        </h1>
        <p className="text-lg md:text-3xl leading-relaxed" style={{color: 'var(--paragraph)'}}>
          Aprendo, construyo...<br />
          <span className="text-[var(--sub-paragraph)]">          
          y voy descubriendo el camino<br />
          mientras avanzo.
          </span>
        </p>
        <button className="mt-8 animate-bounce" style={{color: 'var(--sub-paragraph)'}}
          onClick={() => {
            const aboutSection = document.getElementById("about-me");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        }}>
          <ChevronDown size={40} />
        </button>        
      </section> 

      {/* About Me */}
      <section id="sobre-mi" className="min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-balanced">
        <div className="max-w-2xl w-full flex flex-col gap-1">
          <h2 className="text-6xl" style={{color: 'var(--titles)'}}>
          Sobre mí
          </h2>        
          <h3 className="text-xl italic" style={{color: 'var(--titles)'}}>
          y sobre lo que viene.
          </h3>    
        </div>        

        <p className="text-xl max-w-2xl w-full text-justify" style={{color: 'var(--paragraph)'}}>
          
          Soy alguien que suele mirar más hacia adentro, pero con una necesidad constante de compartir hacia afuera lo que voy aprendiendo.<br />
          Me apasiona la tecnología, siento que no me imagino haciendo nada que no esté relacionado con ello, no solo por lo que es, sino por lo que permite construir.<br /><br />

          Actualmente estoy desarrollando ToNextAxis, un espacio donde documento lo que voy aprendiendo y exploro la creación de contenido audiovisual.<br />
          Ha sido una de las decisiones más importantes que he tomado porque me permite aprender haciendo temas como guión, narrativa, edición usando la creatividad.<br /><br />

          En paralelo, sigo fortaleciendo mis habilidades en QA Automation e ingeniería, construyendo una base más sólida para lo que se viene más adelante.<br /><br />

          Sé que todos estos skills confluirán en algo muy gratificante en un mediano plazo, que las cosas no sean inmediatas no quiere decir que no sucederán y eso está bien, voy en mi dirección.
          
        </p>
      </section>


    </main>    
  );
}