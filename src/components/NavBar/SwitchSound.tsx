'use client';

import { useSoundContext } from '@/src/context/SoundContext';
import {Volume2, VolumeOff} from 'lucide-react';

export default function SwitchSound() {
        
  const { soundEnabled, toggleSound } = useSoundContext();
  

    return (        
        <div  className="switcher-sound top-7 right-3 md:right-15 lg:top-10 lg:right-20 static z-999">
        <button onClick={toggleSound} className="cursor-pointer">
            {soundEnabled 
            ? <Volume2 className="text-[var(--paragraph)] hover:text-[var(--titles)] transition-colors w-[20px] h-[20px] md:w-[24px] md:h-[24px]"/>
            : <VolumeOff className="text-[var(--paragraph)] hover:text-[var(--titles)] transition-colors w-[20px] h-[20px] md:w-[24px] md:h-[24px]"/>
            }
        </button>
        </div>    
  ); 
}