import { useState, useEffect } from 'react';
import Image from 'next/image';
import {useSound} from '../../hook/useSound';
  

const frames = Array.from({ length: 14 }, (_, i) =>
  i === 0
    ? '/images/animate/logoTeclado/LogoTeclado.png'
    : `/images/animate/logoTeclado/LogoTeclado-${i}.png`
  );


  function TypingKeyboard({ onClick, className }: { onClick?: () => void; className?: string }) {

    const [currentFrame, setCurrentFrame] = useState(0);
    
    //Para el sonido cuando hacen click en la imagen
    const { play: playUiInterface} = useSound('ui-interface', '/sounds/ui-interface.mp3', 0.4);    

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
              onClick={() => {onClick?.(); playUiInterface(); }}              
            />
        ); 
} 

export default TypingKeyboard;