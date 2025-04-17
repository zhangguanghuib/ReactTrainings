import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  render() {
    const myname = 'kerwin';
    const obj = {
        backgroundColor:'red',
        fontSize:'30px',
    }
    return (
      <div>
        {10+20}-{myname}
        <div style={obj}>11111111111111111</div>
        <div style={{backgroundColor:'blue',fontSize:'20px'}}>2222222222222222</div>
        <div className='active'>33333333333333</div>
        <div id='myapp'>4444444444444444</div>
        <label htmlFor='username'>用户名</label>
        <input type='text' id='username' name='username' placeholder='请输入用户名'/>
      </div>
    )
  }
}
