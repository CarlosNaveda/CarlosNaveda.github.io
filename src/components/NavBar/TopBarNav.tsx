'use client';

import SwitchSound from '@/src/components/NavBar/SwitchSound';
import Accordion from '@/src/components/Accordion/Accordion';

export default function TopBarNav() {    
    
    const classConfigMobileTablet = `top-bar-nav fixed top-0 left-0 w-screen flex flex-row transition-all duration-500 gap-1 items-center justify-between pt-2 pb-2 pl-2 pr-6 z-[1002]`;

    return (
        <aside className={classConfigMobileTablet}>
            <div className="topbar-pill">
                <Accordion />
            </div>
            <div className="topbar-pill px-3 py-2">
                <SwitchSound />
            </div>
        </aside>
    );
}

