import React, { Component } from "react";
import axios from "axios";
import "../style/actions.css";
class Update extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      clientName: "",
      transfer: "",
      sendEmail: "",
      owner: "",
      updatedOwner: false,
      updatedEmail: false,
      updatedDeclaration: false
    };
  }

  getDataFromDB = async () => {
    let clientsData = await axios.get("http://localhost:5515/clients/actions");
    this.setState({
      data: clientsData.data
    });
  };

  componentDidMount = () => {
    this.getDataFromDB();
  };

  findCorrectID = () => {
    let client = this.state.data.find(c => c.name === this.state.clientName);
    return client._id;
  };

  updateOwner = async () => {
    if(this.state.clientName){
      await axios.put(
        `http://localhost:5515/owner/${this.findCorrectID()}/${
          this.state.transfer
        }`)
      this.setState({ updatedOwner: true , transfer : "", clientName : "" });
    }else{
      alert("Please Insert Client Name")
    }
    }
    

  updateEmail = async () => {
   if (this.state.clientName){
    await axios.put(
      `http://localhost:5515/email/${this.findCorrectID()}/${
        this.state.sendEmail
      }`
    );
    this.setState({ updatedEmail: true, sendEmail : "", clientName : "" });
  }else{
    alert("Please Insert Client Name")
  }
}
  

  declareSale = async () => {
    if (this.state.clientName){
    await axios.put(`http://localhost:5515/declare/${this.findCorrectID()}`);
    this.setState({ updatedDeclaration: true , clientName : "" });
  }else{
    alert("Please Insert Client Name")
  }
}

  getOwners = () => {
    let owners = new Set();
    this.state.data.map(o => owners.add(o.owner));
    let ownersArray = Array.from(owners);
    return ownersArray;
  };

  handleInput = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div id="Update">
        <h3>Update</h3>
        <div className="updateWrapper">
          Client
          <input
            placeholder="Client Name"
            id="clientName"
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
        <div className="updateWrapper">
          Transfer ownership to
          <input
            placeholder="Owner Name"
            id="transfer"
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
          <div className = {this.state.updatedOwner? "done" : "update-btn-text"} onClick={this.updateOwner}>TRANSFER</div><span id = "TRANSFER"></span>
        </div>
        <div className="updateWrapper">
          Send Email
          <input
            list = "email"
            id="sendEmail"
            placeholder="Email Type"
            onChange={this.handleInput}
            className="selectInput"
          />
          <datalist id = "email">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            </datalist>

          <div className = {this.state.updatedEmail? "done" : "update-btn-text"} onClick={this.updateEmail}>SEND</div><span id = "SEND"></span>
        </div>
        <div className="updateWrapper">
          Declare sale!
          <div></div>
          <div className = {this.state.updatedDeclaration? "done" : "update-btn-text"} id= "declare" onClick={this.declareSale}>DECLARE</div><span id = "DECLARE"></span>
        </div>
      </div>
    );
  }
}

export default Update;
