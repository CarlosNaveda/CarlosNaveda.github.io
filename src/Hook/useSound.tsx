import { Howl } from 'howler';
import { useCallback, useEffect, useRef } from 'react';

export function useSound(name: string, src: string, volume = 0.5) {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({ src: [src], volume });
    return () => { soundRef.current?.stop(); };
  }, [src, volume]);

  const play = useCallback(() => { soundRef.current?.play(); }, []);
  const stop = useCallback(() => { soundRef.current?.stop(); }, []);

  return { play, stop };
}