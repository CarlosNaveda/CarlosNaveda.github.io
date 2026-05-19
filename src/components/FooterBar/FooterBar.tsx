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
        <footer className="footer grid grid-cols-3 items-center self-center">
            <div className="logo-brand flex flex-row items-center justify-self-center gap-2">
                <Image  className="Mi-logo self-center" src="/images/logos/Mi_logo.png" alt="Mi-logo" width = {logo_width} height= {logo_height}/>
                <div className="brand-text flex flex-col items-left justify-center">
                    <h3 className="text-xl " style={{color: 'var(--white)'}}>Carlos Naveda</h3>
                    <h4 className="text-base" style={{color: '#888888'}}>Tech x Creative Builder</h4>
                </div>                
            </div>
            <nav>
                <ul className='footer-social flex flex-row items-center justify-center gap-4'>  
                    <li className='youtube-social' style={{color: "#FF0000"}}><a href={mapLinks['Youtube']} target='_blank'><FaYoutube size={icon_size}/></a></li>  
                    <li className='github-social' style={{color: "#514e4e"}}><a href={mapLinks['Github']} target='_blank'><FaGithub size={icon_size}/></a></li>
                    <li className='linkedin-social' style={{color: "#0a66c2"}}><a href={mapLinks['Linkedin']} target='_blank'><FaLinkedin size={icon_size}/></a></li>
                    <li className='instagram-social' style={{color: "#FF0069"}}><a href={mapLinks['Instagram']} target='_blank'><FaSquareInstagram size={icon_size}/></a></li>
                    <li className='gmail-social' style={{color: "#EA4335"}}><a href={mapLinks['Gmail']} target='_blank'><SiGmail size={icon_size}/></a></li>                    
                </ul>
            </nav>
            <div className='footer-text flex flex-col items-center justify-center'>
                <p style={{color: '#888888'}}>
                    Diseñado y construido desde cero con Figma, Next.js, Tailwind CSS, MDX, Supabase y desplegado en Vercel.<br/>
                    Este espacio crecerá conmigo mientras continúe aprendiendo, documentando y creando nuevas ideas.<br/>
                    © 2026 Carlos Naveda
                </p>                
            </div>
        </footer>    
    );
}

