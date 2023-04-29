import React from "react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import "./Forms.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";


function LogIn() {
  const { t } = useTranslation();
  const schema = yup.object().shape({
  email: yup
    .string()
    .email(t('isValidEmail'))
    .required(t('enterEmail')),

  password: yup.string().min(4, t('enterPassword')).max(15, t('passwordSize')).required(t('enterPassword')),
});
const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({email}) => {
    console.log(email);
  };
  
  
  return (
    <div className="form_">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">{t("logIn")}</h1>
        <div className="allInputs">
          <Input id="email_" type="text" placeholder={t("email")} register={{ ...register("email") }} errorMessage={errors.email?.message}/>
          <Input id="password_" type="password" placeholder={t("password")} register={{ ...register("password") }} errorMessage={errors.password?.message}/>
        </div>
        <Button name={t("continue")} />
      </form>
    </div>
  );
}

export default LogIn;
