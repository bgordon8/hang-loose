import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Workspace from '../pages/Workspace'
import PrivateRoute from './PrivateRoute'
import Nav from './Nav'
const App = () => {
  return (
    <>
      <Nav />
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
