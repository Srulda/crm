import React, { Component } from "react";
import axios from "axios";

class Update extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      clientName: "",
      transfer: "",
      sendEmail: ""
    };
  }
  componentDidMount = () => {
    this.getDataFromDB();
  };

  getDataFromDB = async () => {
    let clientsData = await axios.get("http://localhost:5515/clients/actions");
    this.setState({
      data: clientsData.data
    });
  };

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
        <div>
          Client
          <input
            list="client"
            type="text"
            id="lientlientName"
            value={this.state.name}
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
            list="owner"
            type="text"
            id="lientlientName"
            value={this.state.transfer}
            onChange={this.handleInput}
          />
          <datalist id="owner">
            {this.getOwners().map((o, i) => (
              <option value={o} key={i} />
            ))}
          </datalist>
          <button>Transfer</button>
        </div>
        <div>
          Send Email
          <select id="sendEmail">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          <button>Send</button>
        </div>
        <div>
          Declare sale!
          <button>Declare</button>
        </div>
      </div>
    );
  }
}

export default Update;
