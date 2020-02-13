import React from 'react';

const FormElement = (props) => {
    const {label,name,placeholder,type,value,onChange}=props
    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="form-control form-control-lg"
            required
        />
        </div>
    )
}
export default FormElement;