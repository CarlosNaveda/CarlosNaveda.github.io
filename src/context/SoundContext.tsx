'use client';

import { createContext, useContext, useState } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: false,
  toggleSound: () => {},
});


/**
 * Contexto para gestionar el estado de la música.
 */
export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(false);  

  const toggleSound = () => setSoundEnabled(prev => !prev);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
}



/**
 * Función de utilidad para acceder al contexto de la música.
 */
export function useSoundContext() {
  return useContext(SoundContext);
}