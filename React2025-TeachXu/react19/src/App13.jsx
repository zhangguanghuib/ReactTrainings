import { useState } from "react";

function App13() {
    const [showButton, setShowButton] = useState(false);
    const setRef = (ref)=>{
        const handler = () => console.log('Button clicked');
        ref?.addEventListener('click', handler);
        return () => { 
            console.log('Cleanup');
            ref?.removeEventListener('click', handler);
        };
    }

    return <div>
        <h1>React 19</h1> 
        <button onClick={() => setShowButton(!showButton)}>Toggle Button</button>
        {showButton && <button ref={setRef}>Button</button>}    
    </div>
}

export default App13;