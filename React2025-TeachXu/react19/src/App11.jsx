import { useRef, forwardRef } from "react";

function App3() {
  const inputRef = useRef(null);

  const focusInput = () => {
    console.log(inputRef.current);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>react 18</h1>
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

const MyInput = (props) => {
  return (
    <>
      <h2>我是子组件</h2>
      <input type="text" ref={props.ref}></input>
    </>
  );
};

export default App3;
