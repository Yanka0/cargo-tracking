import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {productsSchema} from "../../validationSchemas/validationSchemas";
import ModalForm from "../../components/forms/ModalForm";
import Input from "../../components/forms/input/Input";
import Select from "../../components/forms/select/Select";

function ProductsModal({closeModal, onSubmit}) {
    const {t} = useTranslation();
    const title = t("addProduct");
    const schema = productsSchema();


    return (
        <ModalForm
            schema={schema}
            title={title}
            closeModal={closeModal}
            onSubmit={onSubmit}
            inputRenderer={(register, errors) => (
                <>
                    <Input
                        id="productName"
                        type="text"
                        placeholder={t("productName")}
                        register={{...register("productName")}}
                        errorMessage={errors.productName?.message}/>
                    <Input
                        id="productAmount"
                        type="text"
                        placeholder={t("productAmount")}
                        register={{...register("productAmount")}}
                        errorMessage={errors.productAmount?.message}

                    />
                    <Select
                        register={{...register("productStatus")}}
                        options={[t('accepted'), t('verificationСompleted'), t('lost'),t('delivered')]}
                    />



                </>
            )}
            onSubmitButtonText={t("save")}
        />
    );
}

export default ProductsModal;