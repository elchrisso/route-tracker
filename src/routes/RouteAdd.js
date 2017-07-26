import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { Row, Col, Button } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'

import { fetchAllRoutes, addRoute } from '../graphql/routes.graph'

class RouteAdd extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      style: '',

    }
  }

  handleAddRoute = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      refetchQueries: [{
        query: fetchAllRoutes
      }],
      variables: {
        name: this.state.name,
        style: this.state.style,
        grade: this.state.grade,
        description: this.state.description,
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
        <form onSubmit={this.handleAddRoute}>
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
          </Row>
          <Row>
            <div className="col-10">
              <input type="textarea" placeholder="Route description" onChang={(evt) => this.setState({ description: evt.target.value }) }/>
            </div>
            <div className="col-2">
              <Button type="submit">Add It!</Button>
            </div>
          </Row>
        </form>
      </div>

    )
  }
}

export default graphql(addRoute)(RouteAdd)