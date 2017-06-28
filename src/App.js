import React, { Component } from 'react';
import './App.css';

import Route from './Route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Hello, I am your friendly route tracking app.
        </p>
        <Route/>
      </div>
    );
  }
}

export default App;
