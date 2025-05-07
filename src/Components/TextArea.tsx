import {TextField} from "@mui/material";
import * as React from "react";

type TextAreaProps = {
    onchange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea = (props: TextAreaProps) => {
    return (
        <>
            <TextField label="Description" variant="outlined" multiline rows={4}
                       onChange={props.onchange}
                       id="text"
                       required
                       className="text-area"/>
        </>
    );
};

export default TextArea;
