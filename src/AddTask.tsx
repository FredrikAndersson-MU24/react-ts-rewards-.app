import InputField from "./Components/InputField";
import TextArea from "./Components/TextArea.tsx";
import ButtonComp from "./Components/ButtonComp.tsx";
import api from "./api/tasks.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function AddTask() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [points, setPoints] = useState<number>(0);
    const navigate = useNavigate();

    const handleAddTask = () => {
        if (description.trim() !== "") {
            api.post('/tasks',
                {
                    title: title.trim(),
                    body: description.trim(),
                    points: points,
                }).then(response => {
                console.log((response.data));
                console.log("Log from handleAddTask");
            }).catch(error =>
                console.log(error));
            setTitle("");
            setDescription("");
            setPoints(0);
            navigate("/");
        }
    };
    return (<form
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
                }}
            />
            <ButtonComp text="Add" type="submit"/>

        </div>
    </form>)
}

export default AddTask;