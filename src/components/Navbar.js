import React, { Component } from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <Link to="/clients" id="clients">
          Clients
        </Link>
        <Link to="/actions" id="actions">
          Actions{" "}
        </Link>
        <Link to="/analytics" id="analytics">
          Analytics{" "}
        </Link>
      </div>
    );
  }
}

export default Navbar;
