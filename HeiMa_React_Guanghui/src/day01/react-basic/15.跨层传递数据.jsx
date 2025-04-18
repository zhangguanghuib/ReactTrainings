import { createContext, useContext } from "react";

const MsgContext = createContext();

function ComponentA() {
    return (
        <div style={{border: '1px solid yellow'}}>
            <h2>this is component A</h2>
            <ComponentB  />
        </div>
    );
}

function ComponentB() {
    const msg = useContext(MsgContext);
    return (
        <div style={{border: '1px solid red'}}>
            <h2>this is component B</h2>
            <p>{msg}</p>
        </div>
    );
}

function App() {
    const msg = 'this is app msg from the app component';
    return (
        <div style={{border: '1px solid blue'}}>
        <MsgContext.Provider value={msg}>
            this is App Component
            <ComponentA />
        </MsgContext.Provider>
        </div>
    );
}

export default App;