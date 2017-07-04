import React, { Component } from 'react';
import './App.css';

import RockRouteList from './routes/RockRouteList'
import RockRouteAdd from './routes/RouteAdd'
import { Jumbotron } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'

import RockRouteDetail from './routes/RockRouteDetail'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron >
          <h1>Hello</h1>
          <hr className="my-4"/>
          <h4>I am your friendly route tracking app, keeping grades soft since 2017.</h4>
        </Jumbotron>
        <RockRouteAdd/>
        <Switch>
          <Route exact path="/" component={RockRouteList}/>
          <Route exact path="/rockroutedetail" component={RockRouteDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
