import React from "react";
import {Card, CardGroup, Container} from "react-bootstrap";
import "./TruckingCard.scss";
import truckCard from "../../../assets/img/truck_card.svg";
import truckCard2 from "../../../assets/img/truck_card2.svg";
import truckCard3 from "../../../assets/img/truck_card3.svg";
import truckCard4 from "../../../assets/img/truck_card4.svg";
import {useTranslation} from "react-i18next";
import Title from "../../typography/Title";

function TruckingCard() {
    const {t} = useTranslation();
    return (
        <Container className="pt-5 pb-5">
            <Title name={t("carPark")}/>
            <CardGroup>
                <Card style={{width: "18rem"}} className="text-center">
                    <img
                        src={truckCard}
                        alt=""
                        width="70px"
                        height="70px"
                        className="truckCard"
                    />
                    <Card.Body>
                        <Card.Title>{t("boxTruck")}</Card.Title>
                        <button>{t("orderNow")}</button>
                    </Card.Body>
                </Card>
                <Card style={{width: "18rem"}} className="text-center">
                    <img
                        src={truckCard2}
                        alt=""
                        width="70px"
                        height="70px"
                        className="truckCard"
                    />
                    <Card.Body>
                        <Card.Title>{t("openBodyTruck")}</Card.Title>
                        <button>{t("orderNow")}</button>
                    </Card.Body>
                </Card>
                <Card style={{width: "18rem"}} className="text-center">
                    <img
                        src={truckCard3}
                        alt=""
                        width="70px"
                        height="70px"
                        className="truckCard"
                    />
                    <Card.Body>
                        <Card.Title>{t("tankTruck")}</Card.Title>
                        <button>{t("orderNow")}</button>
                    </Card.Body>
                </Card>
                <Card style={{width: "18rem"}} className="text-center">
                    <img
                        src={truckCard4}
                        alt=""
                        width="70px"
                        height="70px"
                        className="truckCard"
                    />
                    <Card.Body>
                        <Card.Title>{t("refrigerator")}</Card.Title>
                        <button>{t("orderNow")}</button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
}

export default TruckingCard;
