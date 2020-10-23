import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ children, ...props }) {
  return (
    <Route
      {...props}
      render={({ location }) =>
        props.auth.authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(PrivateRoute)
