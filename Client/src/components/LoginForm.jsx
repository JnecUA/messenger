import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomInput from './CustomInput';

let LoginForm = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
        <Field name="email" component={CustomInput} props={{
          name: 'email',
          text: 'Почта или Логин'
        }} />
        <Field name="password" component={CustomInput} props={{
          type: 'password',
          name: 'password',
          text: 'Пароль'
        }} />
        <input type="submit" value="Войти" className="form-btn" />
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm