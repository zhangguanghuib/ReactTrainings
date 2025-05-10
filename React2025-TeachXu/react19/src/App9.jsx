import {useFormStatus } from "react-dom";

function Submit(){
    const { pending, data, method, action} = useFormStatus();
    console.log(pending, data?.get("message"), method, action);
    return(
        <button type="submit" disabled={pending}>
            {pending ? "Sending..." : "Send"}:{data?.get("message")}
        </button>
    );
}

function Form({action}) {
    return(
        <form action={action}>
            <input type="text" name="message" placeholder="你好！" />
            <Submit/>
        </form>
    );
}

async function submitForm() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
}

function App() {
    return (
        <Form action={submitForm} />
    );
}

export default App;