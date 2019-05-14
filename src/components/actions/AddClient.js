import React, { Component } from "react";
import axios from "axios";

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
      <div>
        <h2>Add Client</h2>
        <div id="addClient">
          <div>Name:</div>

          <input
          className = "addClientInput"
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <div>Surname:</div>
          <input
            className = "addClientInput"
            type="text"
            id="surname"
            value={this.state.surname}
            onChange={this.handleInput}
          />

          <div>Country:</div>
          <input
            className = "addClientInput"
            type="text"
            id="country"
            value={this.state.country}
            onChange={this.handleInput}
          />

          <div>Owner:</div>
          <input
            className = "addClientInput"
            type="text"
            id="owner"
            value={this.state.owner}
            onChange={this.handleInput}
          />
        </div>
        <button id ="addClientButton" onClick={this.addClient}>Add New Client</button>
      </div>
    );
  }
}

export default AddClient;
