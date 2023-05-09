import React, { useState } from 'react'
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import "./Modal.scss";
import Modal from "./Modal";
import Input from '../../../UI/input/Input';
import Select from '../../../UI/select/Select';
import Button from '../../../UI/button/Button';
function ClientsInfoModal({ closeModal, onSubmit, rowToEdit }) {
    const { t } = useTranslation();
    const title = t('addClient')
    const schema = yup.object().shape({
        name: yup
          .string()
          .min(2, t("enterName"))
          .max(20, t("nameSize"))
          .required()
          .matches(/[A-Za-zА-Яа-яЁё]+/, t("isValidName")),
        status: yup
          .string()
          .required()
      });
     
    
  return (
   <Modal
    schema={schema}
    title={title}
    closeModal={closeModal}
    onSubmit={onSubmit}
    defaultValues={rowToEdit}
    inputRenderer={(register, errors) => (
      <>
        <Input
          id="name"
          type="text"
          placeholder={t("name")}
          register={{ ...register("name") }}
          errorMessage={errors.name?.message}
        />
       
        <Select
          register={{ ...register("status") }}
          options={['PRIVITE','LEGAL']}
        />
      </>
    )}
    buttonRenderer={() => (
      <>
        <Button className="tableBtn" name={t("continue")} />
       
      </>
    )}
  />
  )
}

export default ClientsInfoModal