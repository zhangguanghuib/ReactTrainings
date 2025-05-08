import { useState, useActionState } from "react";
import axios from "axios";

function updateData(name) {
    return axios({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
            title: name,
        },
    })
}
function App() {

}

export default App;