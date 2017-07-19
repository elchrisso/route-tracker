import { combineReducers } from 'redux'

import backendClient from '../client'

export const reducer = combineReducers({
  apollo: backendClient.reducer()
})
