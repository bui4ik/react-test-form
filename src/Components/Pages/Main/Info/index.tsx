import React from "react";
import styles from "../index.module.scss";
import {ProgressBar} from "react-bootstrap";
import TitlesSwitch from "./Titles";

const Info  = ({step}: any) => {
    return (
        <>
            <TitlesSwitch step={step}/>
            <h4 className={`text-center mt-5 mb-5 ${styles.title}`}>CREATE ACCOUNT</h4>
            <ProgressBar variant="info" now={20 * step} className={`mb-5 ${styles.pbHeight}`}/>
        </>
    )
};

export default Info;