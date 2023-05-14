import React from "react";
import {useTranslation} from "react-i18next";
import Input from "../../components/forms/input/Input";

const UserInputFields = ({register, errors, maxDateTime}) => {
    const {t} = useTranslation();
    return (
        <>
            <Input
                id="name"
                type="text"
                placeholder={t("name")}
                register={{...register("name")}}
                errorMessage={errors.name?.message}
            />
            <Input
                id="surname"
                type="text"
                placeholder={t("surname")}
                register={{...register("surname")}}
                errorMessage={errors.surname?.message}
            />
            <Input
                id="patronymic"
                type="text"
                placeholder={t("patronymic")}
                register={{...register("patronymic")}}
                errorMessage={errors.patronymic?.message}
            />
            <Input
                id="bornDate"
                type="date"
                placeholder={t("bornDate")}
                register={{...register("bornDate")}}
                errorMessage={errors.bornDate?.message}
                max={maxDateTime}
            />
            <Input
                id="passportNum"
                type="text"
                placeholder={t("passportNum")}
                register={{...register("passportNum")}}
                errorMessage={errors.passportNum?.message}
            />
            <Input
                id="issuedBy"
                type="text"
                placeholder={t("issuedBy")}
                register={{...register("issuedBy")}}
                errorMessage={errors.issuedBy?.message}
            />
            <Input
                id="town"
                type="text"
                placeholder={t("town")}
                register={{...register("town")}}
                errorMessage={errors.town?.message}
            />
            <Input
                id="street"
                type="text"
                placeholder={t("street")}
                register={{...register("street")}}
                errorMessage={errors.street?.message}
            />
            <Input
                id="house"
                type="text"
                placeholder={t("house")}
                register={{...register("house")}}
                errorMessage={errors.house?.message}
            />
            <Input
                id="flat"
                type="text"
                placeholder={t("flat")}
                register={{...register("flat")}}
                errorMessage={errors.flat?.message}
            />
            <Input
                id="email"
                type="text"
                placeholder={t("email")}
                register={{...register("email")}}
                errorMessage={errors.email?.message}
            />
            <Input
                id="login"
                type="text"
                placeholder={t("login")}
                register={{...register("login")}}
                errorMessage={errors.login?.message}
            />
        </>
    );
};

export default UserInputFields;