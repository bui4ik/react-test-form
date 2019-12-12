import React from 'react'
import { Form } from 'react-final-form'
import * as selectors from '../../../../store/form/selectors'
import { setUserProfile } from '../../../../store/form/actions'
import { connect } from 'react-redux'
import GenderSelect from '../../../Shared/GenderSelect'
import TimeZoneSelect from '../../../Shared/TimeZoneSelect'
import EmailInput from '../../../Shared/EmailInput'
import FirstNameInput from '../../../Shared/FirstNameInput'
import LastNameInput from '../../../Shared/LastNameInput'
import CompanyInput from '../../../Shared/CompanyInput'
import styles from '../../../Shared/NextButton/index.module.scss'

const StepFive = ({ step, setStep, firstName, lastName, company, email }: any) => {
  if (step !== 5) {
    return null
  }

  const onSubmit = async (values: any) => {
    setStep(step + 1)
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ email, firstName, lastName, company }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <EmailInput disabled={true} />
            <FirstNameInput disabled={true} />
            <LastNameInput disabled={true} />
            <GenderSelect disabled={true} />
            <CompanyInput disabled={true} />
            <TimeZoneSelect disabled={true} />
            <button
              type="submit"
              disabled={submitting}
              className={`float-right mb-3 btn btn-primary btn-lg ${styles.btnCreate}`}
            >
              CREATE ACCOUNT
            </button>
          </form>
        )}
      />
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    email: selectors.emailSelector(state),
    firstName: selectors.firstNameSelector(state),
    lastName: selectors.lastNameSelector(state),
    company: selectors.companySelector(state),
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserProfile: (values: any) => dispatch(setUserProfile(values)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepFive)
