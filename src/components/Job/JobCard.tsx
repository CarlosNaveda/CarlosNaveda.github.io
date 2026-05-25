import { useState,useEffect } from 'react';
import { Calendar} from 'lucide-react';
import Image from 'next/image';
import jobType from './jobType';

const JobCard = ({job, lastJobIndex,isLastJobExpanded,onLastJobHover}: {job: jobType, lastJobIndex: number, isLastJobExpanded: boolean, onLastJobHover?: (value: boolean) => void}) =>{
       
   const image_width = 50;
   const image_height = 50;
   const [state, setState] = useState(false);  //Manejo de estado para el hover 
   const moduleIndex = job.index % 2 === 0 ? 'even' : 'odd';  // Determina si el índice es par o impar   
   
    //Para manejar la visibilidad de los cards    
    const [isJobCardVisible, setIsJobCardVisible] = useState(false);

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        setIsJobCardVisible(entries[0].isIntersecting);
    }, { threshold: 0.1 });

    const article = document.querySelector(`#job-${job.index}`);
    if (article) observer.observe(article); 

    return () => observer.disconnect();
    }, [job.index]);



    return (
        <div className="node-job-card grid grid-cols-[1fr_auto_1fr] gap-4 items-start w-[300px] md:w-[350px] lg:w-[1000px] font-dm-sans">    
            <div className="node row-start-1 col-start-2 hidden lg:block lg:w-[20px] lg:h-[20px] transition-all duration-100 ease-in-out" style={{marginTop: !state ? '280%' : '560%' , backgroundColor: state ? 'var(--nodes_active)' : 'var(--nodes_inactive)'}}>
                <hr className={`timeline hidden lg:block max-h-[550px] transition-all duration-120 ease-in-out
                    ${lastJobIndex === job.index // Si es el último card, sin línea
                        ? "lg:h-0"  
                        : lastJobIndex-1 === job.index && isLastJobExpanded // Si es el penúltimo y el último card está expandido 
                            ? "lg:h-[230px]"  
                            : lastJobIndex-1 === job.index && state // Si es el penúltimo y está expandido
                                ? "lg:h-[210px]"
                                : lastJobIndex-1 === job.index && state // Si es el penúltimo y está contraído
                                    ? "lg:h-[180px]"
                                    : lastJobIndex-1 === job.index && !isLastJobExpanded // Si es el penúltimo y el último card está contraído 
                                        ? "lg:h-[180px]"     
                                        : "lg:h-[270px]"  // Para los demás cards
                    }`} style={{opacity: lastJobIndex === job.index ? 0 : 1}}>  
                </hr>
            </div>
            <article 
                id={`job-${job.index}`} 
                className={`job-card hover:animate-breathe w-[300px] md:w-[350px] lg:w-[450px] p-[15px] md:p-[16px] flex flex-col gap-4 mt-8 row-start-1  
                            ${moduleIndex === 'even' ? 'lg:col-start-3 lg:justify-self-start' : 'lg:col-start-1 lg:justify-self-end'} transition-all duration-1000 ease-in-out 
                            ${isJobCardVisible ? 'opacity-100 translate-y-0' : "opacity-0 translate-y-8"}`} 
                onMouseLeave={() => {setState(false); onLastJobHover?.(false);}}>
                <div className="job-card-base flex flex-col gap-2" onMouseEnter={() => {setState(true); onLastJobHover?.(true);}}> 
                    <time className="dateRange text-xs md:text-base flex flex-row items-center gap-2" style={{color: 'var(--paragraph)',fontWeight: 'bold'}}>  
                        <Calendar />              
                        {job.start} - {job.end}
                    </time>   
                    <div className="logoCompany-role flex flex-row items-center justify-content gap-4 gap-y-4">    
                        <h4 className="logoCompany text-base md:text-sm lg:text-lg flex flex-row items-center gap-2 font-outfit" style={{color: 'var(--paragraph)', fontWeight: 'bold'}}>              
                            <Image 
                                className="jobs-logo  w-[25] h-[25] md:w-[50] md:h-[50]"  
                                src={job.logo} 
                                alt={job.company}  
                                width = {image_width}      
                                height= {image_height}                                         
                            />
                            {job.company}
                        </h4>             
                        <h4 className="role text-[8px] md:text-xs lg:text-lg font-outfit" style={{color: 'var(--position)',fontWeight: 'bold'}}>
                        {job.role}
                        </h4> 
                    </div>   
                </div>                     
                <div className={`job-card-expanded flex flex-col gap-4 mt-8 transition-all duration-700 ease-in-out ${state ? 'lg:opacity-[100] lg:max-h-[500px]' : 'lg:opacity-[0] lg:h-0'}`}>
                    <h4 className="job-description text-xs md:text-sm" style={{color: 'var(--paragraph)'}}>
                    {job.description}
                    </h4>
                    <h4 className="text-[10px] md:text-xs flex flex-wrap gap-1">
                        {job.tags.map((tag, index) => (
                        <span key={index} className="job-tags" style={{color: 'var(--titles)'}}>
                            {tag}
                        </span>
                        ))}
                    </h4>       
                </div>                            
            </article>
            <div className={`empty-space row-start-1 ${moduleIndex === 'even' ? 'lg:col-start-1' : 'lg:col-start-3'}`}>
            </div>
        </div>    
    );   
}




export default JobCard;