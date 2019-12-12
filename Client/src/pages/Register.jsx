import React from 'react';
import './Register.css';
import axios from 'axios'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            name: '',
            password: '',
            pass_confirm: ''
        };
        this.emailChange = this.emailChange.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.pass_confirmChange = this.pass_confirmChange.bind(this);
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        });
    };

    usernameChange(e) {
        this.setState({
            username: e.target.value
        });
    };

    nameChange(e) {
        this.setState({
            name: e.target.value
        });
    };

    passwordChange(e) {
        this.setState({
            password: e.target.value
        });
    };

    pass_confirmChange(e) {
        this.setState({
            pass_confirm: e.target.value
        });
    };

    register(e) {
        axios.post('http://localhost:5000/api/users/auth', {
            'email': this.state.name,
            'username': this.state.username,
            'name': this.state.name,
            'password': this.state.password,
            'pass_confirm': this.state.pass_confirm
        });
        e.preventDefault();
    }

    render(){
        return(
            <div className="register">
                <form onSubmit={this.register}>
                    <section className="form-section">
                        <input type="text" name="email" className="input" onChange={this.emailChange} required />
                        <label htmlFor="email" className="label"><span>Почта</span></label>
                    </section>
                    <section className="form-section">
                        <input type="text" name="username" className="input" onChange={this.usernameChange} required />
                        <label htmlFor="username" className="label"><span>Имя пользователя</span></label>
                    </section>
                    <section className="form-section">
                        <input type="text" name="name" className="input" onChange={this.nameChange} required />
                        <label htmlFor="name" className="label"><span>Имя</span></label>
                    </section>
                    <section className="form-section">
                        <input type="password" name="password" className="input" onChange={this.passwordChange} required ></input>
                        <label htmlFor="password" type="text" className="label"><span>Пароль</span></label>
                    </section>
                    <section className="form-section">
                        <input type="password" name="pass_confirm" className="input" onChange={this.pass_confirmChange} required ></input>
                        <label htmlFor="pass_confirm" type="text" className="label"><span>Подтверждение</span></label>
                    </section>
                    <input className="form-btn" type="submit" value="Зарегестрироваться"/>
                </form>
            </div>
    )}
}

export default Register;