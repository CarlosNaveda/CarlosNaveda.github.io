import { useState } from 'react';
import { Calendar} from 'lucide-react';
import Image from 'next/image';
import jobType from './jobType';

const JobCard = ({job, lastJobIndex}: {job: jobType, lastJobIndex: number}) =>{
       
   const image_width = 50;
   const image_height = 50;
   const [state, setState] = useState(false);  //Manejo de estado para el hover 
   const moduleIndex = job.index % 2 === 0 ? 'even' : 'odd';  // Determina si el índice es par o impar   
   
    return (
        <div className="node-job-card grid grid-cols-[1fr_auto_1fr] gap-4 items-start w-[300px] md:w-[350px] lg:w-[1000px]"> 
            <div className="node row-start-1 col-start-2 hidden lg:block lg:w-[20px] lg:h-[20px]" style={{backgroundColor: state ? 'var(--nodes_active)' : 'var(--nodes_inactive)'}}>
                <hr className="timeline hidden lg:block" style={{opacity: lastJobIndex === job.index ? 0 : 1}}>  
                </hr>
            </div>
            <div className={`job-card w-[300px] md:w-[350px] lg:w-[450px] p-[15px] md:p-[16px] flex flex-col gap-4 mt-8 row-start-1 ${moduleIndex === 'even' ? 'lg:col-start-3 lg:justify-self-start' : 'lg:col-start-1 lg:justify-self-end'}`} onMouseLeave={() => setState(false)}>
                <div className="job-card-base flex flex-col gap-2" onMouseEnter={() => setState(true)}> 
                    <time className="dateRange text-xs md:text-base flex flex-row items-center gap-2" style={{color: 'var(--paragraph)',fontWeight: 'bold'}}>  
                        <Calendar />              
                        {job.start} - {job.end}
                    </time>   
                    <div className="logoCompany-role flex flex-row items-center justify-content gap-4 gap-y-4">    
                        <h4 className="logoCompany text-base md:text-sm lg:text-lg flex flex-row items-center gap-2" style={{color: 'var(--paragraph)', fontWeight: 'bold'}}>              
                            <Image 
                                className="jobs-logo  w-[25] h-[25] md:w-[50] md:h-[50]"  
                                src={job.logo} 
                                alt={job.company}  
                                width = {image_width}      
                                height= {image_height}                                         
                            />
                            {job.company}
                        </h4>             
                        <h4 className="role text-[8px] md:text-xs lg:text-lg" style={{color: 'var(--position)',fontWeight: 'bold'}}>
                        {job.role}
                        </h4> 
                    </div>   
                </div>                     
                <div className={`job-card-expanded flex flex-col gap-4 mt-8 ${state ? 'lg:opacity-[1] lg:h-auto' : 'lg:opacity-[0] lg:h-0'}`}>
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
            </div>
            <div className={`empty-space row-start-1 ${moduleIndex === 'even' ? 'lg:col-start-1' : 'lg:col-start-3'}`}>
            </div>
        </div>    
    );   
}




export default JobCard;