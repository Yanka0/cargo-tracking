import React from "react";
import "./Forms.scss";
import "./Modal.scss";
import Form from "./Form";

function ModalForm({
                       schema,
                       title,
                       onSubmit,
                       inputRenderer,
                       defaultValues,
                       closeModal,
                       onSubmitButtonRenderer,
                       onSubmitButtonText
                   }) {

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <Form
                schema={schema}
                title={title}
                onSubmit={onSubmit}
                defaultValues={defaultValues}
                inputRenderer={inputRenderer}
                onSubmitButtonRenderer={onSubmitButtonRenderer}
                onSubmitButtonText={onSubmitButtonText}
            />
        </div>
    );
}

export default ModalForm;
