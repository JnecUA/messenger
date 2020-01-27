import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from './CustomInput';

let RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" component={CustomInput} props={{
          name: 'email',
          text: 'Почта'
        }} />
        <Field name="username" component={CustomInput} props={{
          name: 'username',
          text: 'Имя пользователя'
        }} />
        <Field name="name" component={CustomInput} props={{
          name: 'name',
          text: 'Имя'
        }} />
        <Field name="last_name" component={CustomInput} props={{
          name: 'last_name',
          text: 'Фамилия'
        }} />
        <Field name="password" component={CustomInput} props={{
          type: 'password',
          name: 'password',
          text: 'Пароль'
        }} />
        <Field name="pass_confirm" component={CustomInput} props={{
          type: 'password',
          name: 'pass_confirm',
          text: 'Подтверждение'
        }} />
      <input className="form-btn" type="submit" value="Зарегестрироваться"/>
    </form>
  )
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterForm