import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { removeRoute } from '../graphql/routes.graph'

class RouteDelete extends Component {
  constructor () {
    super ()
    this.state = {
      id: ''
    }
  }

  removeRoute = (route) => {
    this.props.mutate({
      variables: { //why 'variables'?
        id: this.state.id
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.removeRoute}>
        <h3>Remove a Route</h3>
        <input type="text" onChange={(evt) => this.setState({
          name: evt.target.value
        })}/>
        <button type="Submit">Remove It!</button>
      </form>
    )
  }
}

export default graphql(removeRoute)(RouteDelete)