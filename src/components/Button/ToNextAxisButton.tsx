import {CirclePlay} from 'lucide-react';

const ToNextAxisButton = () => {

    const icon_size = 20;  

    return (        
        <button type="button" className="toNextAxis-button text-xs md:text-2xl bg-[var(--selection)] lg:bg-[var(--no-selection)] flex flex-row items-center justify-center gap-2 font-outfit"  onClick={() => window.open('https://www.youtube.com/@tonextaxis', '_blank')}>
                Ir al Canal <CirclePlay size={icon_size}/>
        </button>
    );

}

export default ToNextAxisButton;