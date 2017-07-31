import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import ClimberService from './service'

import ClimberEdit from './ClimberEdit'

class Climber extends Component {
  constructor () {
    super ()
    this.state = {
      climber: ''
    }
  }

  renderClimber () {
    return (
      <div>
        <h1>
          Welcome {this.props.data.user.profile.name}
        </h1>
        <ClimberEdit/>
      </div>
    )
  }

  render() {
    if (this.props.data.loading) {
      return <h1>Loading Climber information...</h1>
    }

    return this.renderClimber(this.props.data.user)
  }
}

const fetchedClimber = graphql(ClimberService.getLoggedInClimber, {
  options: (ownProps) => ({
  variables: { id: ownProps.match.params.id },
    fetchPolicy: 'network-only'
  })
})(Climber)

export default fetchedClimber