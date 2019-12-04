import React from 'react';
import logo from '../img/logo64.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="logo">
                        <Link to="/" className="row justify-content-between"><img src={logo} alt="logo" /><h2>MESSENGER</h2></Link>
                    </div>
                    <nav className="nav">
                        <ul className="row justify-content-between">
                            <li><Link to="/support">Поддержка</Link></li>
                            <li><Link to="/login">Войти</Link></li>
                            <li><Link to="/register">Регестрация</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;