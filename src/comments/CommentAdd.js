import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentAdd extends Component {
  render () {
    return (<h1>{this.props.routeId}</h1>)
  }
}

CommentAdd.propTypes ={
  routeId: PropTypes.string.isRequired
}

export default CommentAdd