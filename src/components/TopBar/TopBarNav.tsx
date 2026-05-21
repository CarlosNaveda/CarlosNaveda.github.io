'use client';
import Image from 'next/image';
import {HouseHeart, UserStar, BriefcaseBusiness, CirclePlay, NotebookPen} from 'lucide-react';
import { FaYoutube, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import mapSections from '@/src/data/sections';
import mapLinks from '@/src/data/socialLinks';

export default function TopBarNav({topBarNavOption}: {topBarNavOption:string}) {

    const logo_width = 80;
    const logo_height = 80;
    const icon_size = 40;    

    return (
        <header className="top-bar h-16 grid grid-cols-3 items-center self-center">
            <div className="logo-link justify-self-center">
                <a href="http://localhost:3000/">  
                    <Image  className="Mi-logo self-center" src="/images/logos/Mi_logo.png" alt="Mi-logo" width = {logo_width} height= {logo_height}/>                
                </a>               
            </div>
            <nav>
                <ul className='top-bar-nav flex flex-row items-center justify-center gap-4'> 
                    <li className={mapSections['inicio'] === topBarNavOption ? "active-nav" : "inactive-nav"} >
                        <a href=""><HouseHeart size={icon_size}/>
                        </a>{mapSections['inicio'] === topBarNavOption ? `${mapSections['inicio'].toUpperCase()}` : ''}    
                    </li>
                    <li className={mapSections['sobreMi'] === topBarNavOption ? "active-nav" : "inactive-nav"} >
                        <a href=""><UserStar size={icon_size}/>
                        </a>{mapSections['sobreMi'] === topBarNavOption ? `${mapSections['sobreMi'].toUpperCase()}` : ''}    
                    </li>
                    <li className={mapSections['experiencia'] === topBarNavOption ? "active-nav" : "inactive-nav"} >
                        <a href=""><BriefcaseBusiness size={icon_size}/>
                        </a>{mapSections['experiencia'] === topBarNavOption ? `${mapSections['experiencia'].toUpperCase()}` : ''}    
                    </li>                    
                    <li className={mapSections['tonextaxis'] === topBarNavOption ? "active-nav" : "inactive-nav"} >
                        <a href=""><CirclePlay size={icon_size}/>
                        </a>{mapSections['tonextaxis'] === topBarNavOption ? `${mapSections['tonextaxis'].toUpperCase()}` : ''}    
                    </li>
                    <li className={mapSections['blog'] === topBarNavOption ? "active-nav" : "inactive-nav"} >
                        <a href=""><NotebookPen size={icon_size}/>
                        </a>{mapSections['blog'] === topBarNavOption ? `${mapSections['blog'].toUpperCase()}` : ''}    
                    </li>                    
                </ul>
            </nav>
            <nav>
                <ul className='top-bar-social flex flex-row items-left justify-center gap-4'>  
                    <li className='youtube-social' style={{color: "#FF0000"}}><a href={mapLinks['Youtube']} target='_blank'><FaYoutube size={icon_size}/></a></li>  
                    <li className='github-social' style={{color: "#514e4e"}}><a href={mapLinks['Github']} target='_blank'><FaGithub size={icon_size}/></a></li>
                    <li className='linkedin-social' style={{color: "#0a66c2"}}><a href={mapLinks['Linkedin']} target='_blank'><FaLinkedin size={icon_size}/></a></li>
                    <li className='instagram-social' style={{color: "#FF0069"}}><a href={mapLinks['Instagram']} target='_blank'><FaSquareInstagram size={icon_size}/></a></li>
                    <li className='gmail-social' style={{color: "#EA4335"}}><a href={mapLinks['Gmail']} target='_blank'><SiGmail size={icon_size}/></a></li>                    
                </ul>
            </nav>

        </header>    
    );
}

