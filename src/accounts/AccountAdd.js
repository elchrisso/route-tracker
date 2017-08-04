import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBlock, Alert } from  'reactstrap'
import { graphql } from 'react-apollo'
import AccountAddForm from './AccountAddForm'
import { NavLink } from 'react-router-dom'

import AccountsService from './service'
import './AccountAdd.css'

class AccountAdd extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleAddAccount = (data) => {
    this.props.mutate({
      variables: data
    }).then(console.log("user added"))
      .catch(console.log("failed to add user"))
  }

  render () {
    return (
      <Container className="accountAdd-container">
        <Row>
          <Col>
            <Card>
              <CardHeader>Add your account here</CardHeader>
              <CardBlock>
                <AccountAddForm onSubmit={this.handleAddAccount}/>
                <NavLink to="/login">Back to Login</NavLink>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default graphql(AccountsService.addNewAccount)(AccountAdd)