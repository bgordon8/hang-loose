import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Workspace from '../pages/Workspace'
import PrivateRoute from './PrivateRoute'

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/workspace">Workspace</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path="/workspace">
          <Workspace />
        </PrivateRoute>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
