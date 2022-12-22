import React from 'react';
import "./Inputs.scss";

// input component with props

export const Inputs = ({ onChange, title, placeholder }) => {
    return (
        <div className="input">
            <label>{title}</label>
            <input onChange={onChange} placeholder={placeholder} />
        </div>
    )
}
