import React from 'react';
import './Register.css'

const Register = () => (
    <div className="register">
        <form>
                <div className="form-section">
                    <input type="text" name="email" className="email-input" />
                    <label htmlFor="email" className="email-label"><span>Почта</span></label>
                </div>
                <div className="form-section">
                    <input type="text" name="name" className="name-input" />
                    <label htmlFor="name" className="name-label"><span>Имя</span></label>
                </div>
                <div className="form-section">
                    <input type="text" name="pass" className="pass-input" />
                    <label htmlFor="pass" className="pass-label"><span>Пароль</span></label>
                </div>
                <div className="form-section">
                    <input type="text" name="pass-confirm" className="pass-confirm-input" />
                    <label htmlFor="pass-confirm" className="pass-confirm-label"><span>Подтверждение</span></label>
                </div>
                <input type="button" value="Зарегестрироваться"/>
            </form>
    </div>
);

export default Register;