import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { graphql } from 'react-apollo'

import { fetchRouteById, editRockRoute } from '../graphql/routes.graph'

class RockRouteEdit extends Component {
  render () {
    let rockRouteName = null
    let grade = null
    let style = null
    let description = null
    let area = null
    return (
      <div>
        <p>borngggg</p>
        <Button>Update this Rock Route</Button>
      </div>
    )
  }
}

export default RockRouteEdit