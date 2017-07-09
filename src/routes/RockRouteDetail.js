import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import { fetchRouteById } from '../graphql/routes.graph'

class RockRouteDetail extends Component {

  renderRockRouteInfo (rockRoute) {
    return (
      <div>
        <Jumbotron>
          <h6>Route Details</h6>
          <h3>{rockRoute.name}</h3><h4>{rockRoute.grade} - {rockRoute.style}</h4>
          <p>{rockRoute.description}</p>
        </Jumbotron>
        <div><Link to={`/rockroutedetail/${rockRoute.id}/edit`}>Edit {rockRoute.name}</Link></div>
        <div><Link to="/">Home</Link></div>
      </div>
    )
  }

  render() {
    if (this.props.data.loading) {
      return <h1>Loading</h1>
    }

    if (this.props.data.hasOwnProperty('Route') && this.props.data.Route === null) {
      return <h1>Route doesn't exist</h1>
    }

    return this.renderRockRouteInfo(this.props.data.Route)
  }
}

export default graphql(fetchRouteById, {
  options: (ownProps) => ({
    variables: { id: ownProps.match.params.id }
  })
})(RockRouteDetail)