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
    annotation: 'En cada lugar aprendí nuevas cosas valiosas hasta hoy.'
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
    description: "Canal de YouTube donde documento explico lo aprendido sobre tecnología y sistemas de forma simple para hispanohablantes.",
    tags: ["YouTube", "Davinci Resolve", "StoryTelling", "Edición Narrativa", "Comunicación técnica"]
  },
  {
    index: 1,
    start: "Dic 2024",
    end: "Nov 2025",
    logo: "/images/jobs/canvia.jpg",
    company: "Canvia",
    role: "Quality Analyst III",
    description: "Analista de calidad en empresa de tecnología financiera, responsable de diseñar y ejecutar pruebas para garantizar la calidad del software.",
    tags: ["Quality Assurance","AS400","Web","Apps","WebSphere","SQL","Jira", "Confluence", "Metodologías Ágiles", "Jenkins","JFrog", "Bitbucket"]
  }
];

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
      <section id={mapSections['Experiencia']} className="min-h-screen flex flex-col items-center justify-center gap-6 px-8 text-balanced">
        <Title title={mapTitles[1]} />
        {mapJobs.map((job) => (<JobCard key={job.index} job={job} />))}     
      </section>


    </main>    
  );
}