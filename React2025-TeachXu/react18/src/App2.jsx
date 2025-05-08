import { useState } from "react";
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
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setIsPending(true);
        try {
            const response = await updateData(name);
            setA(response.data.title);
            setError(null);
        } catch (err) {
            setError("Error: " + err.message);
            setA("");
        }
        setIsPending(false);
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