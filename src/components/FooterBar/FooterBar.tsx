'use client';
import Image from 'next/image';
import { FaYoutube, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import mapLinks from '@/src/data/socialLinks';


export default function FooterBar() {

    const logo_width = 80;
    const logo_height = 80;
    const icon_size = 40;    

    return (
        <footer className="footer flex flex-col items-center justify-center gap-5 bg-[var(--my_background)] p-6 lg:p-8 h-auto md:gap-4 md:flex-row md:items-center md:justify-center"> 
            <div className="logo-brand flex flex-col md:flex-row lg:flex-row items-center justify-center w-[275px]  md:flex-1">  
                <Image  className="Mi-logo self-center w-[50px] h-[50px] md:w-[80px] md:h-[80px]" src="/images/logos/Mi_logo.png" alt="Mi-logo" width = {logo_width} height= {logo_height}/>
                <div className="brand-text flex flex-col">
                    <h3 className="text-xl text-center" style={{color: 'var(--white)'}}>Carlos Naveda</h3>
                    <h4 className="text-base text-center tracking-wide" style={{color: '#888888'}}>Tech x Creative Builder</h4> 
                </div>                
            </div>            
            <ul className='footer-social flex flex-row justify-center gap-4 md:gap-2 lg:gap-4 w-[275px] self-center flex-1'>    
                <li className='youtube-social' style={{color: "#FF0000"}}><a href={mapLinks['Youtube']} target='_blank'><FaYoutube size={icon_size}/></a></li>  
                <li className='github-social' style={{color: "#514e4e"}}><a href={mapLinks['Github']} target='_blank'><FaGithub size={icon_size}/></a></li>
                <li className='linkedin-social' style={{color: "#0a66c2"}}><a href={mapLinks['Linkedin']} target='_blank'><FaLinkedin size={icon_size}/></a></li>
                <li className='instagram-social' style={{color: "#FF0069"}}><a href={mapLinks['Instagram']} target='_blank'><FaSquareInstagram size={icon_size}/></a></li>
                <li className='gmail-social' style={{color: "#EA4335"}}><a href={mapLinks['Gmail']} target='_blank'><SiGmail size={icon_size}/></a></li>                    
            </ul>            
            <div className='footer-text text-[14px] flex flex-col items-center justify-center w-[350px] text-justify leading-relaxed flex-1 '>  
                <p style={{color: '#888888'}}>
                    Diseñado y construido desde cero con Figma, Next.js, Tailwind CSS, MDX, Supabase y desplegado en Vercel.<br/>
                    Este espacio crecerá conmigo mientras continúe aprendiendo, documentando y creando nuevas ideas.<br/><br/>
                    © 2026 Carlos Naveda
                </p>                 
            </div>
        </footer>    
    );
}

