import React from 'react';
import {useTranslation} from "react-i18next";
import mapImg from "../../../assets/img/mapExample.png";
import './PriceExample.scss'
import {Col, Container, Row} from "react-bootstrap";
import PriceCalculator from "../priceCalculator/PriceCalculator";


function PriceExample(props) {
    const {t} = useTranslation();

    return (
        <div className=" mt-4 priceExample">
            <Container className='priceExampleDesc'>
                <Row>
                    <Col>
                        <div className='priceExampleCard mt-4 mb-4'>
                            <div className="p-3"><img src={mapImg} alt="map" className='map'/>
                                <p className="h6 pt-3">{t('priceExampleTitle')}</p>
                                <p>{t('allPriceDesc')}</p>
                                <p>{t('fuelPrice')}</p>
                                <p>{t('moverPrice')}</p>
                                <p>{t('rentalPrice')}</p>
                                <p>{t('allPrice')}</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <PriceCalculator/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PriceExample;