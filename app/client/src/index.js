import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import App from './components/App'

const store = applyMiddleware(logger, reduxThunk)(createStore)(reducers)

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
