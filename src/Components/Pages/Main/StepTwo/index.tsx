import React, { useState } from 'react'
import { profileValidation } from '../../../../utils/validation'
import { Alert } from 'react-bootstrap'
import { Form } from 'react-final-form'
import NextButton from '../../../Shared/NextButton'
import * as selectors from '../../../../store/form/selectors'
import { setUserProfile } from '../../../../store/form/actions'
import { connect } from 'react-redux'
import GenderSelect from '../../../Shared/GenderSelect'
import PrevButton from '../../../Shared/PrevButton'
import FirstNameInput from '../../../Shared/FirstNameInput'
import LastNameInput from '../../../Shared/LastNameInput'

const StepTwo = ({ step, setStep, setUserProfile, firstName, lastName, onPrevBtnClick }: any) => {
  const [error, setError] = useState([])

  if (step !== 2) {
    return null
  }

  const onSubmit = async (values: any) => {
    if (error.length > 0) setError([])
    const newErrors = profileValidation(values)
    if (newErrors) {
      const result: any = Object.values(newErrors).map((el: any) => el[0])
      return setError(result)
    }
    setUserProfile(values)
    setStep(step + 1)
  }

  return (
    <>
      {error
        ? error.map((el: any, index: number) => (
            <Alert key={index} variant="danger">
              {el}
            </Alert>
          ))
        : null}
      <Form
        onSubmit={onSubmit}
        initialValues={{ firstName, lastName }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <FirstNameInput disabled={false} />
            <LastNameInput disabled={false} />
            <GenderSelect disabled={false}/>
            <NextButton disabled={submitting} />
            <PrevButton onPrevBtnClick={onPrevBtnClick} />
          </form>
        )}
      />
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    firstName: selectors.firstNameSelector(state),
    lastName: selectors.lastNameSelector(state),
    gender: selectors.genderSelector(state),
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserProfile: (values: any) => dispatch(setUserProfile(values)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo)
