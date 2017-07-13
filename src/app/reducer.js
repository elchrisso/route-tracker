import { combineReducers } from 'redux'

import backendClient from '../backendClient'

export const reducer = combineReducers({
  apollo: backendClient.reducer()
})
