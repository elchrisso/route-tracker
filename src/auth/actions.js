export const actionTypes = {
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_ERROR: '[Auth] Login Error',

  GET_AUTH_USER: '[Auth] Get Auth User',
  GET_AUTH_USER_SUCCESS: '[Auth] Get Auth User Success',
  GET_AUTH_USER_FAIL: '[Auth] Get AuthUser Fail'
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

export function getAuthUser () {
  type: actionTypes.GET_AUTH_USER
}

export function getAuthUserSuccess (profile) {
  return {
    type: actionTypes.GET_AUTH_USER_SUCCESS,
    payload: profile
  }
}

export function getAuthUserFail (message) {
  return {
    type: actionTypes.GET_AUTH_USER_FAIL,
    payload: message
  }
}
