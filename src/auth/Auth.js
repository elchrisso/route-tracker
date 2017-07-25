import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withApollo } from 'react-apollo'

import AuthService from './service'
import { logout, getAuthUser, getAuthUserSuccess, getAuthUserFail } from './actions'

class Auth extends Component {

  handleLogout = () => {
    this.props.dispatch(logout())
  }

  componentWillMount () {
    this.props.dispatch(getAuthUser())

    this.props.client.query({
      query: AuthService.getLoggedInUser
    }).then((resp) => {
      this.props.dispatch(getAuthUserSuccess(resp.data.user))
    }).catch((err) => {
      console.error(err)
      this.props.dispatch(getAuthUserFail(err.message))
    })
  }

  render () {
    if (this.props.token === null) {
      return <h1>null token!</h1>
    }

    let name = ''
    if (this.props.userInfo !== null) {
      name = this.props.userInfo.profile.name
    }

    return (
      <div>
        Welcome {name}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.auth.loading,
    userInfo: state.auth.userInfo,
    error: state.auth.userInfoError
  }
}

export default withApollo(connect(mapStateToProps)(Auth))