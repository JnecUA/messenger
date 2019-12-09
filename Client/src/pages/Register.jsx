import React from 'react';
import './Register.css';
import FormSection from '../components/FormSection';
import axios from 'axios'

const Register = () => {
    const reg = (e) => {

        axios.post('http://localhost:5000/api/users/register')
            .then(response => console.log("status",response.data.status));
        e.preventDefault();
    }
    return(
        <div className="register">
            <form onSubmit={reg}>
                <FormSection type="email" name="email" text="Почта" />
                <FormSection type="text" name="name" text="Имя пользователя" />
                <FormSection type="password" name="pass" text="Пароль" />
                <FormSection type="password" name="pass-confirm" text="Подтверждение пароля" />
                <input className="form-btn" type="submit" value="Зарегестрироваться"/>
            </form>
        </div>
)};

export default Register;