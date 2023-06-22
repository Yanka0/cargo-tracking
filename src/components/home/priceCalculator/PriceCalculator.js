import React, {useState} from 'react';
import Form from "../../forms/Form";
import Input from "../../forms/input/Input";
import {useTranslation} from "react-i18next";
import {priceCalculatorSchema} from "../../../validationSchemas/validationSchemas";
import Select from "../../forms/select/Select";
import './PriceCalculator.scss'


function PriceCalculator(props) {
    const {t} = useTranslation();
    const title = t('priceCalcTitle')
    const [price, setPrice] = useState(null);

    const [services, setServices] = useState({
            tankTruck: {rental: 40, fuel: 1},
            boxTruck: {rental: 20, fuel: 0.5},
            openBodyTruck: {rental: 15, fuel: 0.5},
            refrigeratorTruck: {rental: 40, fuel: 1},
        }
    )
    const translations = {
        'Tank truck': 'tankTruck',
        'Фура с цистерной': 'tankTruck',
        'Box truck': 'boxTruck',
        'Фура с закрытым кузовом': 'boxTruck',
        'Open body truck': 'openBodyTruck',
        'Фура с открытым кузовом': 'openBodyTruck',
        'Refrigerator truck': 'refrigeratorTruck',
        'Фура рефрижератор': 'refrigeratorTruck',
    };
    const onSubmit = (data) => {
        const carType = translations[data.carType];
        if (carType) {
            const {rental, fuel} = services[carType];
            const carFuel = data.distance > 10 ? data.distance * 2 * fuel : 0;
            const movers = data.distance > 10 ? 8 * data.moversNum * data.calcCarTime : 7 * data.moversNum * data.calcCarTime;
            const carRental = rental * data.calcCarTime;
            const calculatedPrice = carFuel + carRental + movers;
            setPrice(calculatedPrice);
        }
    }
    const schema = priceCalculatorSchema();
    return (
        <div className=" ">
            <Form
                schema={schema}
                title={title}
                onSubmit={onSubmit}
                inputRenderer={(register, errors) => (
                    <>
                        <Input
                            id="calcCarTime"
                            type="text"
                            placeholder={t("calcCarTime")}
                            register={{...register("calcCarTime")}}
                            errorMessage={errors.calcCarTime?.message}/>
                        <Input
                            id="moversNum"
                            type="text"
                            placeholder={t("moversNum")}
                            register={{...register("moversNum")}}
                            errorMessage={errors.moversNum?.message}/>
                        <Input
                            id="distance"
                            type="text"
                            placeholder={t("distance")}
                            register={{...register("distance")}}
                            errorMessage={errors.distance?.message}/>
                        <Select
                            register={{...register("carType")}}
                            options={[t('tankTruck'), t('refrigerator'), t('openBodyTruck'), t('boxTruck')]}
                        /><p className="price text-left d-block">{price !== null ? `${price} byn` : ''}</p>
                    </>
                )}
                onSubmitButtonText={t("continue")}
            />
        </div>


    );
}

export default PriceCalculator;