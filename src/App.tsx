import "./App.css";
import InputField from "./Components/InputField";
import ButtonComp from "./Components/ButtonComp.tsx";
import ListItemComp from "./Components/ListItemComp.tsx";
import TextArea from "./Components/TextArea";
import {useEffect, useState} from "react";
import {BottomNavigation, BottomNavigationAction, List} from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import {AddCircleOutline, ListAltOutlined} from "@mui/icons-material";
import api from './api/tasks.tsx';

interface Task {
    id: number;
    title: string;
    body: string;
    points: number;
    done: boolean;
}

function App() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [points, setPoints] = useState<number>(0);
    const [tasks, setTasks] = useState<Array<Task>>(
        JSON.parse((localStorage.getItem("tasks") as string) || "[]")
    );


    useEffect(() => {
        handleGetAllTasks();
    }, []);

    const handleGetAllTasks = () => {
        api.get('/tasks').then(response => {
            setTasks(response.data);
            console.log(response.data);
        }).catch(error => console.log(error));
    }

    const handleAddTask = () => {
        if (description.trim() !== "") {
            api.post('/tasks',
                {
                    title: title.trim(),
                    body: description.trim(),
                    points: points,
                }).then(response => {
                setTasks(response.data);
                console.log("Log from handleAddTask");
            }).catch(error =>
                console.log(error));
            setTitle("");
            setDescription("");
            setPoints(0);
        }
    };

    const handleCheckTask = (id: number) => {
        api.patch('/tasks/' + id + '/toggle').then(response => {
            console.log(response.data);
            handleGetAllTasks();
        })
            .catch(error =>
                console.log(error));
    };

    const handleDeleteTask = (id: number) => {
        api.delete('/tasks/' + id).then(response => {
            console.log(response.data);
            console.log("Log from deleteTask");
            handleGetAllTasks();
        }).catch(error =>
            console.log(error));
    };

    return (
        <>
            <div style={{margin: "1em", marginBottom: "4em"}}>

                <form
                    onSubmit={handleAddTask}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <InputField
                        type="text"
                        label={"Title"}
                        onchange={(e) => setTitle(e.target.value)}
                        id="title"
                    />
                    <TextArea onchange={(e) => setDescription(e.target.value)}/>
                    <InputField
                        type="number"
                        label={"Points"}
                        onchange={(e) => {
                            setPoints(e.target.valueAsNumber);
                        }}
                        id="points"
                    />

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <ButtonComp
                            text="Empty list"
                            onclick={(e) => {
                                e.preventDefault();
                                setTasks([]);
                            }}
                        />
                        <ButtonComp text="Add" type="submit"/>

                    </div>
                </form>
                <List>
                    {tasks.map((item: Task) => {
                        return (
                            <ListItemComp
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                body={item.body}
                                points={item.points}
                                done={item.done}
                                style={
                                    item.done
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
            </div>

            <BottomNavigation
                showLabels
                sx={{
                    bottom: 0,
                    position: "fixed",
                    width: "100vw",
                    height: "4em",
                    alignSelf: "center",
                    margin: "0",
                    backgroundColor: "lightblue",
                }}>
                <BottomNavigationAction label="History" icon={<RestoreIcon/>}/>
                <BottomNavigationAction label="Add" icon={<AddCircleOutline/>}/>
                <BottomNavigationAction label="List" icon={<ListAltOutlined/>}/>
            </BottomNavigation>
        </>
    );
}

export default App;
