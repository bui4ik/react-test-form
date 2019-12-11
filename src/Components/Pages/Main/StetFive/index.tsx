import React from "react";
import {Form} from "react-bootstrap";
import styles from "../index.module.scss";
import PrevButton from "../../../Shared/PrevButton";

const StepFive = ({ onSubmitPrev, step }: any) => {
    if (step !== 5) {
        return null
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control size="lg" type="email" placeholder="E-mail" className="mb-3" />
                <Form.Text className={`text-center font-weight-light text-secondary ${styles.smText}`}>
                    We'll email a link to create a password for your new account
                </Form.Text>
            </Form.Group>
            <PrevButton onSubmitPrev={onSubmitPrev} />
        </Form>
    )
}

export default StepFive