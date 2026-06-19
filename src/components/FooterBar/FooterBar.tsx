'use client';
import Image from 'next/image';
import { FaYoutube, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import mapLinks from '@/src/data/socialLinks';


export default function FooterBar() {

    const logo_width = 80;
    const logo_height = 80;
    const logoConfig = "max-h-[50px] sm:max-h-[50px] md:max-h-[50px] lg:max-h-[55px] xl:max-h-[60px] 2xl:max-h-[70px] w-auto object-contain";  
    const iconConfig = "h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px] lg:h-[35px] lg:w-[45px] xl:h-[45px] xl:w-[45px] 2xl:h-[50px] 2xl:w-[50px]";    

    return (
        <footer className="footer flex flex-col xl:flex-row items-center justify-center gap-5 p-6 lg:p-8 h-auto md:gap-4 "> 
            <div className="logo-brand flex flex-col items-center justify-center w-[275px]  xl:flex-1">  
                <Image  className={`Mi-logo self-center ${logoConfig}`} src="/images/logos/keyboard.png" alt="Mi-logo" width = {logo_width} height= {logo_height}/>
                <div className="brand-text flex flex-col font-outfit">
                    <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-center" style={{color: 'var(--white)'}}>Carlos Naveda</h3>
                    <h4 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-center tracking-wide" style={{color: '#888888'}}>Tech x Content Creator</h4> 
                </div>                
            </div>            
            <ul className='footer-social flex flex-row justify-center gap-2 xl:gap-4 self-center xl:flex-1'>    
                <li className='youtube-social' style={{color: "#FF0000"}}><a href={mapLinks['Youtube']} target='_blank'><FaYoutube className={`${iconConfig}`}/></a></li>  
                <li className='github-social' style={{color: "#514e4e"}}><a href={mapLinks['Github']} target='_blank'><FaGithub className={`${iconConfig}`}/></a></li>
                <li className='linkedin-social' style={{color: "#0a66c2"}}><a href={mapLinks['Linkedin']} target='_blank'><FaLinkedin className={`${iconConfig}`}/></a></li>
                <li className='instagram-social' style={{color: "#FF0069"}}><a href={mapLinks['Instagram']} target='_blank'><FaSquareInstagram className={`${iconConfig}`}/></a></li>
                <li className='gmail-social' style={{color: "#EA4335"}}><a href={mapLinks['Gmail']} target='_blank'><SiGmail className={`${iconConfig}`}/></a></li>                    
            </ul>            
            <div className='footer-text text-center text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] leading-relaxed font-dm-sans pb-2 xl:flex-1'>  
                <p style={{color: '#888888'}}>
                    Diseñado y construido desde cero con Figma, Next.js, Tailwind CSS, MDX, Supabase y desplegado en Vercel.<br/>
                    Este espacio crecerá conmigo mientras continúe aprendiendo, documentando y creando nuevas ideas.<br/><br/>
                    © 2026 Carlos Naveda
                </p>                 
            </div>
        </footer>    
    );
}

