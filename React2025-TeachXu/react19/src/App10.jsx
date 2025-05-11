import { Suspense, use  } from "react";
import axios from "axios";

const dataPromise = axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>res.data);

function ReactDemo(){
    const data = use(dataPromise);
    console.log(data[0]);
    return <div>
        <h1>{JSON.stringify(data[0])}</h1>
    </div>;
}

function App10() {
    return (<Suspense fallback={<h1>Loading...</h1>}>
        <ReactDemo/>
    </Suspense>);
}

export default App10;
