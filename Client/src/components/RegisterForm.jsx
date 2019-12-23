import React from 'react'
import { Field, reduxForm } from 'redux-form'

let RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <section className="form-section">
          <Field type="text" name="email" className="input" component="input"  required  />
          <label htmlFor="email" className="label"><span>Почта</span></label>
      </section>
      <section className="form-section">
          <Field type="text" name="username" className="input" component="input" required />
          <label htmlFor="username" className="label"><span>Имя пользователя</span></label>
      </section>
      <section className="form-section">
          <Field type="text" name="name" className="input" component="input" required />
          <label htmlFor="name" className="label"><span>Имя</span></label>
      </section>
      <section className="form-section">
          <Field type="password" name="password" className="input" component="input" required />
          <label htmlFor="password" type="text" className="label"><span>Пароль</span></label>
      </section>
      <section className="form-section">
          <Field type="password" name="pass_confirm" className="input" component="input" required />
          <label htmlFor="pass_confirm" type="text" className="label"><span>Подтверждение</span></label>
      </section>
      <input className="form-btn" type="submit" value="Зарегестрироваться"/>
    </form>
  )
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterForm