import React from "react";
import {Field} from "react-final-form";
import styles from "../../Pages/Main/index.module.scss";

const EmailInput = ({disabled} : any) => {
    return (
        <Field
            name="email"
            component="input"
            type="text"
            placeholder="E-mail"
            className={`form-control mb-3 ${styles.customInput}`}
            disabled={disabled}
        />
    )
}

export default EmailInput