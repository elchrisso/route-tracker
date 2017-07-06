import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { graphql } from 'react-apollo'

import { fetchRouteById } from '../graphql/routes.graph'

class RockRouteDetail extends Component {

  render() {
    let routeName = (this.props.data.hasOwnProperty('Route') && this.props.data.Route !== null) ? this.props.data.Route.name : null


    return (
      <div>
        <Jumbotron>
          <h6>Route Details</h6>
          {routeName}
        <br/>
          there should be a route name above this line
        </Jumbotron>
      </div>
    )
  }
}

export default graphql(fetchRouteById, {
  options: (ownProps) => ({
    variables: { id: ownProps.match.params.id }
  })
})(RockRouteDetail)