import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import LngBtn from "./LngBtn";
import logo from "../assets/img/logo.svg";
import {useTranslation} from "react-i18next";
import './NavBar.scss'
import Button from "../components/forms/button/Button";
import {Link} from "react-router-dom";

const jwtExist = localStorage.getItem("token") !== null;

function NavBar() {
    const {t} = useTranslation();

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
                    <Nav className="mx-auto">
                        <Nav.Link href="/" className='link'>
                            {t("home")}
                        </Nav.Link>
                        <Nav.Link href="/#homeAbout" className='link'>
                            {t("about")}
                        </Nav.Link>
                        <Nav.Link href="/#footer" className='link'>
                            {t("contact")}
                        </Nav.Link>
                        {jwtExist &&
                            (
                                <>
                                    <Nav.Link href="/users" className='link'>
                                        {t("users")}
                                    </Nav.Link>
                                    <Nav.Link href="/clients" className='link'>
                                        {t("clients")}
                                    </Nav.Link>
                                    <Nav.Link href="/storages" className='link'>
                                        {t("storages")}
                                    </Nav.Link>
                                    <Nav.Link href="/productOwners" className='link'>
                                        {t("productOwners")}
                                    </Nav.Link>
                                    <Nav.Link href="/cars" className='link'>
                                        {t("cars")}
                                    </Nav.Link>
                                    <Nav.Link href="/invoices" className='link'>
                                        {t("invoices")}
                                    </Nav.Link>
                                    <Nav.Link href="/products" className='link'>
                                        {t("products")}
                                    </Nav.Link>
                                    <Nav.Link href="/productsWriteOffs" className='link'>
                                        {t("productsWriteOffs")}
                                    </Nav.Link>
                                </>
                            )
                        }
                        <LngBtn/>
                    </Nav>
                    <Nav className="forms_btns">
                        <Nav.Link as={Link} to="/login">
                            <Button name={t("logIn")} className="logIn_btn"/>
                        </Nav.Link>
                        <Nav.Link>
                            <Button name={t("logOut")} className="success" onClick={
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
