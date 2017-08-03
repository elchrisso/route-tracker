import React, { Component } from 'react'
import { Form, Input, Button } from  'reactstrap'
import { graphql } from 'react-apollo'

import AccountsService from './service'

class AccountAdd extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleAddAccount = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    })
  }

  render () {
    return (
      <div>
        <h1>AccountAdd</h1>
        <Form onSubmit={this.handleAddAccount}>
          <Input type="text" placeholder="name" onChange={(evt) => this.setState({ name: evt.target.value })} />
          <Input type="text" placeholder="email" onChange={(evt) => this.setState({ email: evt.target.value })} />
          <Input type="text" placeholder="password" onChange={(evt) => this.setState({ password: evt.target.value })} />
          <Button type="submit">Create Account</Button>
        </Form>
      </div>
    )
  }
}

export default graphql(AccountsService.addNewAccount)(AccountAdd)