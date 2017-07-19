import React, { Component } from 'react'
import { Jumbotron, Input, Button, FormGroup, Form, Media } from 'reactstrap'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import { fetchRouteById, addComment } from '../graphql/routes.graph'

class RockRouteDetail extends Component {
  constructor () {
    super ()
    this.state = {
      comment: '',
      routeId: '',
    }
  }

  addComment = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      refetchQueries: [{
        query: fetchRouteById,
        variables: { id: "cj59kyn3u5uyp0157ztd73oxp" }
      }],
      variables: {
        comment: this.state.comment,
        routeId: this.props.match.params.id
      }
    }).then(() => {
      alert("Comment has been added.")
    }).catch((err) => {
      alert(err)
    })
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
        </Jumbotron>
        <div><Link to={`/rockroutedetail/${rockRoute.id}/edit`}>Edit {rockRoute.name}</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          {commentsToDisplay}
        </div>

        <Form onSubmit={this.addComment}>
          <FormGroup>
            <Input type="text" placeholder="comments?  starting point for a flame war?" onChange={(evt) => this.setState({ comment: evt.target.value })}></Input>
            <Button type="submit" color="success">Add This Comment!</Button>
          </FormGroup>
        </Form>
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
    variables: { id: ownProps.match.params.id }
  })
})(RockRouteDetail)

export default graphql(addComment)(fetchedRoute)