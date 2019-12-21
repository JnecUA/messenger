import React from 'react';
import './Register.css';
import WarningBanner from '../components/WarningBanner';
import axios from 'axios';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            name: '',
            password: '',
            pass_confirm: '',
            showWarning: '',
            errors: []
        };
        this.emailChange = this.emailChange.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.pass_confirmChange = this.pass_confirmChange.bind(this);
        this.register = this.register.bind(this);
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
        axios.post('http://localhost:5000/api/users/register', {
                'email': this.state.email,
                'username': this.state.username,
                'name': this.state.name,
                'password': this.state.password,
                'pass_confirm': this.state.pass_confirm
        })
        .then(res => {
            console.log(res.data)
            if (res.data.errors.length === 0) {
                this.setState({
                    warn: false
                })
            } else {
                this.setState({
                    warn: true,
                    errors: res.data.errors
                });
            }
        })
        e.preventDefault();
        
    }

    render(){
        return(
            <div className="register">
                <section>   
                    <WarningBanner errors={this.state.errors} warn={this.state.warn} />
                    <form onSubmit={this.register}>
                        <section className="form-section">
                            <input type="text" name="email" className="input" value={this.state.email} onChange={this.emailChange} required  />
                            <label htmlFor="email" className="label"><span>Почта</span></label>
                        </section>
                        <section className="form-section">
                            <input type="text" name="username" className="input" value={this.state.username} onChange={this.usernameChange} required />
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
                </section>
            </div>
    )}
}

export default Register;