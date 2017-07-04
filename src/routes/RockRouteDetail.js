import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

import { fetchRouteById } from '../graphql/routes.graph'

class RockRouteDetail extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h6>Route Details</h6>
          hello again
        </Jumbotron>
      </div>
    )
  }
}

export default RockRouteDetail