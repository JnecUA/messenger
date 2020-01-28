import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomInput from './CustomInput';

let LoginForm = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
        <Field name="email" component={CustomInput} props={{
          name: 'email',
          text: 'Email or Username'
        }} />
        <Field name="password" component={CustomInput} props={{
          type: 'password',
          name: 'password',
          text: 'Password'
        }} />
        <input type="submit" value="Log In" className="form-btn" />
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm