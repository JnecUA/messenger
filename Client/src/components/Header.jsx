import React from 'react';
import logo from '../static/img/logo64.png';
import { A } from 'hookrouter';
import '../static/css/Header.css';
import cookie from 'react-cookies';

const Navigate = () => {
    const isLogged = cookie.load('isLogged');
    const user = cookie.load('user');
    const isLoggedChange = () =>  {
        cookie.save('isLogged', false);
        cookie.remove('user');
        window.location.reload();
    }
    if (isLogged === "true"){
        const userURL = '/user/' + cookie.load('user')._id;
        return(
            <nav className="nav">
                <ul className="row justify-content-between">
                    <li><A href="/support">Поддержка</A></li>
                    <li><A href={userURL} style={{'margin': "0 15px"}}>{user.name + ' ' + user.lastname}</A></li>
                    <li><a onClick={isLoggedChange}>Выход</a></li>
                </ul>
            </nav>
        )
    } else {
        return(
            <nav className="nav">
                <ul className="row justify-content-between">
                    <li><A href="/support">Поддержка</A></li>
                    <li><A href="/login">Войти</A></li>
                    <li><A href="/register">Регестрация</A></li>
                </ul>
            </nav>
        )
    }
    
}

const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="logo">
                        <A href="/" className="row justify-content-between"><img src={logo} alt="logo" /><h2>MESSENGER</h2></A>
                    </div>
                    <Navigate />
                </div>
            </div>
        </div>
    )
}

export default Header;