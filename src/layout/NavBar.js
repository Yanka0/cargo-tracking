import React, {useState} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import LngBtn from "./LngBtn";
import logo from "../assets/img/logo.svg";
import {useTranslation} from "react-i18next";
import './NavBar.scss'
import Button from "../components/forms/button/Button";
import {Link, NavLink} from "react-router-dom";

const jwtExist = localStorage.getItem("token") !== null;

function NavBar() {
    const {t} = useTranslation();
    const [selectedItem, setSelectedItem] = useState(t("tables"));

    const handleDropdownSelect = (eventKey) => {
        setSelectedItem(eventKey);
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" width="70" height="70"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" justify-content-center flex-fill">
                        <Nav.Link href="/" className='link'>
                            {t("home")}
                        </Nav.Link>
                        <Nav.Link href="/#homeAbout" className='link'>
                            {t("about")}
                        </Nav.Link>
                        <Nav.Link href="/#footer" className='link'>
                            {t("contact")}
                        </Nav.Link>
                    </Nav>
                        {jwtExist &&
                            (
                                <NavDropdown
                                    title={selectedItem}
                                    id="basic-nav-dropdown"
                                    className='link'
                                    onSelect={handleDropdownSelect}
                                >
                                    <NavDropdown.Item as={NavLink} to="/users" eventKey={t("users")}>
                                        {t("users")}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/clients" eventKey={t("clients")}>
                                        {t("clients")}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/storages" eventKey={t("storages")}>
                                        {t("storages")}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/productOwners" eventKey={t("productOwners")}>
                                        {t("productOwners")}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/cars" eventKey={t("cars")}>
                                        {t("cars")}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/invoices" eventKey={t("invoices")}>
                                        {t("invoices")}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/products" eventKey={t("products")}>
                                        {t("products")}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/productsWriteOffs" eventKey={t("productsWriteOffs")}>
                                        {t("productsWriteOffs")}
                                    </NavDropdown.Item>
                                </NavDropdown>

                            )
                        }
                        <LngBtn/>

                    <Nav className="">
                        <Nav.Link as={Link} to="/login" className="form_btn" >
                            <Button name={t("logIn")} className="logIn_btn" />
                        </Nav.Link>
                        <Nav.Link className="form_btn">
                            <Button name={t("logOut")} className="success " onClick={
                                () => {
                                    localStorage.clear()
                                    window.location.href = '/'
                                }
                            }/>
                        </Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;
