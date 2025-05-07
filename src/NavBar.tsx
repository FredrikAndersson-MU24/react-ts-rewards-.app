import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import {AddCircleOutline, ListAltOutlined} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    return (
        <BottomNavigation
            showLabels
            sx={{
                bottom: 0,
                position: "fixed",
                width: "100vw",
                height: "4em",
                alignSelf: "center",
                margin: "0",
                backgroundColor: "lightblue",
            }}>
            <BottomNavigationAction  label="History" icon={<RestoreIcon/>}/>
            <BottomNavigationAction onClick={() => navigate("/add")} label="Add" icon={<AddCircleOutline/>}/>
            <BottomNavigationAction onClick={() => navigate("/")} label="List" icon={<ListAltOutlined/>}/>
        </BottomNavigation>
    )
}

export default NavBar;