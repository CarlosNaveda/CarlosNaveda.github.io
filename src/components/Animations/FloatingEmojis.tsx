import wordEmojis from '../../data/wordEmojis';
import generateDelay  from '@/src/utils/generateDelay';
import generateDistance from '@/src/utils/generateDistance';
import Image from 'next/image';
import {useIsDesktop} from '../../Hook/useIsDesktop';
const FloatingEmojis = ({word}: {word: string}) =>{

    const icon_size = 20;
    const isDesktop = useIsDesktop();    
    

   return (
        <>
            {wordEmojis[word] && wordEmojis[word].map((emoji, index) =>                       
            <Image className="floating-emoji absolute w-[20] h-[20] md:w-[30] md:h-[30] lg:w-[40] lg:h-[40]" 
                  key={index} 
                  src={emoji}
                  alt={word}
                  width={icon_size} height={icon_size} 
                  style={{
                  '--orbit-radius': `${generateDistance(0, index,isDesktop)}px`,
                   '--start-angle': `${index * 120}deg`,  
                  animationDelay: `${generateDelay(0, index)}s`, 
                  animationDuration: "8s"}as React.CSSProperties}>                    
            </Image>)}  
        </>        
    );   
}

export default FloatingEmojis; 