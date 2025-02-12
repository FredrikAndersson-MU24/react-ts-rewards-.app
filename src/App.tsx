import "./App.css";
import InputField from "./Components/InputField";
import Button from "./Components/Button";
import List from "./Components/List";
import ListItem from "./Components/ListItem";
import TextArea from "./Components/TextArea";
import { useEffect, useState } from "react";

interface Task {
    title: string;
    id: number;
}

function App() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [tasks, setTasks] = useState<Array<Task>>(
        JSON.parse((localStorage.getItem("tasks") as string) || "[]")
    );
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const [showHide, setShowHide] = useState<boolean>(false);

    const handleAddTask = () => {
        if (description.trim() !== "") {
            setTasks((a) => [
                ...a,
                {
                    id: id,
                    title: title.trim(),
                    text: description.trim(),
                    checked: false,
                },
            ]);
        }
    };

    const handleCheckTask = (id: number) => {
        const tempArray = tasks.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setTasks(tempArray);
    };

    const handleDeleteTask = (id: number) => {
        const tempArray = tasks.filter((item) => Number(item.id) !== id);
        setTasks(tempArray);
    };

    // Save to local storage
    useEffect(() => {
        if (tasks) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    return (
        <>
            <form
                className="input-card"
                // style={showHide ? { display: "flex" } : { display: "none" }}
                onSubmit={handleAddTask}
            >
                <InputField
                    type="text"
                    onchange={(e) => setTitle(e.target.value)}
                />
                <TextArea onchange={(e) => setDescription(e.target.value)} />
                <div className="button-wrapper">
                    <Button text="+ Add" type="submit" />
                    <Button
                        text="Empty list"
                        onclick={(e) => {
                            e.preventDefault(), setTasks([]);
                        }}
                    />
                </div>
            </form>
            <List
                li={tasks.map((item: any) => {
                    return (
                        <ListItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.text}
                            checked={item.checked}
                            style={
                                item.checked
                                    ? {
                                          textDecoration: "line-through",
                                          color: "gray",
                                      }
                                    : undefined
                            }
                            onchange={() => handleCheckTask(item.id)}
                            clickDelete={() => handleDeleteTask(item.id)}
                        />
                    );
                })}
            />
        </>
    );
}

export default App;
