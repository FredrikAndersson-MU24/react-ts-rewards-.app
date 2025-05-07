import {TextField} from "@mui/material";
import * as React from "react";

interface InputFieldProps {
    type: string;
    onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField = (props: InputFieldProps) => {
    return (
        <>
            <TextField label="Title" variant="outlined"
                       onChange={props.onchange}
                       id="title"
                       required
                       autoFocus/>
        </>
    );
};

export default InputField;
