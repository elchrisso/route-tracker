import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

class AppHeader extends Component {
  render () {
    return (
      <div>
        <Navbar color="faded">
          <NavbarBrand>route tracker</NavbarBrand>
        </Navbar>
      </div>
    )
  }
}

export default AppHeader