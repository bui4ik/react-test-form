import React, { useState } from 'react'
import NextButton from '../../../Shared/NextButton'
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap'
import styles from '../index.module.scss'
import { Form, Field } from 'react-final-form'
import * as selectors from '../../../../store/form/selectors';
import { setEmail } from "../../../../store/form/actions";
import { emailValidation } from '../../../../utils/validation'
import {checkIsEmailExists} from "../../../../api/requests/form";

const StepOne = ({ step, setStep, setEmail, email }: any) => {
  const [error, setError] = useState('')
  if (step !== 1) {
    return null
  }

  const onSubmit = async (values: any) => {
    if (error.length > 0) setError('')
    const newErrors = emailValidation(values)
    if (newErrors) {
        return setError(newErrors.email[0])
    }
    try {
        await checkIsEmailExists(values);
        setEmail(values.email)
        setStep(step + 1)
    } catch (e) {
        setError('Such email already exists')
    }
  }

  return (
    <>
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : null}
      <Form
        onSubmit={onSubmit}
        initialValues={{ email }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="E-mail"
                className={`form-control mb-3 ${styles.customInput}`}
              />
              <h5 className="text-center text-secondary mb-4 font-weight-light">
                We'll email a link to create a password for your new account
              </h5>
            </div>
            <NextButton disabled={submitting}/>
          </form>
        )}
      />
    </>
  )
}

const mapStateToProps = (state: any) => {
    return {
        email: selectors.emailSelector(state),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setEmail: (email: string) => dispatch(setEmail(email)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StepOne);
