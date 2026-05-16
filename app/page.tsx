'use client';

import { ChevronDown} from 'lucide-react';
import Title from '../src/components/Title/Title';
import JobCard from '../src/components/Job/JobCard';


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


//FUNCIONES

//Este componente es un botón con animación de rebote que, al hacer clic, desplaza suavemente la vista hacia la sección especificada por el ID.
export function buttonBounceGoTo(section: string) { 
  return (
    <button className="mt-8 animate-bounce" style={{color: 'var(--sub-paragraph)'}}
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
      <section id={mapSections['Inicio']} className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-8">
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
        {buttonBounceGoTo(mapSections['Sobre mí'])}           
      </section> 

      {/* Sobre mí */}
      <section id={mapSections['Sobre mí']} className="min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-balanced">
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
         <section id={mapSections['Experiencia']} className="min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-balanced">
          <Title title={mapTitles[1]} />
          {mapJobs.map((job) => (<JobCard key={job.index} job={job} lastJobIndex={lastJobIndex} />))}    
          {buttonBounceGoTo(mapSections['ToNextAxis'])}  
        </section>
      </div>








        {/* ToNextAxis */}
        <section id={mapSections['ToNextAxis']} className="min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-balanced">
          <Title title={mapTitles[2]} />
            {buttonBounceGoTo(mapSections['Blog'])}  
        </section>

        {/* Blog */}
        <section id={mapSections['Blog']} className="min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-balanced">
          <Title title={mapTitles[3]} />           
        </section>
      
       


    </main>    
  );
}