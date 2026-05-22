'use client';

import {ChevronDown} from 'lucide-react';
import Title from '../src/components/Title/Title';
import JobCard from '../src/components/Job/JobCard';
import ToNextAxisButton from '../src/components/Button/ToNextAxisButton';
import ToNextAxisIframeVideos from '../src/components/IFrame/ToNextAxisIframeVideos';
import Image from 'next/image';
import Carousel from '../src/components/Carousel/Carousel';
import Link from 'next/link'
import mapPosts from '../src/data/posts';
import TopBarNav from '@/src/components/TopBar/TopBarNav';
import Accordion from '../src/components/Accordion/Accordion';
import mapSections from '../src/data/sections';
import FooterBar from '@/src/components/FooterBar/FooterBar';

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

const mapJobs = [
  {
    index: 0,
    start: "Ene 2026",
    end: "Actualidad",
    logo: "/images/jobs/toNextAxis.png",
    company: "ToNextAxis",
    role: "Content Creator",
    description: "Canal de YouTube donde documento y explico lo aprendido sobre tecnología y sistemas de forma simple para hispanohablantes.",
    tags: ["YouTube", "Davinci Resolve", "StoryTelling", "Edición Narrativa", "Comunicación técnica"]
  },
  {
    index: 1,
    start: "Dic 2024",
    end: "Nov 2025",
    logo: "/images/jobs/canvia.jpg",
    company: "Canvia",
    role: "Quality Analyst III",
    description: "Analista de calidad en Digital Factory de Scotiabank Perú, asegurando la calidad de la plataforma de Banca por Internet Web y App.",
    tags: ["Quality Assurance", "AS400", "Web", "Apps", "WebSphere", "SQL Server", "Jira", "Confluence", "Metodologías Ágiles", "Jenkins", "JFrog", "Bitbucket"]
  },
  {
    index: 2,
    start: "Feb 2019",
    end: "Nov 2024",
    logo: "/images/jobs/tata.jpg",
    company: "TCS Perú",
    role: "IT Analyst",
    description: "Analista de calidad en Digital Factory de Scotiabank Perú, asegurando la calidad de la plataforma de Banca por Internet Web y App.",
    tags: ["Quality Assurance", "AS400", "SQL Server", "DB2", "Jira", "Confluence", "Jenkins", "JFrog", "Bitbucket", "WebSphere", "Metodologías Ágiles"]
  },
  {
    index: 3,
    start: "Nov 2017",
    end: "Feb 2019",
    logo: "/images/jobs/ses.jpg",
    company: "SES",
    role: "Quality Analyst",
    description: "Analista de calidad en proyectos Digital Factory y Latam CREO de Scotiabank Perú, trabajando con metodologías ágiles y clásicas.",
    tags: ["Quality Assurance", "AS400", "SQL Server", "DB2", "Jira", "Confluence", "Metodologías Ágiles"]
  },
  {
    index: 4,
    start: "Abr 2016",
    end: "Sep 2017",
    logo: "/images/jobs/choucair.jpg",
    company: "Choucair Testing",
    role: "Quality Analyst",
    description: "Analista de pruebas funcionales en el proyecto Homebanking Personas de BanBif.",
    tags: ["Quality Assurance", "Selenium WebDriver", "SQL", "iOS", "Android", "Team Foundation Server"]
  },
  {
    index: 5,
    start: "Feb 2014",
    end: "Feb 2016",
    logo: "/images/jobs/ibm.svg",
    company: "IBM del Perú",
    role: "Quality Analyst",
    description: "Analista de calidad en Testing Factory para América Móvil Perú, liderando equipos y gestionando pruebas de caja blanca y negra.",
    tags: ["Quality Assurance", "IBM RQM", "IBM RFT", "PL/SQL", "WebLogic", "SoapUI", "Unix"]
  },
  {
    index: 6,
    start: "Feb 2013",
    end: "Dic 2013",
    logo: "/images/jobs/delaware.jpg",
    company: "Delaware Perú",
    role: "Systems Consultant II",
    description: "Consultor de sistemas en proyecto de Interbank, gestionando pruebas de caja negra y coordinación con stakeholders.",
    tags: ["Quality Assurance", "CICS", "Mantis", "Spira Team", "SQL"]
  },
  {
    index: 7,
    start: "Sep 2011",
    end: "Ene 2013",
    logo: "/images/jobs/delaware.jpg",
    company: "Delaware Perú",
    role: "Systems Consultant I",
    description: "Consultor de sistemas en proyecto de Telefónica del Perú, ejecutando pruebas de caja blanca en sistemas de facturación y cobros.",
    tags: ["Quality Assurance", "PL/SQL", "Unix", "COBOL", "JCL", "OS/390"]
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
  },
  {
    index: 4,
    source: "https://www.youtube.com/embed/qRhye8g8HPc",
    title: "Es importante saber cómo pedirle las cosas a la IA — Serie IA #2"    
  },
  {
    index: 5,
    source: "https://www.youtube.com/embed/8kjxS0aFqCQ",
    title: "Analicé 2694 candidatos con IA… esto fue lo que encontré | Perú 2026"    
  }
];


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
  return (    
    <main>
      {/* Hero */}
      <section id={mapSections['inicio']} className="hero-page min-h-screen flex flex-col items-center justify-center gap-4 text-center px-8">
        {/* {<TopBarNav topBarNavOption={"inicio"} />} */}
        <Accordion/>    
        <h1 className="text-2xl md:text-6xl font-bold" style={{color: 'var(--titles)'}}>
          Hola, soy Carlos Naveda
        </h1>
        <p className="text-lg md:text-3xl leading-relaxed" style={{color: 'var(--paragraph)'}}>
          Aprendo, construyo...<br />
          <span className="text-[var(--paragraph)]">          
          y voy descubriendo el camino<br />
          mientras avanzo.
          </span>
        </p>
        {buttonChevronDown(mapSections['sobreMi'])}            
      </section> 

      {/* Sobre mí */}
      <section id={mapSections['sobreMi']} className="about-me-page min-h-screen flex flex-col items-center justify-center gap-10 px-8 text-balanced">  
        {/* {<TopBarNav topBarNavOption={"sobre mí"} />} */}
        <Title title={mapTitles[0]} />
        <p className="text-xs md:text-xl md:max-w-2xl w-full text-justify" style={{color: 'var(--paragraph)'}}> 
          
          Soy alguien que suele mirar más hacia adentro, pero con una necesidad constante de compartir hacia afuera lo que voy aprendiendo.<br />
          Me apasiona la tecnología, no me imagino haciendo nada que no esté relacionado con ello, no solo por lo que es, sino por lo que permite construir.<br /><br />

          Actualmente estoy desarrollando ToNextAxis, un espacio donde documento lo que voy aprendiendo y exploro la creación de contenido audiovisual.<br />
          Ha sido una de las decisiones más importantes que he tomado porque me permite aprender haciendo temas como guión, narrativa, edición y en cada tarea usar la creatividad.<br /><br />

          En paralelo, sigo fortaleciendo mis habilidades en Ingeniería, como QA Automation, construyendo una base más sólida para lo que se viene más adelante.<br /><br />

          Sé que todos estos skills confluirán en algo muy gratificante en un mediano plazo, y que los resultados no son inmediatos, hay un proceso y eso está bien, voy en mi dirección.
          
        </p>
        {buttonChevronDown(mapSections['experiencia'])}   
      </section>

      {/* Experiencia */} 
      <div className="job-page flex flex-col">        
         <section id={mapSections['experiencia']} className="min-h-screen flex flex-col items-center justify-center gap-8 md:gap-20 p-8 text-balanced">
          {/* {<TopBarNav topBarNavOption={"experiencia"} />}   */}
          <Title title={mapTitles[1]} />
          <div className='job-timeline flex flex-col gap-8 md:gap-14'>  
            {mapJobs.map((job) => (<JobCard key={job.index} job={job} lastJobIndex={lastJobIndex} />))}                 
          </div>                       
          {buttonChevronDown(mapSections['tonextaxis'])} 
        </section>        
      </div>

      {/* ToNextAxis */}        
      <div className="toNextAxis-page flex flex-col">                       
        <section id={mapSections['tonextaxis']} className="min-h-screen flex flex-col items-center justify-center gap-2 md:gap-10 px-8 text-balanced" style={{position: 'relative'}}>            
          {/* {<TopBarNav topBarNavOption={"tonextaxis"}/>} */}
          <Title title={mapTitles[2]} /> 
          <Image className="toNextAxis-logo top-0 right-0 md:top-20 md:right-250 w-[200] h-[200] md:w-[400] md:h-[400]" src="/images/logos/toNextAxis_logo.png" alt="logo ToNextAxis" width={400} height={400} style={{position: 'absolute'}}/>
          <div className="toNextAxis-text-button flex flex-col items-center justify-center gap-8">               
              <p className="text-xs md:text-xl max-w-2xl w-full text-justify" style={{color: 'var(--paragraph)'}}>          
                ToNextAxis nació de las ganas de crear cosas con sentido y explorar el mundo audiovisual.<br /><br />
                Aquí comparto lo que voy aprendiendo, con la esperanza de acercar a las personas a la tecnología de una forma fácil y entendible.<br /><br />
                Dale un vistazo, de seguro algo te va a servir. <br />        
                Últimos videos 👇🏻
              </p>
              <ToNextAxisButton />             
          </div>
          <div className="toNextAxis-videos grid grid-cols-2 items-center justify-center gap-6 max-w-5xl">
            {mapVideos.map((video) => (
              <ToNextAxisIframeVideos key={video.index} video={video} />
            ))}                
          </div>              
          {buttonChevronDown(mapSections['blog'])}           
        </section>          
      </div>
        
      {/* Blog Preview*/}
      <section id={mapSections['blog']} className="blog-page min-h-screen flex flex-col items-center justify-center gap-4 md:gap-10 px-8 py-4 text-balanced">  
        {/* {<TopBarNav topBarNavOption={"blog"} />}   */}
        <Title title={mapTitles[3]} />
        <div className="blog-preview-text-button flex flex-col items-center justify-center gap-2">              
              <p className="text-xs md:text-xl max-w-2xl w-full text-justify" style={{color: 'var(--paragraph)'}}>          
                Hace algunos años tenía un blog donde compartía videos musicales subtitulados con animaciones, siempre me ha gustado crear y compartir cosas en internet, y ahora que he renovado mi web quiero volver a hacerlo.<br /><br />
                Aquí encontrarás contenido técnico, proyectos personales y también cosas que para mi son divertidas de hacer.<br /><br />
                No será un espacio de un solo tema, sino un lugar para compartir todo lo que me inspira e interesa.
              </p><br />
              <Link className="blog-link text-xs md:text-2xl w-full text-center bg-[var(--selection)] lg:bg-[var(--no-selection)]" href="/blog">Ir al blog 🗒️</Link>   
          </div>
        {<Carousel posts={mapPosts} />} 
        
      </section>

      <FooterBar />

    </main>    
  );
}