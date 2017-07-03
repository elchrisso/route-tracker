import React, { Component } from 'react'

import { Jumbotron } from 'reactstrap'

class RockRouteDetail extends Component {
  render() {
    return (
      <Jumbotron>
        {this.state.route[0].name}
      </Jumbotron>
    )
  }
}

export default RockRouteDetail