import React, { useState } from "react";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import "./Modal.scss";
import Modal from "./Modal";
import Input from "../../../UI/input/Input";
import Select from "../../../UI/select/Select";
import Button from "../../../UI/button/Button";
import UserInfoModal from "./UserInfoModal";
import { clientSchema } from "../../../../validationSchemas/validationSchemas";

function AddClientModal({ closeModal, onSubmit }) {
  const { t } = useTranslation();
  const title = t("addClient");
  const schema = clientSchema();
  const [currentClient, setCurrentClient] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const onFirstStepSubmit = (clientData) => {
    setCurrentClient(clientData);
    setCurrentStep(2);
  };

  switch (currentStep) {
    case 1:
      return (
        <Modal
          schema={schema}
          title={title}
          closeModal={closeModal}
          onSubmit={onFirstStepSubmit}
          inputRenderer={(register, errors) => (
            <>
              <Input
                id="companyName"
                type="text"
                placeholder={t("companyName")}
                register={{ ...register("companyName") }}
                errorMessage={errors.companyName?.message}
              />
              <Select
                register={{ ...register("status") }}
                options={["PRIVITE", "LEGAL"]}
              />
            </>
          )}
          buttonRenderer={() => (
            <>
              <Button className="tableBtn" name={t("continue")} />
            </>
          )}
        />
      );
    case 2:
      return (
        <UserInfoModal
          closeModal={closeModal}
          onSubmit={onSubmit}
          defaultValues={currentClient}
          definedRole="ADMIN"
        />
      );
  }
}

export default AddClientModal;
