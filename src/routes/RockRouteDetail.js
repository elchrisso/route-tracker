import React, { Component } from 'react'
import { Jumbotron, Input, Button, FormGroup, Form, Media, Row } from 'reactstrap'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import { fetchRouteById, addComment } from '../graphql/routes.graph'
import CommentAdd from '../comments/CommentAdd'

class RockRouteDetail extends Component {
  constructor () {
    super ()
    this.state = {
      comment: '',
      routeId: '',
      userId: ''
    }
  }

  renderRockRouteInfo (rockRoute) {
    let commentsToDisplay = null
    if (rockRoute.comments) {
      commentsToDisplay = rockRoute.comments.map ((comment) => {
        return (
          <Media key={comment.id}>
            <Media left href="#">
              {/*<Media object data-src="../resources/shitThumb.gif/40x40" alt="Generic placeholder image" />*/}
            </Media>
            <Media body>
              <Media heading>i am a comment</Media>
              {comment.comment}
            </Media>
          </Media>
        )
      })
    }

    return (
      <div>
        <Jumbotron>
          <h6>Route Details</h6>
          <h3>{rockRoute.name}</h3><h4>{rockRoute.grade} - {rockRoute.style}</h4>
          <p>{rockRoute.description}</p>
          <div>
            <Link to={`/rockroutedetail/${rockRoute.id}/edit`}>Edit {rockRoute.name}</Link>
          </div>
        </Jumbotron>

        <Row>
          <div className="col-6">
            <div>
              {commentsToDisplay}
            </div>
          </div>
          <div className="col-6">
            <CommentAdd routeId={rockRoute.id} addComment={this.addComment}/>
          </div>
        </Row>
      </div>
    )
  }

  render() {
    if (this.props.data.loading) {
      return <h1>Loading</h1>
    }

    if (this.props.data.hasOwnProperty('Route') && this.props.data.Route === null) {
      return <h1>Route doesn't exist</h1>
    }

    return this.renderRockRouteInfo(this.props.data.Route)
  }
}

const fetchedRoute = graphql(fetchRouteById, {
  options: (ownProps) => ({
    variables: { id: ownProps.match.params.id },
    fetchPolicy: 'network-only'
  })
})(RockRouteDetail)

export default graphql(addComment)(fetchedRoute)