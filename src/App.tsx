import "./App.css";
import InputField from "./Components/InputField";
import Button from "./Components/Button";
import { useEffect, useState } from "react";

interface Task {
    title: string;
    id: number;
}

function App() {
    const [text, setText] = useState<string>("");
    const [input, setInput] = useState<string>("");
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;

    const HandleClick = () => {
        setText(input);
    };

    const AddTask = () => {
        if (text.trim() !== "") {
            setTasks((a) => [...a, { id: id, title: text }]);
        }
    };

    // useEffect(() => {}, [input]);

    return (
        <>
            <InputField
                type="text"
                placeholder="ADD"
                onchange={(e) => setInput(e.target.value)}
            />
            <Button text="ADD" onclick={() => HandleClick()} />

            <p>{input}</p>
            <p>{text}</p>
            {/* <p>{tasks}</p> */}
        </>
    );
}

export default App;
