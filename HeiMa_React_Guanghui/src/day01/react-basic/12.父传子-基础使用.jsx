
function Son(props){
    console.log(props);
    return (
        <div>
            this is son, {props.name}, jsx： {props.child}
        </div>
    )
}

function App() {
    const name = "this is app name";
    return (
        <div>
            <Son name={name}
                 age={18}
                 isTrue={false}
                 list={[1, 2, 3]}
                 obj={{ name: "jack" }}
                  child={<span>this is a span</span>} />
        </div>
    );
}

export default App;