import React, { Component } from "react";
import axios from "axios";
import "../style/actions.css";
import { set } from "mongoose";

class Update extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      clientName: "",
      transfer: "",
      sendEmail: "",
      updatedOwner : false,
      updatedEmail : false,
      updatedDeclaration : false,
      owner : "Janice Alvarado"
    }
  }

  getDataFromDB = async () => {
    let clientsData = await axios.get("http://localhost:5515/clients/actions");
    this.setState({
      data: clientsData.data
    });
  };

  componentDidMount = () => {
    this.getDataFromDB();
  }

  findCorrectID = () => {
     let client =  this.state.data.find(c => c.name === this.state.clientName)
      return client._id
    }

  updateOwner = async () => {
    await axios.put(`http://localhost:5515/owner/${this.findCorrectID()}/${this.state.transfer}`)
    this.setState({ updatedOwner: true })
}

  updateEmail = async () => {
    await axios.put(`http://localhost:5515/email/${this.findCorrectID()}/${this.state.sendEmail}`)
    this.setState({ updatedEmail: true })
}

  declareSale = async () => {
    await axios.put(`http://localhost:5515/declare/${this.findCorrectID()}`)
    this.setState({ updatedDeclaration: true })
}

  getOwners = () => {
    let owners = new Set();
    this.state.data.map(o => owners.add(o.owner))
    let ownersArray = Array.from(owners)
    return ownersArray
  };

  handleInput = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Update</h2>
        <div id = "update-container">
          Client
          <input
            id = "clientName"
            list="client"
            type="text"
            className="selectInput"
            value={this.state.clientName}
            onChange={this.handleInput}
          />
          <datalist id="client">
            {this.state.data.map(n => (
              <option value={n.name} key={n._id} />
            ))}
          </datalist>
        </div>
        <div>
          Transfer ownership to
          <input
            id = "transfer"
            list="owner"
            type="text"
            className="selectInput"
            value={this.state.transfer}
            onChange={this.handleInput}
          />
          <datalist id="owner">
            {this.getOwners().map((o, i) => (
              <option value={o} key={i} />
            ))}
          </datalist>
          <button onClick = {this.updateOwner}>Transfer</button>
        </div>
        <div>
          Send Email
          <select id = "sendEmail" onChange={this.handleInput} className="selectInput">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          <button onClick={this.updateEmail}>Send</button>
        </div>
        <div>
          Declare sale!
          <button onClick = {this.declareSale} >Declare</button>
        </div>
      </div>
    );
  }
}

export default Update;
