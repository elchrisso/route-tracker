import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { addRoute } from '../graphql/routes.graph'

class RouteAdd extends Component {
  constructor () {
    super ()
    this.state = {
      name: ''
    }
  }

  addRoute = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        name: this.state.name
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.addRoute}>
        <h3>Add a Route</h3>
        <input type="text" onChange={(evt) => this.setState({
          name: evt.target.value
        }) } />
        <button type="submit">Add It!</button>
      </form>
    )
  }
}

export default graphql(addRoute)(RouteAdd)