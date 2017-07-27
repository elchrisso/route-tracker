import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'

import { addComment, fetchRouteById } from '../graphql/routes.graph'

class CommentAdd extends Component {
  constructor () {
    super ()
    this.state = {
      comment: '',
      routeId: ''
    }
  }

  addComment = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      refetchQueries: [{
        query: fetchRouteById,
        variables: {
          id: this.props.routeId
        }
      }],
      variables: {
        comment: this.state.comment,
        routeId: this.props.routeId,
        userId: this.props.userInfo.id
      }
    }).then(() => {
      alert("Comment has been added.")
    }).catch((err) => {
      alert(err)
    })
  }

  render () {
    return (
      <div>
        <h1>{this.props.routeId}</h1>
        <Form onSubmit={this.addComment}>
          <FormGroup>
            <Input type="textarea" placeholder="Comments?  Starting point for a flamewar?" onChange={(evt) => this.setState({ comment: evt.target.value })}></Input>
            <Button type="submit" color="success">Submit Comment</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

CommentAdd.propTypes ={
  routeId: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.userInfo
  }
}

export default graphql(addComment)(connect(mapStateToProps)(CommentAdd))
