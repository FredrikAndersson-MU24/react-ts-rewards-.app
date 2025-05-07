import {DeleteOutline} from "@mui/icons-material";
import {Accordion, AccordionDetails, AccordionSummary, Checkbox, ListItem, Typography} from "@mui/material";
import * as React from "react";

interface ListItemProps {
    id: number;
    title: string;
    description: string;
    points: number;
    checked: boolean;
    style: React.CSSProperties | undefined;
    onchange: React.ChangeEventHandler<HTMLInputElement>;
    clickDelete: React.MouseEventHandler;
}

const ListItemComp = (props: ListItemProps) => {
    return (
        <>
            <ListItem key={props.id} sx={{display: "flex", width: "100%", elevation: 5,}}>
                <Accordion
                    sx={{
                        flex: 1,
                        marginBottom: "0.2em",
                    }}>
                    <AccordionSummary
                        aria-controls="panel2-content"
                        id="panel2-header"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography component="span"
                                    sx={{
                                        ...(props.checked
                                            ? {textDecoration: "line-through"}
                                            : {textDecoration: "none"}),
                                        flex: 1,
                                        alignSelf: "center",
                                    }}>{props.title}
                        </Typography>
                        <Typography component="span"
                                    sx={{
                                        ...(props.checked
                                            ? {textDecoration: "line-through"}
                                            : {textDecoration: "none"}),
                                        alignSelf: "center",

                                    }}>{props.points}p
                        </Typography>
                        <Checkbox
                            sx={{
                                marginLeft: "auto",
                            }}
                            checked={props.checked}
                            onChange={props.onchange}
                            onClick={e => {
                                e.stopPropagation();
                            }}
                            id={props.id.toString()}
                            size="large"
                        />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {props.description}
                        </Typography>
                        <DeleteOutline
                            onClick={props.clickDelete}
                            sx={{
                                marginTop: "1em",
                                alignSelf: "center",
                            }}
                            fontSize="large"
                        />
                    </AccordionDetails>
                </Accordion>

            </ListItem>
        </>
    );
};
export default ListItemComp;
