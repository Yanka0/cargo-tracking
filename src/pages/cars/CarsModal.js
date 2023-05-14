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
                        register={{...register("carNumber")}}
                        errorMessage={errors.carNumber?.message}/>
                    <Input
                        id="carFuelConsumption"
                        type="text"
                        placeholder={t("carFuelConsumption")}
                        register={{...register("carFuelConsumption")}}
                        errorMessage={errors.carFuelConsumption?.message}/>
                    <Input
                        id="carLoadCapacity"
                        type="text"
                        placeholder={t("carLoadCapacity")}
                        register={{...register("carLoadCapacity")}}
                        errorMessage={errors.carLoadCapacity?.message}/>
                    <Select
                        register={{...register("carType")}}
                        options={[t('tankTruck'), t('refrigerator'), t('openBodyTruck')]}
                    />

                </>
            )}
            onSubmitButtonText={t("save")}
        />
    );
}

export default CarsModal;