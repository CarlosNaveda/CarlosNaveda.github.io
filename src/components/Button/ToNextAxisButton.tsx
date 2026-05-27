import {CirclePlay} from 'lucide-react';
import { useSound } from '../../hook/useSound';

const ToNextAxisButton = () => {

    const icon_size = 20;  
    //Para el sonido al presionar el botón
    const { play: playUiButtonPressed} = useSound('ui-button-pressed', '/sounds/ui-button-pressed.mp3', 0.4);    

    return (        
        <button type="button" className="toNextAxis-button text-xs md:text-2xl bg-[var(--selection)] lg:bg-[var(--no-selection)] flex flex-row items-center justify-center gap-2 font-outfit"  onClick={() => {window.open('https://www.youtube.com/@tonextaxis','_blank'); playUiButtonPressed();}}>
                Ir al Canal <CirclePlay size={icon_size}/>
        </button>
    );
 
}

export default ToNextAxisButton;