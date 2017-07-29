import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Media } from 'reactstrap'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'

import CommentService from './service'

class CommentList extends Component {
  constructor () {
    super ()
    this.state = {
      routeId: '',
      commentsToDisplay: ''
    }
  }

  componentWillMount () {
    this.props.client.query({
      query: CommentService.getRouteComments,
      variables: {
        routeId: this.props.routeId
      }
    }).then((resp) => {
      console.log("getRouteComments ran")
      // this.state.commentsToDisplay = resp
    }).catch((err) => {
      console.error(err)
    })
  }

  renderComments (rockRouteId) {
     let commentsToDisplay = <h>{rockRouteId}</h>
    // if (rockRoute.comments) {
    //   commentsToDisplay = rockRoute.comments.map ((comment) => {
    //     return (
    //       <Media key={comment.id}>
    //         <Media left href="#">
    //           {/*<Media object data-src="../resources/shitThumb.gif/40x40" alt="Generic placeholder image" />*/}
    //         </Media>
    //         <Media body>
    //           <Media heading>{comment.user}</Media>
    //           {comment.comment}
    //         </Media>
    //       </Media>
    //     )
    //   })
    // }

    return commentsToDisplay
  }

  render () {
    // if (this.props.data.loading) {
    //   return <h1>Loading comments</h1>
    // }

    //if (this.props.data.hasOwnProperty('RockRoute')

    return this.renderComments(this.props.routeId)
  }
}

CommentList.propTypes = {
  routeId: PropTypes.string.isRequired
}

export default withApollo(CommentList)