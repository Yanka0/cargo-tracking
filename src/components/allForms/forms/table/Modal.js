import React from "react";
import Button from "../../../UI/button/Button";
import "../Forms.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import "./Modal.scss";

function Modal({ schema, closeModal, onSubmit, inputRenderer,buttonRenderer }) {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="form_">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center">{t("sign_up")}</h1>
          <div className="allInputs">{inputRenderer(register, errors)}</div>
          <div>{buttonRenderer()}</div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
