import ButtonComp from "../Components/ButtonComp.tsx";
import api from "../api/tasks.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";
import * as React from "react";

function AddTaskPage() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [points, setPoints] = useState<number>(0);
    const navigate = useNavigate();

    const handleAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("handleAddTask anropad");

        if (description.trim() !== "") {
            try {
                const response = await api.post('/tasks',
                    {
                        title: title.trim(),
                        body: description.trim(),
                        points: points,
                    });
                console.log((response.data));
                console.log("Log from handleAddTask");
                setTitle("");
                setDescription("");
                setPoints(0);
                navigate("/list");
                console.log("Log after navigate");
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (<form
        onSubmit={handleAddTask}
        style={{
            display: "flex",
            flexDirection: "column",
        }}
    >
        <TextField
            sx={{marginTop: "1em"}}
            type="text"
            label={"Title"}
            variant="outlined"
            onChange={(e) =>
                setTitle(e.target.value)}
            id="title"
            name="title"
            autoFocus
            required/>
        <TextField
            sx={{marginTop: "1em"}}
            label="Description"
            variant="outlined"
            multiline rows={4}
            onChange={(e) =>
                setDescription(e.target.value)}
            id="body"
            name="body"
            required/>
        <TextField
            sx={{marginTop: "1em"}}
            type="number"
            label={"Points"}
            variant="outlined"
            onChange={(e) => {
                setPoints(Number(e.target.value));
            }}
            id="points"
            name="points"
            required/>

        <div style={{display: "flex", justifyContent: "space-between"}}>
            <ButtonComp
                text="Empty list"
                onclick={(e) => {
                    e.preventDefault();
                }}
            />
            <ButtonComp text="Add" type="submit"/>

        </div>
    </form>)
}

export default AddTaskPage;