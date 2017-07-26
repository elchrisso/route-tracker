import React, { Component } from 'react'
import { Button, Row, Col, Input, Label, FormGroup } from 'reactstrap'
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
        query: fetchRouteById
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
              <FormGroup>
                <Label for="editStyle">Edit Style</Label>
                <Input type="text" id="editStyle" defaultvalue={rockRoute.style} onChange={(evt) => this.setState({ style: evt.target.value })}/>
              </FormGroup>
              <FormGroup>
                <Label for="editDescription">New Note/Description Text</Label>
                <Input type="textarea" id="editDescription" defaultValue={rockRoute.description} onChange={(evt) => this.setState({ description: evt.target.value })}/>
              </FormGroup>
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