import React, { Component } from 'react'

import { Button } from 'reactstrap'
import { withApollo, graphql } from 'react-apollo'

import { fetchAllRoutes, fetchRouteById, sendRoute } from '../graphql/routes.graph'

class SendButton extends Component {
  componentWillMount () {
    //Uncomment the following to enter "manual" mode for apollo
    // this.props.Route.query({
    //   query: sendRoute,
    //   variables: {
    //     id: this.props.match.params.id
    //   }
    // })
  }

  // handleSendRoute = (routeId) => {
  //   routeId = this.props.data.Route.id
  //   this.props.mutate({
  //     refetchQueries: [{
  //       query: fetchAllRoutes
  //     }],
  //     variables: {
  //       id: routeId
  //     }
  //   })
  // }

  render () {
    return (
      <Button color="success" size="small" onClick={console.log("this is where the handleSend function goes")}>Send It!</Button>
    )
  }
}

export default withApollo(SendButton)