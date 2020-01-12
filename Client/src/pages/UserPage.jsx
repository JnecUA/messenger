import React from "react";
import cookie from 'react-cookies';
import axios from "axios";
import FormSettings from '../components/FormSettings';
import '../static/css/UserPage.css';

const UserPage = (id) => {
    const isLogged = cookie.load('isLogged');
    if (isLogged === "true") {
        const user = cookie.load('user');
        if (user._id === id.id) {
            console.log(user)
            return(
                <div className="account-settings">
                    <h1>Настройки</h1>
                    <FormSettings user={user} />
                </div>
            )
            
        } else {
            axios.post(`http://localhost:5000/api/users/${id}`)
            .then((res) => {
                const user = res.data.name + res.data.lastname;
                
            })
            return (
                <div className="user-info">
                    <h2>Страница пользователя {user}</h2>
                </div>
            )
            
        }
    } else {
        return <h1>Просматривать страницы пользователье могут только пользователи данного приложения</h1>
    }
    
    
}

export default UserPage