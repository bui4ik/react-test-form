import Select from "react-select";
import React, {useEffect} from "react";
import {Field} from "react-final-form";
import * as selectors from "../../../store/form/selectors";
import {connect} from "react-redux";

const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
]

const ReactSelectAdapter = ({ input, ...rest }: any) => (
    <Select {...input} {...rest} placeholder="Gender" />
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
        marginBottom: '1rem',
        backgroundColor: '#f6f6f6',
        height: '50px',
        fontSize: '20px',
    }),
}

interface OwnProps {
    disabled: boolean
}

interface StateProps {
    gender: string
}

type Props = StateProps & OwnProps

const GenderSelect: React.FC<Props> = ({gender, disabled}) => {
    useEffect(() => {
        console.log(gender)
    })
    return (
        <Field
            name="gender"
            component={ReactSelectAdapter}
            options={options}
            styles={customStyles}
            defaultValue={gender && { value: gender, label: gender }}
            isDisabled={disabled}
        />
    )
};

const mapStateToProps = (state: any) => {
    return {
        gender: selectors.genderSelector(state),
    }
}

export default connect<StateProps, OwnProps>(mapStateToProps)(GenderSelect)