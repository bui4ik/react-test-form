import Select from "react-select";
import React from "react";
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
        marginBottom: '2rem',
        backgroundColor: '#f6f6f6',
        height: '50px',
        fontSize: '20px',
    }),
}

const GenderSelect = ({gender}: any) => {
    return (
        <Field
            name="state"
            component={ReactSelectAdapter}
            options={options}
            styles={customStyles}
            defaultValue={gender && { label: gender, value: gender }}
        />
    )
};

const mapStateToProps = (state: any) => {
    return {
        gender: selectors.genderSelector(state),
    }
}

export default connect(mapStateToProps, null)(GenderSelect)