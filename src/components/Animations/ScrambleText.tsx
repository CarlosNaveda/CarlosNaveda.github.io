
import {useState,useEffect} from 'react';


const ScrambleText = ({textToScramble}: {textToScramble: string}) => {
    
    function generateRandomChar(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    const [showText, setShowText] = useState('');

    useEffect(() => {
        let iterations = 0;
        
        const interval = setInterval(() => {
            setShowText(
            textToScramble.split('').map((char, i) => {
                if (i < iterations) return char;
                return generateRandomChar();
            }).join('')
            );
            iterations += 1;
            if (iterations > textToScramble.length) clearInterval(interval);
        }, 80);
        
        return () => clearInterval(interval);
    }, [textToScramble]); 


    return (
        <p>{showText}</p>
    )
}

export default ScrambleText