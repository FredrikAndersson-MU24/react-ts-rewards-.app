import "./App.css";
import NavBar from "./NavBar.tsx";
import AddTaskPage from "./AddTaskPage.tsx";
import ListPage from "./ListPage.tsx";
import {
    BrowserRouter as Router,
    Route, Routes
} from 'react-router-dom';

function App() {


    return (
        <>

                <div className="app-container">
                    <div className="page-container">
                        <Routes>
                            <Route path="/add" element={<AddTaskPage/>}/>
                            <Route path="/" element={<ListPage/>}/>
                        </Routes>
                    </div>
                    <NavBar/>
                </div>



        </>
    );
}

export default App;
