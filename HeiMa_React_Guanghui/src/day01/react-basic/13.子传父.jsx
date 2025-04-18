import { useState } from 'react'

function Son({onGetSonMsg}){
    const sonMsg = 'this is son msg';
    return (
        <div>
            <button onClick={() => onGetSonMsg(sonMsg)}>获取子组件消息</button>
        </div>
    )
}

function App() {
    const [msg, setMsg] = useState('');
    const getSonMsg = (msg) => {
        setMsg(msg);
    }
    return (
        <div>
            <h2>父组件</h2>
            <p>this message from son: {msg}</p>
            <Son onGetSonMsg={getSonMsg}/>
        </div>
    )
}

export default App