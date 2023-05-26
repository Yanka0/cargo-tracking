import React from "react";
import Input from "../components/forms/input/Input";
import "../components/forms/Forms.scss";
import {useTranslation} from "react-i18next";
import {logInSchema} from "../validationSchemas/validationSchemas";
import Form from "../components/forms/Form";
import {setAuthToken} from "../util/setAuthToken";
import axios from "axios";
import * as yup from "yup";

function LoginPage() {
    const {t} = useTranslation();
    const schema = logInSchema()
    const title = t('logIn')

    const onSubmit = (data) => {
        axios.post("http://localhost:8080/api/auth", data)
            .then(response => {
                //get token from response
                const token = response.data.split(/\s/)[0];


                //set JWT token to local
                localStorage.setItem("token", token);

                //set token to axios common header
                setAuthToken(token);

                //redirect user to home page
                window.location.href = '/'
            })
            .catch(err => console.log(err));
    };

    const onTestRole = (data) => {
        localStorage.setItem("testRole", data.role);
        localStorage.setItem("token", "someshit");
        window.location.href = '/'
    }

    return (
        <div className="d-flex flex-column align-items-sm-center">
            <Form
                schema={schema}
                title={title}
                onSubmit={onSubmit}
                inputRenderer={(register, errors) => (
                    <>
                        <Input
                            id="email_"
                            type="text"
                            placeholder={t("login")}
                            register={{...register("login")}}
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
                onSubmitButtonText={t("continue")}
            />
            <Form
                schema={yup.object().optional()}
                title={"Test role"}
                onSubmit={onTestRole}
                defaultValues={{role: 'SYS_ADMIN'}}
                inputRenderer={(register) => (
                    <Input
                        type="text"
                        register={{...register("role")}}
                    />
                )}
                onSubmitButtonText={t("Test")}
            />
        </div>
    );
}

export default LoginPage;
