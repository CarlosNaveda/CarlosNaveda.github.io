import { useContext } from "react";
import { SectionContext } from "@/src/context/SectionContext";
export const useSection = () => {
  const context = useContext(SectionContext);

  if (!context) {
    throw new Error("SectionContext must be used within Provider");
  }

  return context;
};