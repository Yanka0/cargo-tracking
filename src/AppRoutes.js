import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./components/home/Home";
import React from "react";
import App from "./layout/App";
import UsersTable from "./pages/users/UsersTable";
import ClientsTable from "./pages/clients/ClientsTable";
import {setAuthToken} from "./util/setAuthToken";
import {hasJWT} from "./util/authTokenPresent"

const token = localStorage.getItem("token");
if (token) {
    setAuthToken(token);
}

const ProtectedRoute = () => {
    if (!hasJWT()) {
        return <Navigate to="/login"/>
    }

    return (
        <Outlet/>
    )
};

function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route index element={<Home/>}/>

                    <Route element={<ProtectedRoute/>}>
                        <Route path="/users" element={<UsersTable/>}/>
                        <Route path="/clients" element={<ClientsTable/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
