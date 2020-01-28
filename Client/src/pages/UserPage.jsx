import React from "react";
import cookie from 'react-cookies';
import axios from "axios";
import FormSettings from '../components/FormSettings';
import WarningBanner from '../components/WarningBanner';
import '../static/css/UserPage.css';

const UserPage = ({errors, warn, setErrors, setWarn, id}) => {
    const isLogged = cookie.load('isLogged');
    const user = cookie.load('user');
    const submit = (values) => {
        axios.put('http://localhost:5000/api/users/'+user._id,{
            'id': user._id,
            'email': values.email,
            'username': values.username === undefined ? user.username : values.username,
            'name': values.name === undefined ? user.name : values.name,
            'lastname': values.lastname === undefined ? user.lastname : values.lastname,
            'password': values.password === undefined ? '' : values.password,
            'pass_confirm': values.pass_confirm === undefined ? '' : values.pass_confirm,
            'new_pass': values.new_pass === undefined ? '' : values.new_pass
        })
        .then((res) => {
            if (res.data.errors.length === 0) {
                cookie.save('user', res.data.user, {_path: '/' });
                window.location.reload()
                setWarn(false);
            } else {
                setErrors(res.data.errors);
                setWarn(true);
            }
            
        })
    }
    if (isLogged === "true") {
        if (user._id === id) {
            return(
                <div className="account-settings">
                    <h1>Settings</h1>
                    <WarningBanner errors={errors} warn={warn} />
                    <FormSettings user={user} onSubmit={submit} />
                </div>
            )
            
        }
    }
    return <h1>You cannot view other pages</h1>
}

export default UserPage