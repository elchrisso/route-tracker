import React, { Component } from 'react';
import './App.css';

import RockRouteList from './routes/RockRouteList'
import RockRouteAdd from './routes/RouteAdd'
import RockRouteEdit from './routes/RockRouteEdit'
import { Jumbotron } from 'reactstrap'
import { Route, Link, Switch } from 'react-router-dom'

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
        <Switch>
          <Route exact path="/" component={RockRouteList}/>
          <Route exact path="/rockroutedetail/:id" component={RockRouteDetail}/>
          <Route exact path="/addrockroute" component={RockRouteAdd}/>
          <Route exact path="/editrockroute" component={RockRouteEdit}/>
        </Switch>
      </div>
    );
  }
}

export default App;
