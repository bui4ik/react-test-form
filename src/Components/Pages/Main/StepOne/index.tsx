import React, { useState } from 'react'
import NextButton from '../../../Shared/NextButton'
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap'
import { Form } from 'react-final-form'
import * as selectors from '../../../../store/form/selectors';
import { setEmail } from "../../../../store/form/actions";
import { emailValidation } from '../../../../utils/validation'
import {checkIsEmailExists} from "../../../../api/requests/form";
import EmailInput from "../../../Shared/EmailInput";

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
              <EmailInput disabled={false}/>
              <h5 className="text-center text-secondary mb-4 font-weight-light">
                We'll email a link to create a password for your new account
              </h5>
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
