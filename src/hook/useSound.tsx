import { Howl } from 'howler';
import { useCallback, useEffect, useRef } from 'react';
import { useSoundContext } from '../context/SoundContext';

export function useSound(name: string, src: string, volume = 0.5) {
  const soundRef = useRef<Howl | null>(null);
  const audioContextResumedRef = useRef(false);
  const { soundEnabled } = useSoundContext();  

  useEffect(() => {    
    const resumeAudioContext = () => {
      if (!audioContextResumedRef.current) {
        try {
          const AudioContextClass = (
            window.AudioContext || 
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
          );
          
          if (AudioContextClass) {
            const ctx = new AudioContextClass();
            if (ctx.state === 'suspended') {
              ctx.resume();
            }
          }
        } catch (err) {
          console.log('Audio context resume:', err);
        }
        audioContextResumedRef.current = true;
      }
    };
    
    document.addEventListener('click', resumeAudioContext, { once: true });
    document.addEventListener('touchstart', resumeAudioContext, { once: true });
    document.addEventListener('mousemove', resumeAudioContext, { once: true });

    soundRef.current = new Howl({ 
      src: [src], 
      volume,
      html5: true,
      pool: 1,      
      preload: true 
    });

    return () => {
      soundRef.current?.stop();
      document.removeEventListener('click', resumeAudioContext);
      document.removeEventListener('touchstart', resumeAudioContext);
      document.removeEventListener('mousemove', resumeAudioContext);
    };
  }, [src, volume]);

  const play = useCallback(() => { 
    if (soundEnabled) soundRef.current?.play();
    // ☝️ NUEVO: solo suena si soundEnabled es true
  }, [soundEnabled]);

  const stop = useCallback(() => { 
    soundRef.current?.stop(); 
  }, []);

  return { play, stop };
}