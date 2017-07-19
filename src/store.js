import { createStore, compose, applyMiddleware } from 'redux'

import client from './client'
import appReducer from './app/reducer'

export default createStore(appReducer, {}, compose(
  applyMiddleware(client.middleware()),
  (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))
