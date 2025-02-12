import { DeleteOutline } from "@mui/icons-material";
interface ListItemProps {
    id: number;
    title: string;
    description: string;
    checked: boolean;
    style: React.CSSProperties | undefined;
    onchange: React.ChangeEventHandler<HTMLInputElement>;
    clickDelete: React.MouseEventHandler;
}
const ListItem = (props: ListItemProps) => {
    return (
        <>
            <li key={props.id}>
                <details className="details" name="details">
                    <summary
                        className="details-summary"
                        style={
                            props.checked
                                ? { textDecoration: "line-through" }
                                : { textDecoration: "none" }
                        }
                    >
                        {props.title}
                    </summary>
                    <p>{props.description}</p>

                    <DeleteOutline
                        className="button-trash"
                        onClick={props.clickDelete}
                    />
                </details>
                <input
                    type="checkbox"
                    id={props.id.toString()}
                    checked={props.checked}
                    onChange={props.onchange}
                />
            </li>
        </>
    );
};
export default ListItem;
