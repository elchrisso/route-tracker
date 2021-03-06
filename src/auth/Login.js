import './Login.css'
import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBlock, Alert } from 'reactstrap'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import AuthService from './service'
import { loginSuccess, loginError } from './actions'
import LoginForm from './LoginForm'

class Login extends Component {

  handleLoginAttempt = (data) => {
    this.props.mutate({
      variables: data
    }).then((response) => {
      this.props.dispatch(loginSuccess(response.data.signinUser.token))
    }).catch((error) => {
      this.props.dispatch(loginError(error.message))
    })
  }

  render () {
    // if (this.props.token !== null) {
    //   return <Redirect to="/app"/>
    // }

    let errorMessage = null
    if (this.props.error !== null) {
      errorMessage = <Alert color="danger">{this.props.error}</Alert>
    }

    let justSignedUp = null
    if (this.props.signedUp) {
      justSignedUp = <Alert color="success">Welcome!  Log in below.</Alert>
    }

    return (
      <Container className="login-container">
        <Row>
          <Col>
            <Card>
              <CardHeader>Login</CardHeader>
              <CardBlock>
                {justSignedUp}
                {errorMessage}
                <LoginForm loading={false} onSubmit={this.handleLoginAttempt}/>
              </CardBlock>
            </Card>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    loggingIn: state.auth.loggingIn,
    signedUp: state.auth.signedUp,
    token: state.auth.token
  }
}

const withLoginUserMutation = graphql(AuthService.loginUser)(Login)
const withReduxConnection = connect(mapStateToProps)(withLoginUserMutation)

export default withReduxConnection
