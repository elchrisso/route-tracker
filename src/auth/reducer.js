import { actionTypes } from './actions'

const token = localStorage.getItem('token')

export const initialState = {
  error: null,
  loading: false,
  signedUp: false,
  signingUp: false,
  signupError: null,
  token: (token) ? token : null,
  userInfo: null,
  userInfoError: null
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...initialState,
        loading: true
      }

    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload)
      return {
        ...initialState,
        token: action.payload
      }

    case actionTypes.LOGIN_ERROR:
      return {
        ...initialState,
        error: action.payload
      }

    case actionTypes.LOGOUT:
      localStorage.removeItem('token')
      window.location.reload()
      return initialState

    case actionTypes.GET_AUTH_USER:
      return {
        ...initialState,
        loading: true
      }

    case actionTypes.GET_AUTH_USER_SUCCESS:
      return {
        ...initialState,
        loading: false,
        userInfo: action.payload
      }

    case actionTypes.GET_AUTH_USER_FAIL:
      return {
        ...initialState,
        loading: false,
        userInfoError: action.payload
      }

    default:
      return state
  }
}