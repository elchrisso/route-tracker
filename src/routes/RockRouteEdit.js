import React, { Component } from 'react'
import { Button, Row, Col, Input, Label } from 'reactstrap'
import { graphql } from 'react-apollo'

import { fetchRouteById, editRockRoute } from '../graphql/routes.graph'

class RockRouteEdit extends Component {
  render () {
    let rockRouteName = null
    let grade = null
    let style = null
    let description = null
    let area = null
    return (
      <div>
        <form onSubmit={console.log("Your mom")}>
          <Row>
            <Col>
              <Label for="newNoteText">New Note/Description Text</Label>
              <Input type="textarea" placeholder="This should be the existing description/note." id="newNoteText"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button color="success" size="small">Edit Rock Route</Button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

export default RockRouteEdit