import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SectionProvider } from '../src/Context/SectionContext';
import LeftBarNav from '../src/components/NavBar/LeftBarNav';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Naveda",
  description: "Mi espacio personal donde comparto lo que voy aprendiendo y construyendo en el mundo de la tecnología.",
  icons: {
    icon: '/images/logos/Mi_logo.png',   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}      
    >
      <body> 
        {/* Agregamos el provider de secciones */}
        <SectionProvider>
          {/* Aquí llamamos a LeftBarNav */}
          <LeftBarNav /> 
          {children}
        </SectionProvider> 
      </body>
    </html>
  );
}
