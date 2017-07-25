export const actionTypes = {
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_ERROR: '[Auth] Login Error',

  LOGOUT: '[Auth] Logout',

  GET_AUTH_USER: '[Auth] Get Auth User',
  GET_AUTH_USER_SUCCESS: '[Auth] Get Auth User Success',
  GET_AUTH_USER_FAIL: '[Auth] Get AuthUser Fail'
}

export function login () {
  return {
    type: actionTypes.LOGIN
  }
}

export function loginSuccess (token) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: token
  }
}

export function loginError (message) {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: message
  }
}

export function logout () {
  return {
    type: actionTypes.LOGOUT
  }
}


export function getAuthUser () {
  return {
    type: actionTypes.GET_AUTH_USER
  }
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
