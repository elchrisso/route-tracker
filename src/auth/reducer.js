import { actionTypes } from './actions'

export const initialState = {
  error: null,
  loggingIn: false,
  signedUp: false,
  signingUp: false,
  signupError: null,
  //token: (token) ? token : null,
  userInfo: null
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...initialState,
        loggingIn: true
      }

    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...initialState,
        token: action.payload.token
      }

    case actionTypes.LOGIN_ERROR:
      return {
        ...initialState,
        error: action.payload
      }

    default:
      return state
  }
}