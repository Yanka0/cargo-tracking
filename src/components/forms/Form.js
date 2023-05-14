import React from "react";
import "./Forms.scss";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import "./Modal.scss";
import Button from "./button/Button";

function Form({schema, title, onSubmit, inputRenderer, defaultValues, onSubmitButtonRenderer, onSubmitButtonText}) {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues
    });
    return (
        <div className="form_">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center">{title}</h1>
                <div className="allInputs">{inputRenderer(register, errors)}</div>
                <div>
                    {
                        onSubmitButtonRenderer ?
                            onSubmitButtonRenderer() :
                            <Button name={onSubmitButtonText} className="tableBtn"/>
                    }
                </div>
            </form>
        </div>
    );
}

export default Form;
