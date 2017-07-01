import React, { Component } from 'react';
import './App.css';

import Route from './routes/RouteList'
import RouteAdd from './routes/RouteAdd'
import RouteDelete from './routes/RouteDelete'


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Hello, I am your friendly route tracking app.
        </p>
        <RouteAdd/>
        <Route/>
        <RouteDelete/>
      </div>
    );
  }
}

export default App;
