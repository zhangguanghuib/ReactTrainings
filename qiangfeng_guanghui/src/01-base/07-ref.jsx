import React, { Component } from 'react'

export default class App extends Component {
    a = 100;
    myRef = React.createRef();
  render() {
    return (
      <div>
        <input ref={this.myRef}></input>
        <button onClick={() => {
          console.log("click1", this.myRef.current.value, "如果处理逻辑过多，不推荐这种写法");  
        }}>add1</button>
        <button onClick={this.handleClick2}>add2</button>
      </div>
    )
  }

  handleClick2 = () => {
    console.log("click2", this.myRef.current.value);
  }
}
