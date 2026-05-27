'use client';
import Image from 'next/image';
import { useSoundContext } from '../../context/SoundContext';
import {Volume2, VolumeOff} from 'lucide-react';

export default function SwitchSound() {
    
  const icon_size = 40;    
  const { soundEnabled, toggleSound } = useSoundContext();
  

    return (        
        <div  className="switcher-sound top-7 right-3 md:right-15 lg:top-10 lg:right-20" style={{ position: 'fixed', zIndex: 9999 }}>
        <button onClick={toggleSound} className="cursor-pointer">
            {soundEnabled 
            ? <Volume2 size={24} className="text-[var(--paragraph)] hover:text-[var(--titles)] transition-colors"/>
            : <VolumeOff size={24} className="text-[var(--paragraph)] hover:text-[var(--titles)] transition-colors"/>
            }
        </button>
        </div>    
  ); 
}