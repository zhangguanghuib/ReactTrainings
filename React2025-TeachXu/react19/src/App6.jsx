import { useActionState } from "react";
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
    const [state, handleSubmit, isPending] = useActionState(async (preState, formData) => {
      console.log("上一次的值", preState)
      console.log("表单参数", formData.get("name2"))
      try {
        const res = await updateData(formData.get("name2"))
        return res.data.title
      } catch (e) {
        return e.message
      }
    }, 888888888888)
  
    return <div>
      <form action={handleSubmit}>
        <input name="name2" />
        <button disabled={isPending} type="submit">提交</button>
      </form>
      <h1>{state}</h1>
    </div>
  }
  
  export default App
  