import Carousel from "react-bootstrap/Carousel";
import BusinessRulesImg from "../../../assets/img/businessRules.jpg";
import {useTranslation} from "react-i18next";
import "./BusinessRules.scss";
import Title from "../../UI/title/Title";

function BusinessRules() {
    const {t} = useTranslation();
    return (
        <div className="pt-5">
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src={BusinessRulesImg}/>
                    <Carousel.Caption>
                        <Title name={t("businessRules")}/>
                        <p>{t("businessRuleOne")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={BusinessRulesImg}/>
                    <Carousel.Caption>
                        <Title name={t("businessRules")}/>
                        <p>{t("businessRuleTwo")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={BusinessRulesImg}/>
                    <Carousel.Caption>
                        <Title name={t("businessRules")}/>
                        <p>{t("businessRuleThree")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={BusinessRulesImg}/>
                    <Carousel.Caption>
                        <Title name={t("businessRules")}/>
                        <p>{t("businessRuleFour")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={BusinessRulesImg}/>
                    <Carousel.Caption>
                        <Title name={t("businessRules")}/>
                        <p>{t("businessRuleFive")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={BusinessRulesImg}/>
                    <Carousel.Caption>
                        <Title name={t("businessRules")}/>
                        <p>{t("businessRuleSix")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={BusinessRulesImg}/>
                    <Carousel.Caption>
                        <Title name={t("businessRules")}/>
                        <p>{t("businessRuleSeven")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default BusinessRules;
