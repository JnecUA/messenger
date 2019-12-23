import React from 'react';
import { connect } from 'react-redux';
import Register from './Register';
import { setErrors, setWarn } from "../store/register/actions";

const RegisterContainer = (props) => {
    return <Register errors={props.errors} warn={props.warn} setWarn={props.setWarn} setErrors={props.setErrors} />
}

const mapStateToProps = (state) => {
    return{
        warn: state.register.warn,
        errors: state.register.errors
    }
}

const mapDispatchToProps = {
    setWarn,
    setErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);