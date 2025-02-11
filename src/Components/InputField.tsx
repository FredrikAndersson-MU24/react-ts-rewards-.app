import React, { ReactEventHandler } from "react";

interface InputFieldProps {
    type: string;
    placeholder: string;
    onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField = (props: InputFieldProps) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onchange}
        />
    );
};

export default InputField;
