import { useState } from 'react';
import { Calendar} from 'lucide-react';
import Image from 'next/image';
import JobType from './JobType';

const JobCard = ({job, lastJobIndex}: {job: JobType, lastJobIndex: number}) =>{
       
   const image_width = 50;
   const image_height = 50;
   const [state, setState] = useState(false);  //Manejo de estado para el hover 
   const moduleIndex = job.index % 2 === 0 ? 'even' : 'odd';  // Determina si el índice es par o impar
   
    return (
        <div className="node-job-card grid grid-cols-[1fr_auto_1fr] gap-4 items-center ">              
            <div className="node row-start-1 col-start-2" style={{backgroundColor: state ? 'var(--nodes_active)' : 'var(--nodes_inactive)'}} onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
                <hr className="timeline" style={{opacity: lastJobIndex === job.index ? 0 : 1}}> 
                </hr>
            </div>
            <div className="job-card flex flex-col gap-4 mt-8 row-start-1" style={{gridColumnStart: moduleIndex === 'even' ? 3 : 1, justifySelf: moduleIndex === 'even' ? 'start' : 'end'}} onMouseLeave={() => setState(false)}>
                <div className="job-card-base flex flex-col gap-2" onMouseEnter={() => setState(true)}>
                    <time className="dateRange text-base flex flex-row gap-2" style={{color: 'var(--paragraph)',fontWeight: 'bold'}}>
                        <Calendar />              
                        {job.start} - {job.end}
                    </time>   
                    <div className="logoCompany-role flex flex-row items-center justify-content gap-4 gap-y-4">   
                        <h4 className="logoCompany text-lg flex flex-row items-center gap-2" style={{color: 'var(--paragraph)', fontWeight: 'bold'}}>              
                            <Image 
                                className="jobs-logo"
                                src={job.logo} 
                                alt={job.company}  
                                width = {image_width}      
                                height= {image_height}                                        
                            />
                            {job.company}
                        </h4>             
                        <h4 className="role text-lg" style={{color: 'var(--position)',fontWeight: 'bold'}}>
                        {job.role}
                        </h4> 
                    </div>   
                </div>                     
                <div className="job-card-expanded flex flex-col gap-4 mt-8" style={{opacity: state ? 1 : 0, height: state ? 'auto' : 0}}>
                    <h4 className="job-description text-sm" style={{color: 'var(--paragraph)'}}>
                    {job.description}
                    </h4>
                    <h4 className="text-xs flex flex-wrap gap-1">
                        {job.tags.map((tag, index) => (
                        <span key={index} className="job-tags" style={{color: 'var(--titles)'}}>
                            {tag}
                        </span>
                        ))}
                    </h4>       
                </div>                            
            </div>
            <div className="empty-space row-start-1" style={{gridColumnStart: moduleIndex === 'even' ? 1 : 3}}>
            </div>
        </div>    
    );   
}




export default JobCard;