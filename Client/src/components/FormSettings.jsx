import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../components/CustomInput';

let FormSettings = props => {
  const { handleSubmit } = props
  const user = props.user
  return (
    <form onSubmit={handleSubmit}>
      <Field component={CustomInput} name="email" props={{
        type: 'text',
        name: 'email',
        text: 'Почта',
        defaultValue: user.email
      }}/>
      <Field component={CustomInput} name="username" props={{
        type: 'text',
        name: 'username',
        text: 'Имя пользователя',
        defaultValue: user.username
      }}/>

      <Field component={CustomInput} name="name" props={{
        type: 'text',
        name: 'name',
        text: 'Имя',
        defaultValue: user.name
      }}/>
      <Field component={CustomInput} name="lastname" props={{
        type: 'text',
        name: 'lastname',
        text: 'Фамилия',
        defaultValue: user.lastname
      }}/>
      <br />
      <Field component={CustomInput} name="password" props={{
        type: 'password',
        name: 'password',
        text: 'Старый Пароль'
      }}/>
      <Field component={CustomInput} name="pass_confirm" props={{
        type: 'password',
        name: 'pass_confirm',
        text: 'Подтверждение пароля'
      }}/>
      <Field component={CustomInput} name="new_pass" props={{
        type: 'password',
        name: 'new_pass',
        text: 'Новый пароль'
      }}/>
      <input className="form-btn" type="submit" value="Сохранить"/>
    </form>
  )
}

FormSettings = reduxForm({
  // a unique name for the form
  form: 'register'
})(FormSettings)

export default FormSettings