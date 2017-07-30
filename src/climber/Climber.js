import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import ClimberService from './service'

class Climber extends Component {
  constructor () {
    super ()
    this.state = {
      name: ''
    }
  }

  renderClimber (climber) {
    return (<h1>
      Welcome {climber.profile.name}
    </h1>)
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