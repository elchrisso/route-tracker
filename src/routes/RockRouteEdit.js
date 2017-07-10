import React, { Component } from 'react'
import { Button, Row, Col, Input, Label } from 'reactstrap'
import { graphql } from 'react-apollo'

import { fetchRouteById, editRockRoute, fetchAllRoutes } from '../graphql/routes.graph'

class RockRouteEdit extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        id: this.props.data.Route.id,
        ...this.state
      },
      refetchQueries: [{
        query: fetchAllRoutes
      }]
    }).then(() => {
      alert('Rock Route Edited!')
    }).catch((err) => {
      alert(err)
    })
  }

  renderEditRockRouteForm (rockRoute) {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Label for="newNoteText">New Note/Description Text</Label>
              <Input type="textarea" defaultvalue={rockRoute.style} onChange={(evt) => this.setState({ style: evt.target.value })}/>
              <Input type="textarea" defaultValue={rockRoute.description} onChange={(evt) => this.setState({ description: evt.target.value })} id="newNoteText"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit" color="success" size="small">Edit Rock Route</Button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }

  render () {
    if (this.props.loading) {
      return <h1>Loading</h1>
    }

    if (this.props.data.hasOwnProperty('Route') && this.props.data.Route === null) {
      return <h1>Route not found</h1>
    }

    if (this.props.data.hasOwnProperty('Route')) {
      return this.renderEditRockRouteForm(this.props.data.Route)
    }
    return null
  }
}

const withRockRoute = graphql(fetchRouteById, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(RockRouteEdit)

export default graphql(editRockRoute)(withRockRoute)