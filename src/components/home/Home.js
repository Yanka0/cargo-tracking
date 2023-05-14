import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "../forms/button/Button";
import "./Home.scss";
import {useTranslation} from "react-i18next";
import TruckingCard from "./truckingCards/TruckingCard";
import BusinessRules from "./businessRules/BusinessRules";

function Home() {
    const {t} = useTranslation();
    return (
        <div>
            <section className="home" id="homeAbout">
                <Container>
                    <Row xs={2} md={2} lg={2}>
                        <Col>
                            <p className="text-white homeTitle">{t("homeTitle")}</p>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} lg={2}>
                        <Col>
                            <p className="text-white  pb-3 ">{t("homeDesc")}</p>
                        </Col>
                    </Row>
                    <Button name={t("orderNow")} className="homeBtn"/>
                </Container>
            </section>
            <section className="allTruckingCards">
                <TruckingCard/>
                <BusinessRules/>
            </section>
        </div>
    );
}

export default Home;
