'use client';

import { useSoundContext } from '@/src/context/SoundContext';
import { motion, AnimatePresence } from 'framer-motion';
import {Volume2, VolumeOff} from 'lucide-react';

export default function SwitchSound() {

  const { soundEnabled, toggleSound } = useSoundContext();


    return (
        <div  className="switcher-sound static z-999">
        <button onClick={toggleSound} className="cursor-pointer">
            <AnimatePresence mode="wait" initial={false}>
            {soundEnabled
            ? <motion.span
                key="on"
                initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="inline-flex animate-breathe"
              >
                <Volume2 className="text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.7)] transition-colors w-5 h-5 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6"/>
              </motion.span>
            : <motion.span
                key="off"
                initial={{ scale: 0.5, opacity: 0, rotate: 15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="inline-flex"
              >
                <VolumeOff className="text-red-400 drop-shadow-[0_0_6px_rgba(248,113,113,0.7)] transition-colors w-5 h-5 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6"/>
              </motion.span>
            }
            </AnimatePresence>
        </button>
        </div>
  );
}