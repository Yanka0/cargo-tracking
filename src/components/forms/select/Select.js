import React from "react";
import "./Select.scss";

function Select({register, options, name, disabled}) {
    return (
        <select {...register} disabled={disabled}>
            {options.map((value) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    );
}

export default Select;
