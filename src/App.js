import React, { Component } from 'react';
import './App.css';

import Route from './routes/RouteList'
import RouteAdd from './routes/RouteAdd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Hello, I am your friendly route tracking app.
        </p>
        <RouteAdd/>
        <Route/>
      </div>
    );
  }
}

export default App;
