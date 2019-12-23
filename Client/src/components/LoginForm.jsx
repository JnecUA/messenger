import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
        <section className="form-section">
            <Field type="text" name="email" className="input" component="input" required />
            <label htmlFor="email" className="label"><span>Почта</span></label>
        </section>
        <section className="form-section">
            <Field type="password" name="password" className="input" component="input" required />
            <label htmlFor="password" type="text" className="label"><span>Пароль</span></label>
        </section>
        <input type="submit" value="Войти" className="form-btn" />
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm