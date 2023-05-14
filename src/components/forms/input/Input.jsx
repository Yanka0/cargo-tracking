import React from "react";
import './Input.scss'


function Input({name, placeholder, type, register, errorMessage, max, value, onChange}) {
    return (
        <div className='inputGroup'>
            <label htmlFor={name}>
                <input onChange={onChange} type={type} value={value} name={name} placeholder={placeholder} {...register}
                       max={max}/>
            </label>
            <span className='errorMessage'>{errorMessage}</span>
        </div>
    );
}

export default Input;
