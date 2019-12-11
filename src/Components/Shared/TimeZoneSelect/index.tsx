import Select from "react-select";
import React, {useEffect, useState} from "react";
import {Field} from "react-final-form";
import * as selectors from "../../../store/form/selectors";
import {connect} from "react-redux";
import moment from 'moment-timezone'

const ReactSelectAdapter = ({ input, ...rest }: any) => (
    <Select {...input} {...rest} placeholder="TimeZone" />
)

const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
        ...provided,
        backgroundColor: '#f6f6f6',
        fontSize: '20px',
        color: state.isSelected ? '#007bff' : null,
    }),
    control: (provided: any) => ({
        ...provided,
        marginBottom: '2rem',
        backgroundColor: '#f6f6f6',
        height: '50px',
        fontSize: '20px',
    }),
}

const TimeZoneSelect = ({gender}: any) => {
    const [userTimeZone, setUserTimeZone] = useState('')
    const [opt, setOpt] = useState([])
    useEffect(() => {
        setUserTimeZone(moment.tz.guess())
        const timezones = moment.tz.names()
        const myOpt: any = []
        timezones.forEach(el => myOpt.push({label: el, value: el}))
        setOpt(myOpt)
    }, [userTimeZone])

    return (
        <Field
            name="state"
    component={ReactSelectAdapter}
    options={opt}
    styles={customStyles}
    defaultValue={userTimeZone && { label: userTimeZone, value: userTimeZone }}
    />
)
};

const mapStateToProps = (state: any) => {
    return {
        timeZone: selectors.timezoneSelector(state),
    }
}

export default connect(mapStateToProps, null)(TimeZoneSelect)