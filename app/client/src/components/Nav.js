import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props) {
  console.log(props)
  return (
    <div>
      {props.auth.authenticated ? (
        <>
          <li>
            <Link to="/workspace">Workspace</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
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
