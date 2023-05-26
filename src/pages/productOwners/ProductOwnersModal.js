import React from 'react';
import {useTranslation} from "react-i18next";
import {productOwnerSchema} from "../../validationSchemas/validationSchemas";
import ModalForm from "../../components/forms/ModalForm";
import Input from "../../components/forms/input/Input";

function ProductOwnersModal({closeModal, onSubmit}) {
    const {t} = useTranslation();
    const title = t("addProductOwner");
    const schema = productOwnerSchema();

    return (
        <ModalForm
            schema={schema}
            title={title}
            closeModal={closeModal}
            onSubmit={onSubmit}
            inputRenderer={(register, errors) => (
                <>
                    <Input
                        id="productOwnerName"
                        type="text"
                        placeholder={t("productOwnerName")}
                        register={{...register("name")}}
                        errorMessage={errors.name?.message}/>
                    <Input
                        id="productOwnerAddress"
                        type="text"
                        placeholder={t("productOwnerAddress")}
                        register={{...register("address")}}
                        errorMessage={errors.address?.message}/>

                </>
            )}
            onSubmitButtonText={t("save")}
        />
    );
}

export default ProductOwnersModal;