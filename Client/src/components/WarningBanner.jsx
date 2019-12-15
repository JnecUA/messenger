import React from 'react';

const WarningBanner = (props) => {
    const errors = props.errors
    const listErrors = errors.map((err, i) => 
        <li key={i}>{err}</li>
    );
    if (!props.warn) {
        return null;
    } 
    return(
        <div className="warning-banner">
            <div className="warn">
                WARNING
            </div>
            <ul>
                {listErrors}
            </ul>
        </div>
    )
    
}

export default WarningBanner;