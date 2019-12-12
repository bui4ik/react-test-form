import React, { useState } from 'react'
import { companyValidation } from '../../../../utils/validation'
import { Alert } from 'react-bootstrap'
import { Form } from 'react-final-form'
import styles from '../index.module.scss'
import NextButton from '../../../Shared/NextButton'
import * as selectors from '../../../../store/form/selectors'
import { setCompany } from '../../../../store/form/actions'
import { connect } from 'react-redux'
import PrevButton from '../../../Shared/PrevButton'
import CompanyInput from "../../../Shared/CompanyInput";

const StepThree = ({ step, setStep, company, setCompany, onPrevBtnClick }: any) => {
  const [error, setError] = useState([])

  if (step !== 3) {
    return null
  }

  const onSubmit = async (values: any) => {
    if (error.length > 0) setError([])
    const newErrors = companyValidation(values)
    if (newErrors) {
      const result: any = Object.values(newErrors).map((el: any) => el[0])
      return setError(result)
    }
    setCompany(values)
    setStep(step + 1)
  }

  const onSkipClick = (e: any) => {
    e.preventDefault()
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
        initialValues={{ company }}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <CompanyInput disabled={false}/>
            {pristine ? (
              <button
                className={`float-right mb-3 btn btn-primary btn-lg ${styles.btnNext}`}
                onClick={onSkipClick}
              >
                SKIP THIS STEP >
              </button>
            ) : (
              <NextButton disabled={submitting} />
            )}
            <PrevButton onPrevBtnClick={onPrevBtnClick} />
          </form>
        )}
      />
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    company: selectors.companySelector(state),
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCompany: (company: any) => dispatch(setCompany(company)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepThree)
