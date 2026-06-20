import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import jobType from '@/src/components/Job/jobType';
import { useSound } from '@/src/hook/useSound';

const JobCard = ({ job }: { job: jobType }) => {

    const image_width = 50;
    const image_height = 50;
    const moduleIndex = job.index % 2 === 0 ? 'even' : 'odd'; // Determina si el índice es par o impar

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

    //Para sonido cuando se entra y sale del job card
    const { play: playUiFocus, stop: stopUiFocus } = useSound('ui-focus', '/sounds/ui-focus.mp3', 0.4);

    // El trabajo actual (job.current) lleva siempre el acento más brillante, con o sin hover
    const accentColor = job.current ? '#8B5CF6' : '#4A4789';

    return (
        <div className="node-job-card relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 items-center w-full font-dm-sans">
            <div
                className={`node row-start-1 col-start-2 hidden lg:block lg:w-[16px] lg:h-[16px] ${job.current ? 'node-current animate-breathe' : ''}`}
                style={{ backgroundColor: accentColor }}
            />
            <article
                id={`job-${job.index}`}
                className={`job-card border-l-4 lg:border-l-0 w-full sm:max-w-[440px] md:max-w-[480px] lg:max-w-[280px] xl:max-w-[400px] 2xl:max-w-[520px] sm:justify-self-center p-3 md:p-4 flex flex-col gap-3 row-start-1
                            ${moduleIndex === 'even' ? 'lg:col-start-3 lg:justify-self-start' : 'lg:col-start-1 lg:justify-self-end'}
                            ${job.current ? 'job-card-current animate-breathe' : ''}
                            transition-opacity duration-1000 ease-in-out
                            ${isJobCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ borderColor: accentColor }}
                onMouseEnter={() => playUiFocus()}
                onMouseLeave={() => stopUiFocus()}>
                <div className="job-card-base flex flex-col gap-2">
                    <time className="dateRange text-[11px] md:text-xs flex flex-row items-center gap-2" style={{ color: 'var(--paragraph)', fontWeight: 'bold' }}>
                        <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        {job.start} - {job.end}
                    </time>
                    <div className="logoCompany-role flex flex-row items-center gap-3 flex-wrap">
                        <h4 className="logoCompany text-xs md:text-sm flex flex-row items-center gap-2 font-outfit" style={{ color: 'var(--paragraph)', fontWeight: 'bold' }}>
                            <Image
                                className="jobs-logo w-[20px] h-[20px] md:w-[28px] md:h-[28px]"
                                src={job.logo}
                                alt={job.company}
                                width={image_width}
                                height={image_height}
                            />
                            {job.company}
                        </h4>
                        <h4 className="role text-[10px] md:text-[11px] font-outfit" style={{ color: 'var(--position)', fontWeight: 'bold' }}>
                            {job.role}
                        </h4>
                    </div>
                </div>
                <div className="job-card-body flex flex-col gap-3">
                    <p className="job-description text-[11px] md:text-xs" style={{ color: 'var(--paragraph)' }}>
                        {job.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {job.tags.map((tag, index) => (
                            <span key={index} className="job-tags text-[10px]" style={{ color: 'var(--titles)' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
            <div className={`empty-space row-start-1 hidden lg:block ${moduleIndex === 'even' ? 'lg:col-start-1' : 'lg:col-start-3'}`}>
            </div>
        </div>
    );
}

export default JobCard;
