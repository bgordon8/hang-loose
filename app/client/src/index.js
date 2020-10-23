import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import App from './components/App'
import { AUTH_USER } from './actions/types'

const store = applyMiddleware(logger, reduxThunk)(createStore)(reducers)
const token = localStorage.getItem('token')

if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
