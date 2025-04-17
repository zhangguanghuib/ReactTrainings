import React, {Component} from'react'

class Child extends Component{
    render(){
        return(
            <div>child</div>
        )
    }
}

class Navbar extends Component{
    render(){
        return(
            <div>navbar
                <Child />
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
function Swiper(){
    return(
        <div>swiper</div>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
const Tabbar = () => {
    return(
        <div>tabbar</div>
    )
}

export default class App extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Swiper />
                <Tabbar />
            </div>
        )
    }
}