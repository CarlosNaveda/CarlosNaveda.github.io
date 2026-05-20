import { useState } from 'react';

const ToNextAxisButton = () => {

    const [stateButton, setStateButton] = useState(false);
    return (
        <button type="button" className="toNextAxis-button text-xl md:text-2xl"  onClick={() => window.open('https://www.youtube.com/@tonextaxis', '_blank')} onMouseEnter={() => setStateButton(true)} onMouseLeave={() => setStateButton(false)} style={{backgroundColor: stateButton ? 'var(--selection)' : 'var(--no-selection)'}}>
                Ver Canal 🎥
        </button>
    );

}

export default ToNextAxisButton;