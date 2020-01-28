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
        text: 'Email',
        defaultValue: user.email
      }}/>
      <Field component={CustomInput} name="username" props={{
        type: 'text',
        name: 'username',
        text: 'Username',
        defaultValue: user.username
      }}/>

      <Field component={CustomInput} name="name" props={{
        type: 'text',
        name: 'name',
        text: 'Name',
        defaultValue: user.name
      }}/>
      <Field component={CustomInput} name="lastname" props={{
        type: 'text',
        name: 'lastname',
        text: 'Last name',
        defaultValue: user.lastname
      }}/>
      <br />
      <Field component={CustomInput} name="password" props={{
        type: 'password',
        name: 'password',
        text: 'Old password'
      }}/>
      <Field component={CustomInput} name="pass_confirm" props={{
        type: 'password',
        name: 'new_pass',
        text: 'New Password'
      }}/>
      <Field component={CustomInput} name="new_pass" props={{
        type: 'password',
        name: 'pass_confirm',
        text: 'Password confirm'
      }}/>
      <input className="form-btn" type="submit" value="Save"/>
    </form>
  )
}

FormSettings = reduxForm({
  // a unique name for the form
  form: 'register'
})(FormSettings)

export default FormSettings