import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Client from './components/clients/Client';
import Actions from './components/actions/Actions';
import Analytics from './components/analytics/Analytics';


class App extends Component {
  render() {
    return (
        <Router>
        <div id="main-links">
          <Link to="/client" id= "client" >Client</Link>
          <Link to="/actions" id= "actions">Actions </Link>
          <Link to="/analytics" id= "analytics">Analytics  </Link>
        </div>
        <Route exact path="/client" component={Client} />
        <Route exact path="/actions" component={Actions} />
        <Route exact path="/analytics" component={Analytics} />
  </Router>
    )
  }
}

export default App;


