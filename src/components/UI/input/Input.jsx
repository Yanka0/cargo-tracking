import React from "react";
import './Input.scss'


function Input({name, placeholder, type, register, errorMessage, max}) {
  return (
    <div className='inputGroup'>
      <label htmlFor ={name}>
      <input type={type} name={name} placeholder={placeholder} {...register} max={max} />
      </label>
      <span className='errorMessage'>{errorMessage}</span>
    </div>
  );
}

export default Input;
