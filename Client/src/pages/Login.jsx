import React from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const Auth = (e) => {
        axios.post('http://localhost:5000/api/users/auth')
        .then(response => console.log("status",response.data.status))
        e.preventDefault();
    }
    return(
        <div className="login">
            <form onSubmit={Auth}>
                <section className="form-section">
                    <input type="text" name="email" className="input" required />
                    <label htmlFor="email" className="label"><span>Почта</span></label>
                </section>
                <section className="form-section">
                    <input type="password" name="password" className="input" required ></input>
                    <label htmlFor="password" type="text" className="label"><span>Пароль</span></label>
                </section>
                <input type="submit" value="Войти" className="form-btn" />

            </form>
        </div>
    )
}

export default Login;