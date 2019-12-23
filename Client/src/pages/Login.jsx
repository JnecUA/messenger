import React from 'react';
import axios from 'axios';
import './Login.css';
import LoginForm from '../components/LoginForm';

class Login extends React.Component{
    submit = values => {
        console.log(values)
        
    }
    render(){
        return(
            <div className="login">
                <LoginForm onSubmit={this.submit} />
            </div>
        )
    } 
}

export default Login;