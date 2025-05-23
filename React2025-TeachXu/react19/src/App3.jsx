/* eslint-disable no-unused-vars */
import { useState, useActionState, startTransition } from "react";
import axios from "axios";

function updateData(name) {
  return axios({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      title: name,
    },
  });
}
function App() {
  const [name, setName] = useState("");
  const [ state, handleSubmit, isPending ] = useActionState(
    async (preState, name) => {
      console.log("上一次的值", preState);
      try {
        const response = await updateData(name);
        return response.data.title;
      } catch (error) {
        return error.message;
      }
    }, 8888888888);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button disabled={isPending} onClick={() => {
          startTransition(() => {
            handleSubmit(name);
          });
        }}>
        Submit
      </button>
      <h1>{state}</h1>
    </div>
  );
}

export default App;
