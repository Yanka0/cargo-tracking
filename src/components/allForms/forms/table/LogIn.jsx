import React, {useState} from "react";
import Button from "../../../UI/button/Button";
import Input from "../../../UI/input/Input";
import "../Forms.scss";
import {useTranslation} from "react-i18next";
import {logInSchema} from "../../../../validationSchemas/validationSchemas";
import Modal from "./Modal";

function LogIn() {
    const {t} = useTranslation();
    const schema = logInSchema()
    const title = t('logIn')
    const [modalOpen, setModalOpen] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
        closeModal()
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
            <Modal
                schema={schema}
                title={title}
                closeModal={closeModal}
                onSubmit={onSubmit}
                inputRenderer={(register, errors) => (
                    <>
                        <Input
                            id="email_"
                            type="text"
                            placeholder={t("email")}
                            register={{...register("email")}}
                            errorMessage={errors.email?.message}
                        />
                        <Input
                            id="password_"
                            type="password"
                            placeholder={t("password")}
                            register={{...register("password")}}
                            errorMessage={errors.password?.message}
                        />
                    </>
                )}
                buttonRenderer={() => (
                    <>
                        <Button name={t("continue")} className="tableBtn"/>
                    </>
                )}
            />
    );
}

export default LogIn;
