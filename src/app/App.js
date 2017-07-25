import React, { Component } from 'react';
//import './App.css';

import { Route, Switch } from 'react-router-dom'

import RockRouteList from '../routes/RockRouteList'
import RockRouteAdd from '../routes/RouteAdd'
import RockRouteEdit from '../routes/RockRouteEdit'
import RockRouteDetail from '../routes/RockRouteDetail'
import Login from '../auth/Login'
import AppHeader from '../header/AppHeader'
import Auth from '../auth/Auth'




class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Auth}/>
          <Route exact path="/rockroutedetail/:id" component={RockRouteDetail}/>
          <Route exact path="/addrockroute" component={RockRouteAdd}/>
          <Route exact path="/rockroutedetail/:id/edit" component={RockRouteEdit}/>
        </Switch>
      </div>
    );
  }
}

export default App;
