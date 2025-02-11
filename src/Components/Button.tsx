import { ReactEventHandler } from "react";

export interface ButtonProps {
    text: string;
    onclick: ReactEventHandler;
}

const Button = (props: ButtonProps) => {
    return <button onClick={props.onclick}>{props.text}</button>;
};

export default Button;
