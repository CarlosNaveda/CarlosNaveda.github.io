import { Howl } from 'howler';
import { useCallback, useEffect, useRef } from 'react';

export function useSound(name: string, src: string, volume = 0.5) {
  const soundRef = useRef<Howl | null>(null);
  const audioContextResumedRef = useRef(false);

  useEffect(() => {
    // ☝️ Resume AudioContext al primer interacción
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

    // Resume on user interaction
    document.addEventListener('click', resumeAudioContext, { once: true });
    document.addEventListener('touchstart', resumeAudioContext, { once: true });
    document.addEventListener('mousemove', resumeAudioContext, { once: true });

    // Crear el Howl
    soundRef.current = new Howl({ 
      src: [src], 
      volume,
      html5: true,
    });

    return () => {
      soundRef.current?.stop();
      document.removeEventListener('click', resumeAudioContext);
      document.removeEventListener('touchstart', resumeAudioContext);
      document.removeEventListener('mousemove', resumeAudioContext);
    };
  }, [src, volume]);

  const play = useCallback(() => { 
    soundRef.current?.play(); 
  }, []);

  const stop = useCallback(() => { 
    soundRef.current?.stop(); 
  }, []);

  return { play, stop };
}