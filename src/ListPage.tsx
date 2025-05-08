import {CircularProgress, List, Typography} from "@mui/material";
import ListItemComp from "./Components/ListItemComp.tsx";
import {useEffect, useState} from "react";
import api from "./api/tasks.tsx";

interface Task {
    id: number;
    title: string;
    body: string;
    points: number;
    done: boolean;
}


function ListPage() {
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingError, setLoadingError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        setLoadingError(false);
        setLoading(true);
        handleGetAllTasks();
        setTimeout(
            () => {
                setLoading(false);
            }, 800)


    }, []);

    const handleGetAllTasks = () => {
        api.get('/tasks').then(response => {
            setTasks(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
            setLoadingError(true);
            setErrorMessage(error.message);
        });
    }

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
        <>{loadingError ? (<Typography sx={{justifySelf: "center"}}>{errorMessage}</Typography>) : (loading ? (
            <CircularProgress size={"5em"} sx={{display: "flex", justifySelf: "center", marginTop: "20vh"}}/>) : (
            tasks.length === 0 ? (<Typography sx={{justifySelf: "center"}}>No tasks</Typography>) :
                (<List>
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
                </List>)
        ))}
        </>
    )
}

export default ListPage;