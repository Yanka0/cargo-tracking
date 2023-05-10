import React, { useState } from "react";
import "../Forms.scss";
import { useTranslation } from "react-i18next";
import "./Modal.scss";
import Modal from "./Modal";
import InputFields from "./InputFields";
import Button from "../../../UI/button/Button";
import Select from "../../../UI/select/Select";
import { userSchema } from "../../../../validationSchemas/validationSchemas";

function UserInfoModal({ closeModal, onSubmit, defaultValues, definedRole }) {
  const { t } = useTranslation();
  const title = t("addAdmin");
  const [maxDateTime, setMaxDateTime] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const schema = userSchema();
  if (definedRole) defaultValues.role = definedRole;
  return (
    <Modal
      schema={schema}
      title={title}
      closeModal={closeModal}
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      inputRenderer={(register, errors) => (
        <>
          <InputFields
            register={register}
            errors={errors}
            maxDateTime={maxDateTime}
          />
          <Select
            register={{ ...register("role") }}
            options={["USER", "DRIVER", "ADMIN"]}
            disabled={definedRole !== undefined}
          />
        </>
      )}
      buttonRenderer={() => (
        <>
          <Button className="tableBtn" name={t("save")} />
        </>
      )}
    />
  );
}

export default UserInfoModal;
