import { useState } from 'react';

const ToNextAxisButton = () => {

    // const [stateButton, setStateButton] = useState(false); 
    return (
        <button type="button" className="toNextAxis-button text-xs md:text-2xl bg-[var(--selection)] md:bg-[var(--no-selection)]"  onClick={() => window.open('https://www.youtube.com/@tonextaxis', '_blank')}>
                Ver Canal 🎥 
        </button>
    );

}

export default ToNextAxisButton;