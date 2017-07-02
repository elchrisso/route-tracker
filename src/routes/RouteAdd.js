import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { addRoute } from '../graphql/routes.graph'
import { Row, Col, Button } from 'reactstrap'

class RouteAdd extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      style: '',

    }
  }

  addRoute = (evt) => {
    evt.preventDefault()

    console.log(this.state.style + " " + this.state.grade)
    this.props.mutate({
      variables: {
        name: this.state.name,
        style: this.state.style,
        grade: this.state.grade,
        sent: this.state.sent
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.addRoute}>
        <h3>Add a Route</h3>
        <Row>
          <Col>
            <input type="text" placeholder="Route name" onChange={(evt) => this.setState({ name: evt.target.value }) } />
          </Col>
          <Col>
            <input type="text" placeholder="Route style" onChange={(evt) => this.setState({ style: evt.target.value })}/>
          </Col>
          <Col>
            <input type="text" placeholder="Route grade" onChange={(evt) => this.setState({ grade: evt.target.value})}/>
          </Col>
          <Col>
            <Button type="submit">Add It!</Button>
          </Col>
        </Row>
      </form>
    )
  }
}

export default graphql(addRoute)(RouteAdd)