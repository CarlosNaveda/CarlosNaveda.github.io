'use client';

import { useSoundContext } from '../../context/SoundContext';
import {Volume2, VolumeOff} from 'lucide-react';

export default function SwitchSound() {
    
  const icon_size = 24;    
  const { soundEnabled, toggleSound } = useSoundContext();
  

    return (        
        <div  className="switcher-sound top-7 right-3 md:right-15 lg:top-10 lg:right-20 static lg:fixed z-999">
        <button onClick={toggleSound} className="cursor-pointer">
            {soundEnabled 
            ? <Volume2 size={icon_size} className="text-[var(--paragraph)] hover:text-[var(--titles)] transition-colors"/>
            : <VolumeOff size={icon_size} className="text-[var(--paragraph)] hover:text-[var(--titles)] transition-colors"/>
            }
        </button>
        </div>    
  ); 
}