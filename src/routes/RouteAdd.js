import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import { fetchAllRoutes, addRoute } from '../graphql/routes.graph'

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
    this.props.mutate({
      refetchQueries: [{
        query: fetchAllRoutes
      }],
      variables: {
        name: this.state.name,
        style: this.state.style,
        grade: this.state.grade,
        sent: this.state.sent
      }
    }).then(() => {
      alert("Added!")
    }).catch(() => {
      alert("error")
    })
  }

  render () {
    return (
      <div>
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
        <Link to="/">Return to Rock Route List</Link>
      </div>

    )
  }
}

export default graphql(addRoute)(RouteAdd)