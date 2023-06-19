import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import React from "react";
import NavBar from "./NavBar";

function App() {
    return (
        <div id="main-wrapper">
            <NavBar/>
            <div id="main-controller">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;