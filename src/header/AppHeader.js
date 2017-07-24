import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class AppHeader extends Component {
  render () {
    return (
      <div>
        <Navbar color="faded">
          <NavbarBrand>route tracker</NavbarBrand>
          <NavLink to="/addrockroute">Add a Route</NavLink>
        </Navbar>
      </div>
    )
  }
}

export default AppHeader