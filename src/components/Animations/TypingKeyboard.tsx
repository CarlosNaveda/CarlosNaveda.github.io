import { useState, useEffect } from 'react';
import Image from 'next/image';
  

const frames = Array.from({ length: 14 }, (_, i) =>
  i === 0
    ? '/images/animate/logoTeclado/LogoTeclado.png'
    : `/images/animate/logoTeclado/LogoTeclado-${i}.png`
  );

  function TypingKeyboard({ onClick, className }: { onClick?: () => void; className?: string }) {
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentFrame(prev => (prev + 1) % frames.length);
      }, 100);
      return () => clearInterval(interval);
    }, []);

        return (      
            <Image
              className={className} 
              src={frames[currentFrame]}
              alt="Logo teclado animado"
              width={50}
              height={50}
              onClick={onClick}          
            />
        ); 
} 

export default TypingKeyboard;