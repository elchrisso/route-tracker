export const actionTypes = {
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_ERROR: '[Auth] Login Error',
}

export function login () {
  return {
    type: actionTypes.LOGIN
  }
}

export function loginSuccess (signinUserData) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: signinUserData
  }
}

export function loginError (message) {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: message
  }
}