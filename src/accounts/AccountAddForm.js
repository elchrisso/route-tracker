import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AccountAddForm extends Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }


  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.onSubmit(this.state)
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name">username</Label>
          <Input type="text" id="name" onChange={(evt) => this.setState({ name: evt.target.value }) } required />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input type="text" id="email" onChange={(evt) => this.setState({ email: evt.target.value }) } required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" id="password" onChange={(evt) => this.setState({ password: evt.target.value }) } required />
        </FormGroup>
        <Button type="submit" color="success">Create Account</Button>
      </Form>
    )
  }
}

AccountAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AccountAddForm