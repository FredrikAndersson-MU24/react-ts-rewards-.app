import "./App.css";
import InputField from "./Components/InputField";
import ButtonComp from "./Components/ButtonComp.tsx";
import ListItemComp from "./Components/ListItemComp.tsx";
import TextArea from "./Components/TextArea";
import { useEffect, useState } from "react";
import {BottomNavigation, BottomNavigationAction, List} from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';


interface Task {
    title: string;
    description: string;
    id: number;
    checked: boolean;
}

function App() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [tasks, setTasks] = useState<Array<Task>>(
        JSON.parse((localStorage.getItem("tasks") as string) || "[]")
    );
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;

    const handleAddTask = () => {
        if (description.trim() !== "") {
            setTasks((a) => [
                ...a,
                {
                    id: id,
                    title: title.trim(),
                    description: description.trim(),
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
                onSubmit={handleAddTask}
                style={{ display: "flex",
                            flexDirection: "column",}}
            >
                <InputField
                    type="text"
                    onchange={(e) => setTitle(e.target.value)}
                />
                <TextArea onchange={(e) => setDescription(e.target.value)} />
                <div>
                    <ButtonComp text="Add" type="submit" />
                    <ButtonComp
                        text="Empty list"
                        onclick={(e) => {
                            e.preventDefault();
                            setTasks([]);
                        }}
                    />
                </div>
            </form>
            <List>
                { tasks.map((item: Task) => {
                        return (
                            <ListItemComp
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
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
                    })
                }
            </List>

            <BottomNavigation
                showLabels
                sx={{bottom: 0, position: "fixed",
                    width: "100vw",
                alignSelf: "center",
                margin: "0",
                }}>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Nearby" icon={<RestoreIcon />} />
            </BottomNavigation>
        </>
    );
}

export default App;
