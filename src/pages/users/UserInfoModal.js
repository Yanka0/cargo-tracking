import React, {useState} from "react";
import "../../components/forms/Forms.scss";
import {useTranslation} from "react-i18next";
import "../../components/forms/Modal.scss";
import ModalForm from "../../components/forms/ModalForm";
import UserInputFields from "./UserInputFields";
import Select from "../../components/forms/select/Select";
import {userSchema} from "../../validationSchemas/validationSchemas";

function UserInfoModal({closeModal, onSubmit, defaultValues, definedRole}) {
    const {t} = useTranslation();
    const title = t("addAdmin");
    const [maxDateTime, setMaxDateTime] = useState(
        new Date().toISOString().slice(0, 10)
    );
    const schema = userSchema();

    if (definedRole) defaultValues.role = definedRole;

    return (
        <ModalForm
            schema={schema}
            title={title}
            closeModal={closeModal}
            onSubmit={onSubmit}
            defaultValues={defaultValues}
            inputRenderer={(register, errors) => (
                <>
                    <UserInputFields
                        register={register}
                        errors={errors}
                        maxDateTime={maxDateTime}
                    />
                    <Select
                        register={{...register("role")}}
                        options={["USER", "DRIVER", "ADMIN"]}
                        disabled={definedRole !== undefined}
                    />
                </>
            )}
            onSubmitButtonText={t("save")}
        />
    );
}

export default UserInfoModal;
