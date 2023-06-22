import React, {useState} from 'react';
import Table from "../../tables/Table";
import {useTranslation} from "react-i18next";
import Title from "../../typography/Title";
import {Col, Container, Row} from "react-bootstrap";
import './Price.scss'


function Price(props) {

    const {t} = useTranslation();
    const [prices, setPrices] = useState([
        {
            service: t('boxTruck'),
            price: t('boxTruckPrice'),
            additionalPrice: t('boxTruckAdditionalPrice'),
        },
        {
            service: t('openBodyTruck'),
            price: t('openBodyTruckPrice'),
            additionalPrice: t('openBodyTruckAdditionalPrice'),
        },
        {
            service: t('tankTruck'),
            price: t('tankTruckPrice'),
            additionalPrice: t('tankTruckAdditionalPrice'),
        },
        {
            service: t('refrigerator'),
            price: t('refrigeratorPrice'),
            additionalPrice: t('refrigeratorAdditionalPrice'),
        }, {
            service: t('moversTitle'),
            price: t('moversPrice'),
            additionalPrice: t('moversAdditionalPrice'),
        }
    ]);

    return (
        <Container className="pt-5">
            <Title name={t("priceTitle")}/>
            <div className="notes pt-4">
                <Row>
                    <Col>
                        <h6 className='text-center'>{t('note')}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='text-center h6 '>{t('minOrder')}</p>
                    </Col>
                    <Col>
                        <p className='text-center h6 '>{t('orderPrice')}</p>
                    </Col>
                    <Col>
                        <p className='text-center h6'>{t('estimatePrice')}</p>
                    </Col>
                </Row>
            </div>
            <div className="table">
                <Table
                    columns={[
                        {
                            name: t('service'),
                            renderer: (pricesData) => pricesData.service,
                        },
                        {
                            name: t('priceInMinsk'),
                            renderer: (pricesData) => pricesData.price,
                        }, {
                            name: t('priceInBelarus'),
                            renderer: (pricesData) => pricesData.additionalPrice,
                        },
                    ]}
                    rows={prices}
                />
            </div>

        </Container>
    );

}

export default Price;