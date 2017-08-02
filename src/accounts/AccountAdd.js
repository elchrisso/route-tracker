import React, { Component } from 'react'
import { Form, Button } from  'reactstrap'

class AccountAdd extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log("i am the add account handler")
  }

  render () {
    return (
      <div>
        <h1>AccountAdd</h1>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">Create Account</Button>
        </Form>
      </div>
    )
  }
}

export default AccountAdd