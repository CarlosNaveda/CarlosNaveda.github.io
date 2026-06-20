import {CirclePlay} from 'lucide-react';
import { useSound } from '@/src/hook/useSound';

const ToNextAxisButton = () => {

    //Para el sonido al presionar el botón
    const { play: playUiButtonPressed} = useSound('ui-button-pressed', '/sounds/ui-button-pressed.mp3', 0.4);

    return (
        <button type="button" className="toNextAxis-button text-xs sm:text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl bg-[var(--selection)] lg:bg-[var(--no-selection)] flex flex-row items-center justify-center gap-2 font-outfit"  onClick={() => {window.open('https://www.youtube.com/@tonextaxis','_blank'); playUiButtonPressed();}}>
                Ir al Canal <CirclePlay className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
        </button>
    );
 
}

export default ToNextAxisButton;