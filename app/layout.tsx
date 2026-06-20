import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, DM_Sans} from "next/font/google";
import "./globals.css";
import { SectionProvider } from '@/src/context/SectionContext';
import NavWrapper from '@/src/components/NavBar/NavWrapper';
import { SoundProvider } from '@/src/context/SoundContext';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Carlos Naveda",
  description: "Mi espacio personal donde comparto lo que voy aprendiendo y construyendo en el mundo de la tecnología.",
  icons: {
    icon: '/images/logos/Carlos-Naveda-CN-01.png',   
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${outfit.variable} ${dmSans.variable}`}> 
        <SoundProvider> {/* Agregamos el provider del sonido */}
          <SectionProvider> {/* Agregamos el provider de secciones */}        
            <NavWrapper /> {/* Aquí llamamos a LeftBarNav solo si no estamos en el blog */}
            {children}
            <Analytics />
          </SectionProvider> 
        </SoundProvider>      
      </body> 
    </html>
  );
}
