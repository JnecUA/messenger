import React from 'react';
import './FormSection.css'

const FormSection = ({name, text, type}) => {
    return(
        <div className="form-section">
            <input type="text" type={type} name={name} className={name+"-input"} required />
            <label htmlFor={name} className={name+"-label"}><span>{text}</span></label>
        </div>
    )
}

export default FormSection