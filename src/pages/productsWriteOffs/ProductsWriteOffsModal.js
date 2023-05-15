import React from 'react';
import {useTranslation} from "react-i18next";
import {productWriteOffsSchema} from "../../validationSchemas/validationSchemas";
import ModalForm from "../../components/forms/ModalForm";
import Input from "../../components/forms/input/Input";
import Select from "../../components/forms/select/Select";

function ProductsWriteOffsModal({closeModal,onSubmit}) {
    const {t} = useTranslation();
    const title = t("addProductWriteOff");
    const schema = productWriteOffsSchema();

    return (
        <ModalForm
            schema={schema}
            title={title}
            closeModal={closeModal}
            onSubmit={onSubmit}
            inputRenderer={(register, errors) => (
                <>
                    <Input
                        id="productWriteOffsAmount"
                        type="text"
                        placeholder={t("productWriteOffsAmount")}
                        register={{...register("productWriteOffsAmount")}}
                        errorMessage={errors.productWriteOffsAmount?.message}/>
                    <Select
                        register={{...register("productWriteOffsStatus")}}
                        options={[t('stolen'), t('lost'),t('spoiled')]}
                    />

                </>
            )}
            onSubmitButtonText={t("save")}
        />
    );
}

export default ProductsWriteOffsModal;