import "./App.css";
import NavBar from "./NavBar.tsx";
import AddTask from "./AddTask.tsx";
import ListPage from "./ListPage.tsx";
import {Route, Routes} from 'react-router-dom';

function App() {


    return (
        <>
            <Routes>
                <Route path="/add" element={<AddTask/>} />
                <Route path="/" element={<ListPage/>} />
            </Routes>
            <NavBar/>


        </>
    );
}

export default App;
