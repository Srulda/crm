import React, { Component } from "react";
import axios from "axios";
import "../style/actions.css";

class AddClient extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      country: "",
      owner: ""
    };
  }

  addClient = async () => {
    let newClient = {
      name: `${this.state.name} ${this.state.surname}`,
      email: "",
      firstContact: Date.now(),
      emailType: null,
      sold: false,
      owner: this.state.owner,
      country: this.state.country
      }
    await axios.post("http://localhost:5515/client", newClient)
  }

  handleInput = e => {
    let inputValue = e.target.value;
    this.setState({
      [e.target.id]: inputValue
    });
  };
  render() {
    return (
      <div id = "Add-client">
        <h3>Add Client</h3>
        <div id="addClient">
          <div className = "addwrapper" >
          First Name: 
          <input
          className = "addClientInput"
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleInput}
          /> </div>
          <div className = "addwrapper">Surname:
          <input
            className = "addClientInput"
            type="text"
            id="surname"
            value={this.state.surname}
            onChange={this.handleInput}
          /></div>

          <div className = "addwrapper">Country:
          <input
            className = "addClientInput"
            type="text"
            id="country"
            value={this.state.country}
            onChange={this.handleInput}
          /></div>

          <div className = "addwrapper">Owner:
          <input
            className = "addClientInput"
            type="text"
            id="owner"
            value={this.state.owner}
            onChange={this.handleInput}
          /></div>
        </div>
        <button id ="addClientButton" onClick={this.addClient}>Add New Client</button>
      </div>
    );
  }
}

export default AddClient;
