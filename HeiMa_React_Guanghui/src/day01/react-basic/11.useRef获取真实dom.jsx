import { useRef } from "react";

function App() {
    const inputRef = useRef(null);
    const showDom = () => {
        console.dir(inputRef.current); // 直接获取DOM元素
        console.log(inputRef.current.value); // 获取DOM元素的值
    }
    return (
        <div>
            <input ref={inputRef} type='text' />
            <button onClick={showDom}>获取DOM元素</button>
        </div>
    );
}

export default App;