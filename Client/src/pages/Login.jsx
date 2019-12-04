import React from 'react';
import './Login.css'

const Login = () => {
    return(
        <div className="login">
            <form>
                <section className="form-section">
                    <input type="email" name="email" className="email-input"/>
                    <label htmlFor="email" type="text" className="email-label"><span>Почта или логин</span></label>
                </section>
                <section className="form-section">
                    <input type="password" name="password" className="pass-input" />
                    <label htmlFor="password" type="text" className="pass-label"><span>Пароль</span></label>
                </section>
                <input type="submit" value="Войти" />

            </form>
        </div>
    )
}

export default Login;