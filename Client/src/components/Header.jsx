import React from 'react';
import logo from '../img/logo64.png';
import { A } from 'hookrouter';
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="logo">
                        <A href="/" className="row justify-content-between"><img src={logo} alt="logo" /><h2>MESSENGER</h2></A>
                    </div>
                    <nav className="nav">
                        <ul className="row justify-content-between">
                            <li><A href="/support">Поддержка</A></li>
                            <li><A href="/login">Войти</A></li>
                            <li><A href="/register">Регестрация</A></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;