import React from 'react';
import '../static/css/Register.css';
import WarningBanner from '../components/WarningBanner';
import axios from 'axios';
import RegisterForm from '../components/RegisterForm';
import { navigate } from "hookrouter";

class Register extends React.Component {
    submit = values => {
        axios.post('http://localhost:5000/api/users/register', {
                'email': values.email,
                'username': values.username,
                'name': values.name,
                'lastname': values.last_name,
                'password': values.password,
                'pass_confirm': values.pass_confirm
        })
        .then(res => {
            if (res.data.errors.length === 0) {
                this.props.setWarn(false);
                navigate('/login');
            } else {
                this.props.setWarn(true);
                this.props.setErrors(res.data.errors);
            }
        })
        
    }

    render(){
        return(
            <div className="register">
                <WarningBanner errors={this.props.errors} warn={this.props.warn} />
                <RegisterForm onSubmit={this.submit} />
            </div>
    )}
}

export default Register;