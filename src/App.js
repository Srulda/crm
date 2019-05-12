import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Actions from "./components/actions/Actions";
import Analytics from "./components/analytics/Analytics";
import Navbar from "./components/Navbar";
import Client from "./components/clients/Clients";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/clients" component={Client} />
        <Route exact path="/actions" component={Actions} />
        <Route exact path="/analytics" component={Analytics} />
      </Router>
    );
  }
}

export default App;
