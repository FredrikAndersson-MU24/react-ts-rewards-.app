import "./App.css";
import NavBar from "./Components/NavBar.tsx";
import AddTaskPage from "./Pages/AddTaskPage.tsx";
import ListPage from "./Pages/ListPage.tsx";
import SettingsPage from "./Pages/SettingsPage.tsx";
import HistoryPage from "./Pages/HistoryPage.tsx";
import {
    Route, Routes
} from 'react-router-dom';

function App() {


    return (
        <>
                <div className="app-container">
                    <div className="page-container">
                        <Routes>
                            <Route path="/add" element={<AddTaskPage/>}/>
                            <Route path="/settings" element={<SettingsPage/>}/>
                            <Route path="/history" element={<HistoryPage/>}/>
                            <Route path="/" element={<ListPage/>}/>
                        </Routes>
                    </div>
                    <NavBar/>
                </div>
        </>
    );
}

export default App;
