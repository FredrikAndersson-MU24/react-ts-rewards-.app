import { ReactEventHandler } from "react";

export interface ButtonProps {
    text: string;
    onclick?: ReactEventHandler;
    type?: "submit" | undefined;
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onclick} type={props.type}>
            {props.text}
        </button>
    );
};

export default Button;
