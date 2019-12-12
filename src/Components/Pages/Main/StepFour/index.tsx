import React, { useState } from 'react'
import { timeZoneValidation } from '../../../../utils/validation'
import { Alert } from 'react-bootstrap'
import { Form } from 'react-final-form'
import NextButton from '../../../Shared/NextButton'
import * as selectors from '../../../../store/form/selectors'
import {setTimezone } from '../../../../store/form/actions'
import { connect } from 'react-redux'
import PrevButton from '../../../Shared/PrevButton'
import TimeZoneSelect from "../../../Shared/TimeZoneSelect";

const StepFour = ({ step, setStep, setTimeZone, timeZone, onPrevBtnClick }: any) => {
    const [error, setError] = useState([])

    if (step !== 4) {
        return null
    }

    const onSubmit = async (values: any) => {
        if (error.length > 0) setError([])
        const newErrors = timeZoneValidation(values)
        if (newErrors) {
            const result: any = Object.values(newErrors).map((el: any) => el[0])
            return setError(result)
        }
        setTimeZone(values)
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
                render={({ handleSubmit, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        <TimeZoneSelect disabled={false}/>
                        <NextButton disabled={submitting}/>
                        <PrevButton onPrevBtnClick={onPrevBtnClick}/>
                    </form>
                )}
            />
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        timeZone: selectors.timezoneSelector(state),
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setTimeZone: (timeZone: any) => dispatch(setTimezone(timeZone)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepFour)