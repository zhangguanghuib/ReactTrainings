import { useState, useTransition } from "react";
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
    const [name, setName] = useState("");
    const [a, setA] = useState("");
    const [isPending, startTransition] = useTransition(false);
    const [error, setError] = useState(null);

    const handleSubmit = () => {
        startTransition(async () => {
            try {
                const response = await updateData(name);
                console.log(response.data.title);
                setA(response.data.title);
                setError(null);
            } catch (err) {
                setError("Error: " + err.message);
                setA("");
            }
        })
    }

    return (
        <div>
            <input value = {name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSubmit} disabled={isPending}>Submit</button>
            <h1>{a}</h1>
            {error && <h1>{error}</h1>}
        </div>
    )
}

export default App;