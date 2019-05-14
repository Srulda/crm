import React, { Component } from "react";
import "../style/popup.css";
import axios from "axios";

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surName: "",
      country: ""
    };
  }

  editClient = async () => {
    let c = this.props.client;
    c.name = `${this.state.name} ${this.state.surName}`;
    c.country = this.state.country;
    await axios.put(`http://localhost:5515/client/${c._id}`, c);
    this.props.closePopup();
  };
  handleInput = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div>
            <button id="closePopup" onClick={this.props.closePopup}>
              <i className="fas fa-times" />
            </button>
          </div>
          <div id="input-container">
            <div className="popText"> Name : </div>
            <div>
              <input
                className="popInput"
                placeholder={this.props.name}
                value={this.state.name}
                id="name"
                onChange={this.handleInput}
              />
            </div>
            <div className="popText"> Surname : </div>
            <div>
              <input
                className="popInput"
                placeholder={this.props.surName}
                value={this.state.surName}
                id="surName"
                onChange={this.handleInput}
              />
            </div>
            <div className="popText"> Country : </div>
            <div>
              <input
                className="popInput"
                placeholder={this.props.country}
                value={this.state.country}
                id="country"
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div>
            <button id="updatePopup" onClick={this.editClient}>
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
