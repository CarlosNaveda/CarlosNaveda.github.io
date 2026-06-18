'use client';

import SwitchSound from './SwitchSound';
import { useIsDesktop } from '@/src/hook/useIsDesktop';
import {ChevronLeft} from 'lucide-react';
import {useRouter} from 'next/navigation';

export default function TopBarBlogNav() {    
    
    const router = useRouter();
    const isDesktop = useIsDesktop();
    const classConfigMobileTablet = `top-bar-blog-nav top-0 left-0 w-[320px] xs:w-[350px] md:w-[664px] gap-1 items-center justify-between pt-1 px-2`;        
    const classConfigDesktop = `top-bar-blog-nav top-0 left-0 w-[1200px] h-[50px] gap-1 items-center justify-between pt-1 px-5`;         
    

    //Botón para regresar al blog preview.  
    function buttonsBlogPreview() { 
    return (
        <div className="blog-preview-link flex flex-row items-center">   
            <button 
                className="mt-8 flex flex-row items-center justify-between gap-0 lg:gap-2 cursor-pointer text-[var(--paragraph)] hover:text-[var(--titles)] transition-colors" 
                onClick={() => {router.back()}}>
                <ChevronLeft className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] lg:h-[30px] lg:w-[30px]"/> 
                <span className="text-base md:text-lg lg:text-xl font-dm-sans">Volver</span>                              
            </button>                     
        </div>           
    );
    }     


    return (
        <aside className={`relative ${isDesktop ? classConfigDesktop : classConfigMobileTablet}`}>
            {buttonsBlogPreview()}
            <h2 className="title-blog-main absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl font-outfit">Blog</h2>                                
            <SwitchSound />       
        </aside>   
    );
}

