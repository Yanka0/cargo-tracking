import React from "react";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import LngBtn from "../lngBtn/LngBtn";
import logo from "../../../assets/img/logo.svg";
import { useTranslation } from "react-i18next";
import './NavBar.scss'
import Button from "../button/Button";


function NavBar() {
  const { t } = useTranslation();
 ;
  return ( 
 
    
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" width="70" height="70" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink href="#home" className='link'>
              {t("home")}
            </NavLink>
            <NavLink href="#home" className='link'>
              {t("about")}
            </NavLink>
            <NavLink href="#home" className='link'>
              {t("contact")}
            </NavLink>
            <NavLink href="#home" className='link'>
              {t("service")}
            </NavLink>
            <NavLink href="#home" className='link'>
              {t("service")}
            </NavLink>
            <LngBtn />
          </Nav>{" "}
          <Nav className="forms_btns">
            <Button name={t("sign_up")} className=" signUp_btn"/>
            <Button name= {t("logIn")} className="logIn_btn"/>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
