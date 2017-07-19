import { combineReducers } from 'redux'

import client from '../client'
import * as authReducer from '../auth/reducer'

export default combineReducers({
  apollo: client.reducer(),
  auth: authReducer.reducer
})
