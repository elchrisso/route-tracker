import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import { fetchAllRoutes, removeRoute, sendRoute } from '../graphql/routes.graph'

class RockRouteList extends Component {
  handleRemoveRoute = (route) => {
    this.props.mutate({
      refetchQueries: [{
        query: fetchAllRoutes
      }],
      variables: {
        id: route.id
      }
    })
  }

  handleSendRoute = (route) => {
    this.props.mutate({
      refetchQueries: [{
        query: fetchAllRoutes
      }],
      variables: {
        sent: route.sent
      }
    })
  }

  render () {
    function loadRockRoute () {
      console.log("i am your loadRockRoute function, but all i do right now is log to console.")
    }

    let routes = null
    if (this.props.data.allRoutes) {
      routes = this.props.data.allRoutes.map((route) => {
        return (
          <tr key={route.id}>
            {console.log(route.name + " " + route.style + " " + route.grade)}
            <td>
              <Link to={`/rockroutedetail/${route.id}`}>
                {route.name}
              </Link>
            </td>
            <td>{route.style}</td>
            <td>{route.grade}</td>
            <td>{(route.sent) ? 'Yes' : 'No'}</td>
            <td>
              <Button color="success" size="sm" onClick={() => this.handleSendRoute(route)}>Send It!</Button>
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
              <th>Sent?</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          {routes}
          </tbody>
        </Table>
        <Link to="addRockRoute">Add A Route</Link>

      </div>
    )
  }
}

const withRouteQuery = graphql(fetchAllRoutes, {options: { fetchPolicy: 'network-only' }})(RockRouteList)
const withRouteMutation = graphql(removeRoute)(withRouteQuery)
const withSendRouteMutation = graphql(sendRoute)(withRouteQuery)

export default withRouteMutation