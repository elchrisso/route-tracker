import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { graphql } from 'react-apollo'

import { fetchRouteById } from '../graphql/routes.graph'

class RockRouteDetail extends Component {

  render() {
    let rockRouteName = null
    let grade = null
    if (this.props.data.hasOwnProperty('Route') && this.props.data.Route !== null) {
      rockRouteName = this.props.data.Route.name
      grade = this.props.data.Route.grade
      console.log(this.props.data)
    }

    return (
      <div>
        <Jumbotron>
          <h6>Route Details</h6>
          {console.log(rockRouteName + grade)}
          {rockRouteName} {grade}
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