import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";
function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col>
            <h3>Навигация</h3>
            <ul className="footer-nav">
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/services">Услуги</a>
              </li>
              <li>
                <a href="/about">О нас</a>
              </li>
              <li>
                <a href="/contact">Контакты</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h3>Контакты</h3>
            <p>+375445959282</p>
            <p>cargo_transportation@gmail.com</p>
            <p>Круглосуточно, без выходных</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} CargoTransportation.by - Выполнение
              погрузочно-разгрузочных работ.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
