import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./Footer.scss";
import phoneIcon from '../../../assets/img/footer_phone_icon.svg'
import emailIcon from '../../../assets/img/footer_email_icon.svg'
import likeIcon from '../../../assets/img/footer_like_icon.svg'
import {useTranslation} from "react-i18next";
function Footer() {
    const {t} = useTranslation();
    return (<section className="footer">
        <Container>
            <Row>
                <Col>
                    <h6 className='text-center mt-3'>{t('contacts')}</h6>
                </Col>
            </Row>
            <Row className='contacts'>
                <Col>
                    <div className='footer_item'>
                        <img className='phoneIcon' src={phoneIcon} alt="" width="30" height="30"/>
                        <p>{t('phoneNumber')}</p>
                    </div>
                </Col>
                <Col>
                    <div className='footer_item'>
                        <img src={emailIcon} alt="" width="30" height="30"/>
                        <p>{t('companyEmail')}</p>
                    </div>
                </Col>
                <Col>
                 <div className='footer_item'>
                    <img src={likeIcon} alt="" width="30" height="30"/>
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
    </section>);
}

export default Footer;
