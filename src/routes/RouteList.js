import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

const getAllRoutes = gql`{
  allRoutes {
    name
    sent
  }
}`

class Route extends Component {
  render () {
    console.log(this.props.data)
    return (
      <p>
        routes will be listed here.
      </p>
    )
  }
}

export default graphql(getAllRoutes)(Route)