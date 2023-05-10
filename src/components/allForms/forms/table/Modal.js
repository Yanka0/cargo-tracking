import React from "react";
import "../Forms.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Modal.scss";

function Modal({ schema, closeModal, onSubmit, inputRenderer,buttonRenderer,defaultValues,title }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues:defaultValues
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
          <h1 className="text-center">{title}</h1>
          <div className="allInputs">{inputRenderer(register, errors)}</div>
          <div>{buttonRenderer()}</div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
