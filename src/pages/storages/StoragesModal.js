import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {storageSchema, userSchema} from "../../validationSchemas/validationSchemas";
import ModalForm from "../../components/forms/ModalForm";
import Input from "../../components/forms/input/Input";

function StoragesModal({closeModal, onSubmit}) {
    const {t} = useTranslation();
    const title = t("addStorage");
    const schema = storageSchema();

    return (
        <ModalForm
            schema={schema}
            title={title}
            closeModal={closeModal}
            onSubmit={onSubmit}
            inputRenderer={(register, errors) => (
                <>
                    <Input
                        id="storageName"
                        type="text"
                        placeholder={t("storageName")}
                        register={{...register("storageName")}}
                        errorMessage={errors.storageName?.message}/>
                    <Input
                        id="storageAddress"
                        type="text"
                        placeholder={t("storageAddress")}
                        register={{...register("storageAddress")}}
                        errorMessage={errors.storageAddress?.message}/>

                </>
            )}
            onSubmitButtonText={t("save")}
        />
    );
}

export default StoragesModal;