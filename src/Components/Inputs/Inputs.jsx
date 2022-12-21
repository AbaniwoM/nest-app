import React from 'react'

// input component with props

export const Inputs = ({ onChange, title, placeholder }) => {
    return (
        <div>
            <label>{title}</label>
            <input onChange={onChange} placeholder={placeholder} />
        </div>
    )
}
