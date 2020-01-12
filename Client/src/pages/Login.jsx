import React from 'react';
import axios from 'axios';
import '../static/css/Login.css';
import LoginForm from '../components/LoginForm';
import WarningBanner from "../components/WarningBanner";
import cookie from 'react-cookies'
import { navigate } from 'hookrouter';

class Login extends React.Component{
    submit = values => {
        axios.post('http://localhost:5000/api/users/auth', {
            email: values.email,
            password: values.password
        })
        .then((res) => {
            console.log(res)
            if (res.data === 'Не верный логин или пароль') {
                this.props.setWarn(true);
                this.props.setErrors(['Не верный логин или пароль']);
            } else {
                cookie.save('isLogged', true, {_path: '/' });
                cookie.save('user', res.data, {_path: '/' });
                navigate('/');
            }
            
        })
    }
    render(){
        return(
            <div className="login">
                <WarningBanner errors={this.props.errors} warn={this.props.warn} />
                <LoginForm onSubmit={this.submit} />
            </div>
        )
    } 
}

export default Login;