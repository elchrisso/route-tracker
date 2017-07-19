import { createStore, compose, applyMiddleware } from 'redux'

import backendClient from './client'
import { reducer } from './app/reducer'

export default createStore(reducer, {}, compose(
  applyMiddleware(backendClient.middleware()),
  (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))
