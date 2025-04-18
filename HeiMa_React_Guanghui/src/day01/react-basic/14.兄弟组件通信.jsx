import React, {useState} from'react';

function ComponentA({onGetAName}){
    const name = 'this is ComponentA name';
    return (
        <div>
            <h2>this is component A</h2>
            <button onClick={() => onGetAName(name)}>获取消息</button>
        </div>
    )
}

function ComponentB({name}){ 
    return (
        <div>
            <h2>this is component B</h2>
            <p>{name}</p>
        </div>
    )
}

function App() {
    const [name, setName] = useState('');
    const getAName = (name) => {
        setName(name);
    }
    return (
        <div>
            <h2>this is parent component</h2>
            <ComponentA onGetAName={getAName}/>
            <ComponentB name={name}/>
        </div>
    )
}

export default App