import React from "react";
import {Button } from "react-bootstrap";
import styles from "./index.module.scss";

const PrevButton = ({onPrevBtnClick}: any) => (
    <Button
        variant="light"
        className={`float-left mb-3 ${styles.btnPrev}`}
        size="lg"
        onClick={onPrevBtnClick}
    >
        &lt; Prev Step
    </Button>
);

export default PrevButton