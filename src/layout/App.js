import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import React from "react";
import NavBar from "./NavBar";
import StoragesTable from "../pages/storages/StoragesTable";
import ProductOwnersTable from "../pages/productOwners/ProductOwnersTable";
import UsersTable from "../pages/users/UsersTable";
import CarsTable from "../pages/cars/CarsTable";
import InvoicesTable from "../pages/invoices/InvoicesTable";
import ProductsTable from "../pages/products/ProductsTable";
import ProductsWriteOffsTable from "../pages/productsWriteOffs/ProductsWriteOffsTable";

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