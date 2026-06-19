'use client';

import SwitchSound from '@/src/components/NavBar/SwitchSound';
import Accordion from '@/src/components/Accordion/Accordion';

export default function TopBarNav() {    
    
    const classConfigMobileTablet = `top-bar-nav fixed top-0 left-0 w-screen flex flex-row transition-all duration-500 gap-1 items-center justify-between p-2 z-999`;        

    return (
        <aside className={classConfigMobileTablet}>
            <Accordion />   
            <SwitchSound />       
        </aside>   
    );
}

