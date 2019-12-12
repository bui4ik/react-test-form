import React from 'react'
import {Field} from "react-final-form";
import styles from "../../Pages/Main/index.module.scss";

const CompanyInput = ({disabled}: any) => (
    <Field
        name="company"
        component="input"
        type="text"
        placeholder="Company"
        className={`form-control mb-3 ${styles.customInput}`}
        disabled={disabled}
    />
)

export default CompanyInput