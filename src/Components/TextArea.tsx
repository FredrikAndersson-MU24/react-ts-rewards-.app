type TextAreaProps = {
    onchange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea = (props: TextAreaProps) => {
    return (
        <>
            <label htmlFor="description" className="input-label">
                Description
            </label>
            <textarea
                onChange={props.onchange}
                id="text"
                required
                className="text-area"
            ></textarea>
        </>
    );
};

export default TextArea;
