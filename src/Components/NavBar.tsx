import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import {AddCircleOutline, ListAltOutlined, Settings} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import * as React from "react";

function NavBar() {
    const [value, setValue] = React.useState("/");

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const navigate = useNavigate();
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={handleChange}
            sx={{
                bottom: 0,
                position: "fixed",
                width: "100vw",
                height: "4em",
                alignSelf: "center",
                margin: "0",
                backgroundColor: "palegoldenrod",
            }}>
            <BottomNavigationAction onClick={() => navigate("/settings")} label="Settings" icon={<Settings/>}/>
            <BottomNavigationAction  onClick={() => navigate("/history")} label="History" icon={<RestoreIcon/>}/>
            <BottomNavigationAction onClick={() => navigate("/add")} label="Add" icon={<AddCircleOutline/>}/>
            <BottomNavigationAction onClick={() => navigate("/list")} label="List" icon={<ListAltOutlined/>}/>

        </BottomNavigation>
    )
}

export default NavBar;