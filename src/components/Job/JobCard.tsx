import { useState } from 'react';
import { Calendar} from 'lucide-react';
import Image from 'next/image';
import JobType from './JobType';

const JobCard = ({job}: {job: JobType}) =>{
   
   const [state, setState] = useState(false);
   
    return (
     <div className="jobs-card flex flex-col gap-4 mt-8" onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
            <h4 className="dateRange text-xl flex flex-row gap-2" style={{color: 'var(--paragraph)',fontWeight: 'bold'}}>
                <Calendar />              
                {job.start} - {job.end}
            </h4>   
            <div className="flex flex-row items-center gap-2">
            <h4 className="logoCompany text-xl flex flex-row items-center gap-2" style={{color: 'var(--paragraph)', fontWeight: 'bold'}}>              
                <Image 
                    className="jobs-logo"
                    src={job.logo} 
                    alt={job.company}  
                    width = {64}      
                    height= {64}                                        
                />
                {job.company}
            </h4>             
            <h4 className="role text-xl" style={{color: 'var(--position)',fontWeight: 'bold'}}>
            {job.role}
            </h4> 
            </div>    
            <div className="jobs-card-expanded flex flex-col gap-4 mt-8" style={{opacity: state ? 1 : 0, height: state ? 'auto' : 0}}>
               <h4 className="job-description text-lg" style={{color: 'var(--paragraph)'}}>
                {job.description}
                </h4>
                <h4 className="text-base flex flex-wrap gap-1">
                    {job.tags.map((tag, index) => (
                    <span key={index} className="jobs-tags" style={{color: 'var(--titles)'}}>
                        {tag}
                    </span>
                    ))}
                </h4>       
            </div>                            
     </div>
    );   
}




export default JobCard;