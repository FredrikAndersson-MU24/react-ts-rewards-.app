interface InputFieldProps {
    type: string;
    onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField = (props: InputFieldProps) => {
    return (
        <>
            <label htmlFor="title" className="input-label">
                Title
            </label>
            <input
                id="title"
                type={props.type}
                onChange={props.onchange}
                className="text-input"
                autoFocus
                required
            />
        </>
    );
};

export default InputField;
