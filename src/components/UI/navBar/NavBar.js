import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import LngBtn from "../lngBtn/LngBtn";
import logo from "../../../assets/img/logo.svg";
import {useTranslation} from "react-i18next";
import './NavBar.scss'
import Button from "../button/Button";
import { Link } from "react-router-dom";

function NavBar({children}) {
    const {t} = useTranslation();
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="logo" width="70" height="70"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className='link'>
                            {t("home")}
                        </Nav.Link>
                        <Nav.Link href="#home" className='link'>
                            {t("about")}
                        </Nav.Link>
                        <Nav.Link href="#home" className='link'>
                            {t("contact")}
                        </Nav.Link>
                        <Nav.Link href="#home" className='link'>
                            {t("service")}
                        </Nav.Link>
                        <Nav.Link href="#home" className='link'>
                            {t("service")}
                        </Nav.Link>
                        <LngBtn/>
                    </Nav>
                    <Nav className="forms_btns">
                        <Button name={t("sign_up")} className=" signUp_btn"/>
                        <Nav.Link as={Link} to="/login"> <Button name={t("logIn")} className="logIn_btn" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;
