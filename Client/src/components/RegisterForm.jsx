import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from './CustomInput';

let RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" component={CustomInput} props={{
          name: 'email',
          text: 'Email'
        }} />
        <Field name="username" component={CustomInput} props={{
          name: 'username',
          text: 'Username'
        }} />
        <Field name="name" component={CustomInput} props={{
          name: 'name',
          text: 'Name'
        }} />
        <Field name="last_name" component={CustomInput} props={{
          name: 'last_name',
          text: 'Last name'
        }} />
        <Field name="password" component={CustomInput} props={{
          type: 'password',
          name: 'password',
          text: 'Password'
        }} />
        <Field name="pass_confirm" component={CustomInput} props={{
          type: 'password',
          name: 'pass_confirm',
          text: 'Password confirm'
        }} />
      <input className="form-btn" type="submit" value="Register"/>
    </form>
  )
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterForm