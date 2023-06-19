import React from 'react';
import {useTranslation} from "react-i18next";
import {carsSchema} from "../../validationSchemas/validationSchemas";
import ModalForm from "../../components/forms/ModalForm";
import Input from "../../components/forms/input/Input";
import Select from "../../components/forms/select/Select";


function CarsModal({closeModal, onSubmit}) {
    const {t} = useTranslation();
    const title = t("addCar");
    const schema = carsSchema();

    return (
        <ModalForm
            schema={schema}
            title={title}
            closeModal={closeModal}
            onSubmit={onSubmit}
            inputRenderer={(register, errors) => (
                <>
                    <Input
                        id="carNumber"
                        type="text"
                        placeholder={t("carNumber")}
                        register={{...register("number")}}
                        errorMessage={errors.number?.message}/>
                    <Input
                        id="carFuelConsumption"
                        type="text"
                        placeholder={t("carFuelConsumption")}
                        register={{...register("fuelConsumption")}}
                        errorMessage={errors.fuelConsumption?.message}/>
                    <Input
                        id="carLoadCapacity"
                        type="text"
                        placeholder={t("carLoadCapacity")}
                        register={{...register("loadCapacity")}}
                        errorMessage={errors.loadCapacity?.message}/>
                    <Select
                        register={{...register("carType")}}
                        options={[t('tankTruck'), t('refrigerator'), t('openBodyTruck'),t('boxTruck')]}
                    />

                </>
            )}
            onSubmitButtonText={t("save")}
        />
    );
}

export default CarsModal;