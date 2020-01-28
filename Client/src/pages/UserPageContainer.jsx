import React from 'react';
import { connect } from 'react-redux';
import UserPage from './UserPage';
import { setErrors, setWarn } from "../store/UserPage/actions";

const UserPageContainer = (props) => {
    return <UserPage errors={props.errors} warn={props.warn} setWarn={props.setWarn} setErrors={props.setErrors} id={props.id}/>
}

const mapStateToProps = (state) => {
    return{
        warn: state.UserPage.warn,
        errors: state.UserPage.errors
    }
}

const mapDispatchToProps = {
    setWarn,
    setErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);