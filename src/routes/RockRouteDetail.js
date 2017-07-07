import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import { fetchRouteById } from '../graphql/routes.graph'

class RockRouteDetail extends Component {

  render() {
    let rockRouteName = null
    let grade = null
    let style = null
    let description = null
    let area = null
    if (this.props.data.hasOwnProperty('Route') && this.props.data.Route !== null) {
      rockRouteName = this.props.data.Route.name
      grade = this.props.data.Route.grade
      style = this.props.data.Route.style
      description = this.props.data.Route.description
    }

    return (
      <div>
        <Jumbotron>
          <h6>Route Details</h6>
          {console.log(rockRouteName + grade)}
          {rockRouteName} {grade} {style} {description}
        </Jumbotron>
        <Link to="/editrockroute">Edit {rockRouteName}</Link>
      </div>
    )
  }
}

export default graphql(fetchRouteById, {
  options: (ownProps) => ({
    variables: { id: ownProps.match.params.id }
  })
})(RockRouteDetail)