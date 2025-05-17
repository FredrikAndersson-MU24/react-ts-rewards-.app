import ButtonComp from "../Components/ButtonComp.tsx";
import api from "../api/tasks.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";
import * as React from "react";

function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("handleLogin anropad");

        if (username.trim() !== "") {
            try {
                const response = await api.post('/auth/login',
                    {
                        username: username,
                        password: password,
                    });
                console.log((response.data));
                console.log("Log from handleAddTask");
                setUsername("");
                setPassword("");
                navigate("/list");
                console.log("Log after navigate");
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (<form
        onSubmit={handleLogin}
        style={{
            display: "flex",
            flexDirection: "column",
        }}
    >
        <TextField
            sx={{marginTop: "1em"}}
            type="text"
            label={"Username"}
            variant="outlined"
            onChange={(e) =>
                setUsername(e.target.value)}
            id="username"
            name="username"
            autoFocus
            required/>

        <TextField
            sx={{marginTop: "1em"}}
            type="password"
            label={"Password"}
            variant="outlined"
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            id="password"
            name="password"
            required/>

        <div style={{display: "flex", justifyContent: "space-between"}}>

            <ButtonComp text="Login" type="submit"/>

        </div>
    </form>)
}

export default LoginPage;