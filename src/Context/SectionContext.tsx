'use client';

import { createContext, useState } from 'react';

type SectionContextType = {
  activeSection: string;
  setActiveSection: (id: string) => void;
};

export const SectionContext = createContext<SectionContextType | null>(null);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}