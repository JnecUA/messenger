import React from 'react';

const Register = () => (
    <div className="register">
        <form>
                <input type="email" placeholder="Почта" />
                <input type="password" placeholder="Пароль" />
                <input type="password" placeholder="Подтверждение"/>
                <input type="button" value="Зарегестрироваться"/>
            </form>
    </div>
);

export default Register;