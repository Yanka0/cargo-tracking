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
import StoragesTable from "./pages/storages/StoragesTable";
import ProductOwnersTable from "./pages/productOwners/ProductOwnersTable";
import CarsTable from "./pages/cars/CarsTable";
import InvoicesTable from "./pages/invoices/InvoicesTable";
import ProductsTable from "./pages/products/ProductsTable";
import ProductsWriteOffsTable from "./pages/productsWriteOffs/ProductsWriteOffsTable";

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
                        <Route path="/storages" element={<StoragesTable/>}/>
                        <Route path="/productOwners" element={<ProductOwnersTable/>}/>
                        <Route path="/cars" element={<CarsTable/>}/>
                        <Route path="/invoices" element={<InvoicesTable/>}/>
                        <Route path="/products" element={<ProductsTable/>}/>
                        <Route path="/productsWriteOffs" element={<ProductsWriteOffsTable/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
