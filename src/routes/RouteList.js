import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { Table, Button } from 'reactstrap'

import { fetchAllRoutes, removeRoute } from '../graphql/routes.graph'

class RouteList extends Component {
  handleRemoveRoute = (client) => {
    this.props.mutate({
      refetchQueries: [{
        query: fetchAllRoutes
      }],
      variables: {
        id: client.id
      }
    })
  }

  render () {
    let routes = null
    if (this.props.data.allRoutes) {
      routes = this.props.data.allRoutes.map((route) => {
        return (
          <tr key={route.id}>
            {console.log(route.name + " " + route.style + " " + route.grade)}
            <td>{route.name}</td>
            <td>{route.style}</td>
            <td>{route.grade}</td>
            <td>{(route.sent) ? 'Yes' : 'No'}</td>
            <td>
              <Button color="success" size="sm">Send It!</Button>
            </td>
            <td>
              <Button color="danger" size="sm" onClick={() => this.handleRemoveRoute(route)}>Delete This Route</Button>
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
              <th>Style</th>
              <th>Grade</th>
              <th>Sent</th>
              <th>&nbsp;</th>
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

const withRouteQuery = graphql(fetchAllRoutes, {options: { fetchPolicy: 'network-only' }})(RouteList)
const withRouteMutation = graphql(removeRoute)(withRouteQuery)

export default withRouteMutation