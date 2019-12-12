import React from "react";
import {Field} from "react-final-form";
import styles from "../../Pages/Main/index.module.scss";

const LastNameInput = ({disabled}: any) => (
    <Field
        name="lastName"
        component="input"
        type="text"
        placeholder="Last Name"
        className={`form-control mb-3 ${styles.customInput}`}
        disabled={disabled}
    />
)

export default LastNameInput