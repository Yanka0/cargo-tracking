import React from "react";
import classes from "./Button.module.scss";

function Button({name, className, onClick}) {
    const classNames = `${classes.mainBtn} ${className}`;

    return (
        <button onClick={onClick} className={classNames}>
            {name}
        </button>
    );
}

export default Button;
