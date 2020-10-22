import React from 'react'
import './ZLoginRegister.css'

export default function Login() {
  return (
    <>
      <div className="login">
        <h1>Login page</h1>
      </div>
      <div className="login-form">
        <form className="form-fields">
          <input name="email" placeholder="enter email"></input>
          <input name="password" placeholder="enter password"></input>
          <input type="submit" />
        </form>
      </div>
    </>
  )
}
