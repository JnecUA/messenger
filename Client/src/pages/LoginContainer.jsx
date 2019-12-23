import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { setErrors, setWarn } from "../store/auth/action";

const RegisterContainer = (props) => {
    return <Login errors={props.errors} warn={props.warn} setWarn={props.setWarn} setErrors={props.setErrors} />
}

const mapStateToProps = (state) => {
    return{
        warn: state.auth.warn,
        errors: state.auth.errors
    }
}

const mapDispatchToProps = {
    setWarn,
    setErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);