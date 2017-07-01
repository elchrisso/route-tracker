import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { Table, Button } from 'reactstrap'

import { fetchAllRoutes } from '../graphql/routes.graph'
import RouteDelete from '../routes/RouteDelete'

class Route extends Component {
  render () {
    let routes = null
    if (this.props.data.allRoutes) {
      routes = this.props.data.allRoutes.map((route, idx) => {
        return (
          <tr key={route.id}>
            <td>{route.name}</td>
            <td>{(route.sent) ? 'Yes' : 'No'}</td>
            <td>
              <Button color="danger" size="sm" onClick={() => RouteDelete.removeRoute(route)}>Delete This Route</Button>
            </td>
          </tr>
          )
      })
    }
    return (
      <div>
        <h1>Route List</h1>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sent</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          {routes}
          </tbody>
        </Table>

      </div>
    )
  }
}

export default graphql(fetchAllRoutes)(Route)