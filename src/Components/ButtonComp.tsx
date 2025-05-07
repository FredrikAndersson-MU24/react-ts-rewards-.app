import { ReactEventHandler } from "react";
import { Button } from "@mui/material";

export interface ButtonProps {
    text: string;
    onclick?: ReactEventHandler;
    type?: "submit" | undefined;
}

const ButtonComp = (props: ButtonProps) => {
    return (
        <>
            <Button
                sx={{margin: "1em"}}
                variant="outlined"
                onClick={props.onclick}
                type={props.type}>{props.text}</Button>
        </>
    );
};

export default ButtonComp;
