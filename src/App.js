import NavBar from './components/UI/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/allForms/forms/table/LogIn";
import Home from "./components/home/Home";

function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/login" element={<LogIn />}> </Route>
            </Routes>

        </>
    );
}

export default App;
