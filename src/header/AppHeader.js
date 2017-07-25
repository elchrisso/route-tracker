import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import AuthSerice from '../auth/service'
import { getAuthUser, getAuthUserSuccess, getAuthUserFail, logout } from '../auth/actions'

class AppHeader extends Component {

  componentWillMount () {
    this.props.dispatch(getAuthUser())

    this.props.client.query({
      query:AuthSerice.getLoggedInUser
    }).then((resp) => {
      this.props.dispatch(getAuthUserSuccess(resp.data.user))
    }).catch((err) => {
      console.error(err)
      this.props.dispatch(getAuthUserFail(err.message))
    })
  }

  handleLogout = () => {
    this.props.dispatch(logout())
  }

  render () {
    let userLink = "/login"
    let userLinkText = "LogIn"
    if (this.props.userInfo !== null) {
      userLink = "/login"
      userLinkText = this.props.userInfo.profile.name + "'s Account"
    }
    return (
      <Navbar color="faded" light toggleable>
        <NavbarBrand href="/">route tracker</NavbarBrand>
        <Nav className=""ml-auto>
          <NavItem>
            <NavLink to="/addrockroute">Add a Route</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={userLink}>{userLinkText}</NavLink>
          </NavItem>
          <NavItem>
            <Button color="link" size="sm" onClick={this.handleLogout}>Log Out</Button>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userInfo: state.auth.userInfo,
    userInfoError: state.auth.userInfoError
  }
}

export default withApollo(connect(mapStateToProps)(AppHeader))
