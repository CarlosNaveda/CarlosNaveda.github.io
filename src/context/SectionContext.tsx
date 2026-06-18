'use client';

import { createContext, useState } from 'react';

type SectionContextType = {
  activeSection: string;
  setActiveSection: (id: string) => void;
};

export const SectionContext = createContext<SectionContextType | null>(null);

/**
 * Proporciona el estado actual de la sección y la función para establecer una nueva sección activa.
 * @param children Elementos hijos de la estructura React.
 */
export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}
