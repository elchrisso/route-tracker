import React, { Component } from 'react';
import './App.css';

import Route from './routes/RouteList'
import RouteAdd from './routes/RouteAdd'
import { Jumbotron } from 'reactstrap'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron >
          <h1>Hello</h1>
          <hr className="my-4"/>
          <h4>I am your friendly route tracking app, keeping grades soft since 2017.</h4>
        </Jumbotron>
        <RouteAdd/>
        <Route/>
      </div>
    );
  }
}

export default App;
