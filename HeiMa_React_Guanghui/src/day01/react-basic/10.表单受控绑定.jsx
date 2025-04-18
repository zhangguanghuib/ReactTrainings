import {useState} from 'react';
function App() {
    const [value, setValue] = useState('');
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)}  type='text'/>
            <p>{value}</p>
        </div>
    );
}

export default App;