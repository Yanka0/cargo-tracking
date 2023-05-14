import React, {useState} from "react";
import Button from "../components/forms/button/Button";
import Input from "../components/forms/input/Input";
import "../components/forms/Forms.scss";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useTranslation} from "react-i18next";


//TODO: delete?
function SignUp() {
    const [maxDateTime, setMaxDateTime] = useState(
        new Date().toISOString().slice(0, 10)
    );
    const {t} = useTranslation();

    const schema = yup.object().shape({
        name: yup
            .string()
            .min(2, t("enterName"))
            .max(20, t("nameSize"))
            .required()
            .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidName")),
        surname: yup
            .string()
            .min(2, t("enterSurname"))
            .max(20, t("surnameSize"))
            .required()
            .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidSurname")),
        patronymic: yup
            .string()
            .min(2, t("enterPatronymic"))
            .max(20, t("patronymicSize"))
            .required()
            .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidPatronymic")),
        bornDate: yup.string().required(t("enterBornDate")),
        passportNum: yup
            .string()
            .required(t("enterPassportNum"))
            .matches(/^(MP|MC)\d{7}$/, t("isValidPassportNum")),
        issuedBy: yup
            .string()
            .max(50, t("issuedBySize"))
            .required(t("enterIssuedBy"))
            .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidIssuedBy")),
        town: yup
            .string()
            .max(20, t("townSize"))
            .required(t("enterTown"))
            .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidTown")),
        street: yup
            .string()
            .max(20, t("streetSize"))
            .required(t("enterStreet"))
            .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidStreet")),
        house: yup
            .string()
            .required(t("enterHouse"))
            .matches(/[0-9]+/, t("isValidHouse")),
        flat: yup
            .string()
            .required(t("enterFlat"))
            .matches(/[0-9]+/, t("isValidFlat")),
        email: yup.string().email(t("isValidEmail")).required(t("enterEmail")),
        login: yup.string().required(t("enterLogin")),
        password: yup
            .string()
            .min(4, t("enterPassword"))
            .max(15, t("passportSize"))
            .required(t("enter password")),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    });

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="form_">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center">{t("sign_up")}</h1>
                    <div className="allInputs">
                        <Input
                            name="name"
                            type="text"
                            placeholder={t("name")}
                            register={{...register("name")}}
                            errorMessage={errors.name?.message}
                        />
                        <Input
                            name="surname"
                            type="text"
                            placeholder={t("surname")}
                            register={{...register("surname")}}
                            errorMessage={errors.surname?.message}
                        />
                        <Input
                            name="patronymic"
                            type="text"
                            placeholder={t("patronymic")}
                            register={{...register("patronymic")}}
                            errorMessage={errors.patronymic?.message}
                        />
                        <Input
                            name="bornDate"
                            type="date"
                            placeholder={t("bornDate")}
                            register={{...register("bornDate")}}
                            errorMessage={errors.bornDate?.message}
                            max={maxDateTime}
                        />
                        <Input
                            name="passportNum"
                            type="text"
                            placeholder={t("passportNum")}
                            register={{...register("passportNum")}}
                            errorMessage={errors.passportNum?.message}
                        />
                        <Input
                            name="issuedBy"
                            type="text"
                            placeholder={t("issuedBy")}
                            register={{...register("issuedBy")}}
                            errorMessage={errors.issuedBy?.message}
                        />
                        <Input
                            name="town"
                            type="text"
                            placeholder={t("town")}
                            register={{...register("town")}}
                            errorMessage={errors.town?.message}
                        />
                        <Input
                            name="street"
                            type="text"
                            placeholder={t("street")}
                            register={{...register("street")}}
                            errorMessage={errors.street?.message}
                        />
                        <Input
                            name="house"
                            type="text"
                            placeholder={t("house")}
                            register={{...register("house")}}
                            errorMessage={errors.house?.message}
                        />
                        <Input
                            name="flat"
                            type="text"
                            placeholder={t("flat")}
                            register={{...register("flat")}}
                            errorMessage={errors.flat?.message}
                        />
                        <Input
                            name="email"
                            type="text"
                            placeholder={t("email")}
                            register={{...register("email")}}
                            errorMessage={errors.email?.message}
                        />
                        <Input
                            name="login"
                            type="text"
                            placeholder={t("login")}
                            register={{...register("login")}}
                            errorMessage={errors.login?.message}
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder={t("password")}
                            register={{...register("password")}}
                            errorMessage={errors.password?.message}
                        />
                        <Input
                            name="confirmPassword"
                            type="password"
                            placeholder={t("confirmPassword")}
                            register={{...register("confirmPassword")}}
                            errorMessage={
                                errors.confirmPassword?.message && t("isValidPassword")
                            }
                        />
                    </div>
                    <Button name={t("continue")}/>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
