import { useEffect, useState, useRef } from "react";

function App5() {

    const [showButton, setShowButton] = useState(false);
    const buttonRef = useRef(null);
    useEffect(() => {
        if (buttonRef.current) {
            const currentButton = buttonRef.current;
            const handler = () => console.log('Button clicked');
            currentButton.addEventListener('click', handler);
            return () => { 
                console.log('Cleanup');
                currentButton.removeEventListener('click', handler);
            };
        }
    }, [showButton]);

    return <div>
        <h1>React 18</h1> 
        <button onClick={() => setShowButton(!showButton)}>Toggle Button</button>
        {showButton && <button ref={buttonRef}>Button</button>}    
    </div>
}

export default App5;