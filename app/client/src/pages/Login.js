import React, { useState } from 'react'
import './ZLoginRegister.css'
import { loginUser } from '../actions/auth'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleForm = (e) => {
    e.preventDefault()
    props.loginUser(
      {
        email,
        password,
      },
      () => {
        history.push('/workspace')
      }
    )
  }

  return (
    <>
      <div className="login">
        <h1>Login page</h1>
      </div>
      <div className="login-form">
        <form onSubmit={handleForm} className="form-fields">
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="enter email"
            vaule={email}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="enter password"
            value={password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default connect(() => ({}), { loginUser })(Login)
