import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import "../../components/forms/Modal.scss";
import ModalForm from "../../components/forms/ModalForm";
import Input from "../../components/forms/input/Input";
import Select from "../../components/forms/select/Select";
import UserInfoModal from "../users/UserInfoModal";
import {clientSchema} from "../../validationSchemas/validationSchemas";

function AddClientModal({closeModal, onSubmit}) {
    const {t} = useTranslation();
    const title = t("addClient");
    const schema = clientSchema();
    const [currentClient, setCurrentClient] = useState();
    const [currentStep, setCurrentStep] = useState(1);
    const onFirstStepSubmit = (clientData) => {
        setCurrentClient(clientData);
        setCurrentStep(2);
    };

    switch (currentStep) {
        case 1:
            return (
                <ModalForm
                    schema={schema}
                    title={title}
                    closeModal={closeModal}
                    onSubmit={onFirstStepSubmit}
                    inputRenderer={(register, errors) => (
                        <>
                            <Input
                                id="companyName"
                                type="text"
                                placeholder={t("companyName")}
                                register={{...register("companyName")}}
                                errorMessage={errors.companyName?.message}
                            />
                            <Select
                                register={{...register("status")}}
                                options={["PRIVITE", "LEGAL"]}
                            />
                        </>
                    )}
                    onSubmitButtonText={t("continue")}
                />
            );
        case 2:
            return (
                <UserInfoModal
                    closeModal={closeModal}
                    onSubmit={onSubmit}
                    defaultValues={currentClient}
                    definedRole="ADMIN"
                />
            );
    }
}

export default AddClientModal;
