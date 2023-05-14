import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./Footer.scss";
import {useTranslation} from "react-i18next";
import finger_icon from '../assets/img/footer_finger_icon.svg'
import email_icon from '../assets/img/footer_email_icon.svg'
import phone_icon from '../assets/img/footer_phone_icon.svg'
function Footer() {
    const {t} = useTranslation();
    return (
        <section className="footer" id="footer">
            <Container>
                <Row>
                    <Col>
                        <h6 className='text-center mt-3'>{t('contacts')}</h6>
                    </Col>
                </Row>
                <Row className='contacts'>
                    <Col>
                        <div className='footer_item'>
                            <img src={phone_icon} alt="icon" width="25" height="25"/>
                            <p>{t('phoneNumber')}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='footer_item'>
                            <img src={email_icon} alt="icon" width="25" height="25"/>
                            <p>{t('companyEmail')}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='footer_item'>
                            <img src={finger_icon} alt="icon" width="25" height="25"/>
                            <p>{t('companyPlus')}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center">
                            &copy; {new Date().getFullYear()} {t('footerDesc')}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;
