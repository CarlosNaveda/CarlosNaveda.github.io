'use client';

import {ChevronDown} from 'lucide-react';
import {NotebookPen} from 'lucide-react';
import Title from '../src/components/Title/Title';
import JobCard from '../src/components/Job/JobCard';
import ToNextAxisButton from '../src/components/Button/ToNextAxisButton';
import ToNextAxisIframeVideos from '../src/components/IFrame/ToNextAxisIframeVideos';
import Carousel from '../src/components/Carousel/Carousel';
import Link from 'next/link'
import mapPosts from '../src/data/posts'; 
import mapSections from '../src/data/sections';
import FooterBar from '@/src/components/FooterBar/FooterBar';
import {useEffect } from 'react';
import {useSection} from '../src/Hook/useSection';
import mapJobs from '../src/data/jobs';
import {useState} from 'react';
import FloatingEmojis from '../src/components/Animations/FloatingEmojis';


//VARIABLES

const mapTitles = [
  {
    index: 0,
    title: 'Sobre mí',
    annotation: 'y sobre lo que viene.'
  },
  {
    index: 1,
    title: 'Experiencia',
    annotation: 'En cada lugar encontré algo nuevo que aprender.'
  },
  {
    index: 2,
    title: 'ToNextAxis',
    annotation: 'Mi lugar para crear, pensar y documentar.'
  },
  {
    index: 3,
    title: 'Blog',
    annotation: 'Porque compartir también es aprender.'
  }
];



const lastJobIndex = mapJobs[mapJobs.length - 1].index;

const mapVideos = [
  {
    index: 0,
    source: "https://www.youtube.com/embed/XM-ZSlUM8tY",
    title: "Proyecto Fansubpy | Tributo FC Barcelona"    
  },
  {
    index: 1,
    source: "https://www.youtube.com/embed/9PxTNr6rF9Y",
    title: "La IA recuerda solo lo que cabe en su contexto — Serie IA #4"    
  },
  {
    index: 2,
    source: "https://www.youtube.com/embed/reugFL2iy2E",
    title: "Cuando le escribes a la IA estás gastando tokens — Serie IA #3"    
  },
  {
    index: 3,
    source: "https://www.youtube.com/embed/4mJSiV53vfQ",
    title: "Filtración de Claude Code"    
  }
];

const icon_size = 20;   


//FUNCIONES

/**
 * Botón con ícono ChevronDown animación de rebote, al hacer clic, desplaza suavemente la vista hacia la sección especificada por el ID.
 * @param {sectionID} sectionID - ID de la sección a desplazar. 
*/
export function buttonChevronDown(sectionID: string) { 
  return (
      <button className="mt-8 animate-bounce" style={{color: 'var(--paragraph)'}}
          onClick={() => {
            const section = document.getElementById(sectionID);
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });              
            }
          }}>
          <ChevronDown size={40} />
      </button>        
  );
}


//COMPONENTE PRINCIPAL

export default function Home() { 
  
  const { setActiveSection } = useSection();

  //OBSERVER - Para mapear las secciones mientras se hace el scroll
  useEffect(() => {   
    
    //Para mobile o tablet el límite tiene que ser menor.
    const getOptions = (): IntersectionObserverInit => {
    const w = window.innerWidth;
    if (w <= 400) return { threshold: 0.2 };
    if (w <= 1024) return { threshold: 0.3 };
    return { rootMargin: '-40% 0px -40% 0px', threshold: 0 };
  };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          history.replaceState(null, '', `#${entry.target.id}`); // Actualizo el URL sin recargar ni agregar al historial
        }
      });
    }, getOptions());

      document.querySelectorAll("section").forEach((sec) => {
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  //Para saber si el último JobCard está expandido o no
  const [lastJobExpanded, setLastJobExpanded] = useState(false);

  //Para saber qué palabra es la que tiene el hover
  const [hoverWord, setHoverWord] = useState('');  

 

  return (    
    <main>
      {/* Hero */}
      <section id={mapSections['inicio']} className="hero-page min-h-screen flex flex-col items-center justify-center gap-4 text-center px-8">              
        <div className="text-2xl md:text-6xl font-bold font-outfit flex flex-row items-center justify-center gap-3" style={{color: 'var(--titles)'}}>
          <h1 className='saludo'>Hola soy</h1>           
          <h2 className='mi-nombre'>Carlos Naveda</h2>             
        </div>
        <div className="text-lg md:text-3xl leading-relaxed font-dm-sans" style={{color: 'var(--paragraph)'}}>          
          <p className="flex flex-row items-center justify-center gap-2">
            <span id="aprendo" className="relative highlight-words " onMouseEnter={() => {setHoverWord('aprendo');}} onMouseLeave={() => {setHoverWord('');}}>Aprendo{hoverWord === 'aprendo' && <FloatingEmojis word='aprendo'/>}</span>          
            <span id="construyo" className="relative highlight-words" onMouseEnter={() => {setHoverWord('construyo');}} onMouseLeave={() => {setHoverWord('');}}>construyo{hoverWord === 'construyo' && <FloatingEmojis word='construyo'/>}</span>          
            <span>...</span><br />
          </p>
          <p className="flex flex-row items-center justify-center gap-2">
            <span>y voy </span>
            <span id="descubriendo" className="relative highlight-words" onMouseEnter={() => {setHoverWord('descubriendo');}} onMouseLeave={() => {setHoverWord('');}}>descubriendo{hoverWord === 'descubriendo' && <FloatingEmojis word='descubriendo'/>}</span>          
            <span>el</span><br />
          </p>
          <p className="flex flex-row items-center justify-center gap-2">
            <span>camino mientras</span>          
            <span id="avanzo" className="relative highlight-words" onMouseEnter={() => {setHoverWord('avanzo');}} onMouseLeave={() => {setHoverWord('');}}>avanzo{hoverWord === 'avanzo' && <FloatingEmojis word='avanzo'/>}</span>          
          </p>
        </div>
        {buttonChevronDown(mapSections['sobreMi'])}            
      </section> 

      {/* Sobre mí */}
      <section id={mapSections['sobreMi']} className="about-me-page min-h-screen flex flex-col items-center justify-center gap-10 px-8 text-balanced">                  
        <Title title={mapTitles[0]} />
        <p className="text-xs md:text-xl md:max-w-2xl w-full text-justify font-dm-sans" style={{color: 'var(--paragraph)'}}> 
          
          Soy alguien que suele mirar hacia adentro, pero con una necesidad constante de compartir hacia afuera lo que voy aprendiendo.<br />
          Me apasiona la tecnología, no me imagino haciendo nada que no esté relacionado con ello, no solo por lo que es, sino por lo que permite construir.<br /><br />

          Actualmente estoy desarrollando ToNextAxis, un espacio donde documento lo que voy aprendiendo y exploro la creación de contenido audiovisual. Ha sido una de las decisiones más importantes que he tomado porque me permite aprender haciendo temas como guión, narrativa, edición y en cada tarea usar la creatividad.<br /><br />

          En paralelo, sigo fortaleciendo mis habilidades en Ingeniería, como QA Automation, construyendo una base más sólida para lo que se viene más adelante.<br /><br />

          Sé que todos estos skills confluirán en algo muy gratificante en un mediano plazo, y que los resultados no son inmediatos, hay un proceso y eso está bien, voy en mi dirección.
          
        </p>
        {buttonChevronDown(mapSections['experiencia'])}   
      </section>

      {/* Experiencia */} 
      <div className="job-page flex flex-col">        
         <section id={mapSections['experiencia']} className="min-h-screen flex flex-col items-center justify-center gap-8 md:gap-20 p-8 text-balanced">                    
          <Title title={mapTitles[1]} />
          <div className='job-timeline flex flex-col gap-8 md:gap-14'>  
            {mapJobs.map((job) => (<JobCard key={job.index} job={job} lastJobIndex={lastJobIndex} isLastJobExpanded={lastJobExpanded} onLastJobHover={job.index === lastJobIndex ? setLastJobExpanded : undefined}/>))}                 
          </div>                       
          {buttonChevronDown(mapSections['tonextaxis'])} 
        </section>        
      </div>

      {/* ToNextAxis */}        
      <div className="toNextAxis-page flex flex-col">                       
        <section id={mapSections['tonextaxis']} className="min-h-screen flex flex-col items-center justify-center gap-2 md:gap-10 p-8 text-balanced">                                
          <Title title={mapTitles[2]} /> 
          {/* <Image className="toNextAxis-logo top-0 right-0 md:top-20 md:right-250 lg:top-0 lg:right-100 w-[200] h-[200] md:w-[400] md:h-[400] lg:w-[500] lg:h-[500]" src="/images/logos/toNextAxis_logo.png" alt="logo ToNextAxis" width={400} height={400} style={{position: 'absolute'}}/> */}
          <div className="toNextAxis-text-button flex flex-col items-center justify-center gap-8 pb-5 font-dm-sans">               
              <p className="text-xs md:text-xl max-w-2xl w-full text-justify" style={{color: 'var(--paragraph)'}}>          
                ToNextAxis nació de las ganas de crear cosas con sentido y explorar el mundo audiovisual.<br /><br />
                Aquí comparto lo que voy aprendiendo, con la esperanza de acercar a las personas a la tecnología de una forma fácil y entendible.<br /><br />
                Dale un vistazo, de seguro algo te va a servir. <br />        
                Últimos videos 👇🏻
              </p>
              <ToNextAxisButton />             
          </div>
          <div className="toNextAxis-videos flex flex-col xl:grid xl:grid-cols-2 items-center justify-center gap-6 max-w-5xl">
            {mapVideos.map((video) => (
              <ToNextAxisIframeVideos key={video.index} video={video} />
            ))}                
          </div>              
          {buttonChevronDown(mapSections['blog'])}           
        </section>          
      </div>
        
      {/* Blog Preview*/}
      <section id={mapSections['blog']} className="blog-page min-h-screen flex flex-col items-center justify-center gap-4 md:gap-10 p-8 text-balanced">                  
        <Title title={mapTitles[3]} />
        <div className="blog-preview-text-button flex flex-col items-center justify-center gap-1 font-dm-sans">              
              <p className="text-xs md:text-xl max-w-2xl w-full text-justify" style={{color: 'var(--paragraph)'}}>          
                Hace algunos años tenía un blog donde compartía videos musicales subtitulados con animaciones, siempre me ha gustado crear y compartir cosas en internet, y ahora que he renovado mi web quiero volver a hacerlo.<br /><br />
                Aquí encontrarás contenido técnico, proyectos personales y también cosas que para mi son divertidas de hacer.<br /><br />
                No será un espacio de un solo tema, sino un lugar para compartir todo lo que me inspira e interesa. Estos son los últimos posts 👇🏻
              </p><br />
              <Link className="blog-link text-xs md:text-2xl w-full text-center bg-[var(--selection)] lg:bg-[var(--no-selection)] flex flex-row items-center justify-center gap-2 font-outfit" href="/blog">
              Ir al blog <NotebookPen size={icon_size}/>
              </Link>
          </div>
        {<Carousel posts={mapPosts} />} 
        
      </section>

      <FooterBar />

    </main>    
  );
}
