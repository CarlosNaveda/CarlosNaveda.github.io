'use client';

import SwitchSound from '@/src/components/NavBar/SwitchSound';
import TypingKeyboard from '@/src/components/Animations/TypingKeyboard';

export default function TopBarDesktopNav() {    

    return (
        <aside className="top-bar-desktop-nav sticky flex flex-row items-center justify-between top-0 left-0 md:w-[650px] lg:w-[100%] h-[50px] gap-1 pt-5 px-20">            
            <TypingKeyboard className="w-[50px] h-[50px]"/>            
            <SwitchSound />       
        </aside>   
    );
}

