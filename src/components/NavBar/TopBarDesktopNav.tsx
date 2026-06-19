'use client';

import SwitchSound from '@/src/components/NavBar/SwitchSound';
import Image from 'next/image';

export default function TopBarDesktopNav() {    

    const logo_size = 80
    const logoConfig = "max-h-[50px] sm:max-h-[50px] md:max-h-[50px] lg:max-h-[55px] xl:max-h-[60px] 2xl:max-h-[70px] w-auto object-contain";  

    return (
        <aside className="top-bar-desktop-nav sticky flex flex-row items-center justify-between top-0 left-0 md:w-[650px] lg:w-[100%] h-[50px] gap-1 pt-5 px-20">                        
            <Image  className={`name self-center ${logoConfig}`} src="/images/logos/Carlos-Naveda-CN-01.png" alt="Mi-logo" width = {logo_size} height= {logo_size}/>
            <SwitchSound />       
        </aside>   
    );
}

