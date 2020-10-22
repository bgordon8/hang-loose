import React from 'react'
import './ZLoginRegister.css'

export default function Register() {
  return (
    <>
      <div className="register">
        <h1>Register Page</h1>
      </div>
      <div className="register-form">
        <form>
          <label></label>
          <input name="username" placeholder="enter username"></input>
          <label></label>
          <input name="email" placeholder="enter email"></input>
          <label></label>
          <input name="password" placeholder="enter password"></input>
          <input type="submit" />
        </form>
      </div>
    </>
  )
}
