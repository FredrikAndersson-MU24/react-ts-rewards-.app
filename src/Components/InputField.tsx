import {TextField} from "@mui/material";
import * as React from "react";

interface InputFieldProps {
    label: string;
    type: string;
    id: string
    onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField = (props: InputFieldProps) => {
    return (
        <>
            <TextField
                sx={{marginTop: "1em"}}
                type={props.type}
                label={props.label}
                variant="outlined"
                onChange={props.onchange}
                id={props.id}
                autoFocus
                required/>
        </>
    );
};

export default InputField;
