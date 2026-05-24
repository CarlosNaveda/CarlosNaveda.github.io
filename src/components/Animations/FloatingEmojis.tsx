import wordEmojis from '../../data/wordEmojis';
import generateDelay  from '@/src/utils/generateDelay';
import generateDistance from '@/src/utils/generateDistance';

const FloatingEmojis = ({word}: {word: string}) =>{
   return (
        <>
            {wordEmojis[word] && wordEmojis[word].map((emoji, index) => 
            <span className="floating-emoji absolute" 
                  key={index} 
                  style={{
                  '--orbit-radius': `${generateDistance(0, index)}px`,
                   '--start-angle': `${index * 120}deg`,  
                  animationDelay: `${generateDelay(0, index)}s`, 
                  animationDuration: "8s"}as React.CSSProperties}>                    
                  {emoji}
            </span>)} 
        </>        
    );   
}

export default FloatingEmojis; 