import Select from 'react-select'
import React, { useEffect, useState } from 'react'
import { Field } from 'react-final-form'
import * as selectors from '../../../store/form/selectors'
import { connect } from 'react-redux'
import moment from 'moment-timezone'

const ReactSelectAdapter = ({ input, ...rest }: any) => (
  <Select {...input} {...rest} placeholder="TimeZone"/>
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

interface OwnProps {
  disabled: boolean
}

interface StateProps {
  timezone: string
}

type Props = StateProps & OwnProps

const TimeZoneSelect : React.FC<Props> = ({timezone, disabled}) => {
  const [userTimeZone, setUserTimeZone] = useState('')
  const [opt, setOpt] = useState([])
  useEffect(() => {
    if (!timezone) {
      setUserTimeZone(moment.tz.guess())
      const timezones = moment.tz.names()
      const myOpt: any = []
      timezones.forEach(el => myOpt.push({ label: el, value: el }))
      return setOpt(myOpt)
    }
    setUserTimeZone(timezone)
  }, [userTimeZone, timezone])

  return (
    <Field
      name="timezone"
      component={ReactSelectAdapter}
      options={opt}
      styles={customStyles}
      defaultValue={userTimeZone && { label: userTimeZone, value: userTimeZone }}
      isDisabled={disabled}
    />
  )
}

const mapStateToProps = (state: any) => {
  return {
    timezone: selectors.timezoneSelector(state),
  }
}

export default connect<StateProps, OwnProps>(mapStateToProps)(TimeZoneSelect)
