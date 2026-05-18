'use client';

import { ChevronDown} from 'lucide-react';
import Title from '../src/components/Title/Title';
import JobCard from '../src/components/Job/JobCard';
import ToNextAxisButton from '../src/components/Button/ToNextAxisButton';
import ToNextAxisIframeVideos from '../src/components/IFrame/ToNextAxisIframeVideos';
import Image from 'next/image';
import Carousel from '../src/components/Carousel/Carousel';


//VARIABLES

const mapSections = {
  'Inicio': 'hero',
  'Sobre mí': 'sobre-mi',
  'Experiencia': 'experiencia',
  'ToNextAxis': 'tonextaxis',
  'Blog': 'blog',
};

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
  },
  {
    index: 6,
    source: "https://www.youtube.com/embed/9dDvshOVR3o",
    title: "Cómo jugar Wolfenstein 3D y Spear of Destiny en PC moderna (ECWolf)"    
  },
  {
    index: 7,
    source: "https://www.youtube.com/embed/KvSNziCcDDk",
    title: "¿Cómo elegir un monitor según tu uso (Productividad, Edición, Gaming o Competitivo)?"    
  },
  {
    index: 8,
    source: "https://www.youtube.com/embed/ECg2o7k36TU",
    title: "¿Vale la pena el Stream Deck Neo? Casos de uso reales paso a paso"    
  }
];

const mapPosts = [
  {
    index: 0,
    imageSource: "/images/blog/Autolayout.jpg",
    publishDate: new Date("2026-05-09"),
    tag: "UI",
    title: "Domina Auto Layout",
    shortDescription: "Aprende cómo usar Auto Layout para crear interfaces más ordenadas, adaptables y fáciles de mantener en Figma. Un enfoque práctico para mejorar tu flujo de diseño y prototipado." 
  },
  {
    index: 1,
    imageSource: "/images/blog/Selenium.avif",
    publishDate: new Date("2026-03-11"),
    tag: "QA",
    title: "Mis primeros pasos con Selenium",
    shortDescription: "Cómo configuré mi primer proyecto de automatización desde cero, los errores que cometí y lo que aprendí en el proceso." 
  },
  {
    index: 2,
    imageSource: "/images/blog/LLM.jpg",
    publishDate: new Date("2026-02-22"),
    tag: "IA",
    title: "¿Qué es un LLM y por qué debería importarte?",
    shortDescription: "Explicación sin tecnicismos de cómo funcionan los modelos de lenguaje y por qué están cambiando la forma en que trabajamos." 
  },
  {
    index: 3,
    imageSource: "/images/blog/Git.avif",
    publishDate: new Date("2026-01-02"),
    tag: "DEV",
    title: "Git para los que siempre olvidan los comandos",
    shortDescription: "Los comandos que uso el 90% del tiempo, explicados como me hubiera gustado que me los explicaran cuando empecé." 
  },
];


//FUNCIONES

//Este componente es un botón con animación de rebote que, al hacer clic, desplaza suavemente la vista hacia la sección especificada por el ID.
export function buttonBounceGoTo(section: string) { 
  return (
    <button className="mt-8 animate-bounce" style={{color: 'var(--paragraph)'}}
          onClick={() => {
            const aboutSection = document.getElementById(section);
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
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
      <section id={mapSections['Inicio']} className="hero-page min-h-screen flex flex-col items-center justify-center gap-4 text-center px-8">
        <h1 className="text-4xl md:text-6xl font-bold" style={{color: 'var(--titles)'}}>
          Hola, soy Carlos Naveda
        </h1>
        <p className="text-lg md:text-3xl leading-relaxed" style={{color: 'var(--paragraph)'}}>
          Aprendo, construyo...<br />
          <span className="text-[var(--paragraph)]">          
          y voy descubriendo el camino<br />
          mientras avanzo.
          </span>
        </p>
        {buttonBounceGoTo(mapSections['Sobre mí'])}           
      </section> 

      {/* Sobre mí */}
      <section id={mapSections['Sobre mí']} className="about-me-page min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-balanced">
        <Title title={mapTitles[0]} />
        <p className="text-xl max-w-2xl w-full text-justify" style={{color: 'var(--paragraph)'}}>
          
          Soy alguien que suele mirar más hacia adentro, pero con una necesidad constante de compartir hacia afuera lo que voy aprendiendo.<br />
          Me apasiona la tecnología, no me imagino haciendo nada que no esté relacionado con ello, no solo por lo que es, sino por lo que permite construir.<br /><br />

          Actualmente estoy desarrollando ToNextAxis, un espacio donde documento lo que voy aprendiendo y exploro la creación de contenido audiovisual.<br />
          Ha sido una de las decisiones más importantes que he tomado porque me permite aprender haciendo temas como guión, narrativa, edición y en cada tarea usar la creatividad.<br /><br />

          En paralelo, sigo fortaleciendo mis habilidades en Ingeniería, como QA Automation, construyendo una base más sólida para lo que se viene más adelante.<br /><br />

          Sé que todos estos skills confluirán en algo muy gratificante en un mediano plazo, y que los resultados no son inmediatos, hay un proceso y eso está bien, voy en mi dirección.
          
        </p>
        {buttonBounceGoTo(mapSections['Experiencia'])}  
      </section>

      {/* Experiencia */} 
      <div className="job-page flex flex-col">  
         <section id={mapSections['Experiencia']} className="min-h-screen flex flex-col items-center justify-center gap-20 px-8 text-balanced">
          <Title title={mapTitles[1]} />
          {mapJobs.map((job) => (<JobCard key={job.index} job={job} lastJobIndex={lastJobIndex} />))}    
          {buttonBounceGoTo(mapSections['ToNextAxis'])}  
        </section>
      </div>

        {/* ToNextAxis */}
        <div className="toNextAxis-page flex flex-col">
          <section id={mapSections['ToNextAxis']} className="min-h-screen flex flex-col items-center justify-center gap-20 px-8 text-balanced" style={{position: 'relative'}}>
            <Title title={mapTitles[2]} /> 
            <Image className="toNextAxis-logo" src="/images/logos/toNextAxis_logo.png" alt="logo ToNextAxis" width={600} height={600}/>
            <div className="toNextAxis-text-button-videos flex flex-row items-center justify-center gap-12">
              <div className="toNextAxis-text-button flex flex-col items-center justify-center gap-8 max-w-3xl">            
                  <p className="text-xl max-w-md w-full text-justify" style={{color: 'var(--paragraph)'}}>          
                    ToNextAxis nació de las ganas de crear cosas con sentido y explorar el mundo audiovisual.<br /><br />

                    Aquí comparto lo que voy aprendiendo, con la esperanza de acercar a las personas a la tecnología de una forma fácil y entendible.<br /><br />

                    Dale un vistazo, de seguro algo te va a servir. Últimos videos 👉🏻<br />            
                  </p>
                  <ToNextAxisButton />             
              </div>
              <div className="toNextAxis-videos grid grid-cols-3 items-center justify-center gap-6 max-w-5xl">
                {mapVideos.map((video) => (
                  <ToNextAxisIframeVideos key={video.index} video={video} />
                ))}                
              </div>
            </div>    
              {buttonBounceGoTo(mapSections['Blog'])}  
          </section>
        </div>
          
        {/* Blog */}
        <section id={mapSections['Blog']} className="blog-page min-h-screen flex flex-col items-center justify-center gap-20 px-8 text-balanced">
          <Title title={mapTitles[3]} />
          {<Carousel posts={mapPosts} />}
          {buttonBounceGoTo(mapSections['Inicio'])}           
        </section>
      
       


    </main>    
  );
}