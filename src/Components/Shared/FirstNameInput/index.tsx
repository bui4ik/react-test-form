import React from "react";
import {Field} from "react-final-form";
import styles from "../../Pages/Main/index.module.scss";

const FirstNameInput = ({disabled} : any) => (
    <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First Name"
        className={`form-control mb-3 ${styles.customInput}`}
        disabled={disabled}
    />
)

export default FirstNameInput