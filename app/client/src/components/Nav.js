import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { UNAUTH_USER } from '../actions/types'

function Nav(props) {
  const history = useHistory()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    props.dispatch({ type: UNAUTH_USER })
    history.push('/login')
  }
  return (
    <div>
      {props.auth.authenticated && props.auth.user ? (
        <>
          <li>
            <Link to="/workspace">Workspace</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
          <li>{props.auth.user.username}</li>
        </>
      ) : (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
      <ul></ul>
    </div>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(Nav)
