import React, { Component } from "react";
import "../style/popup.css";

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surName: "",
      country: ""
    };
  }

  handleInput = e => {
    let inputValue = e.target.value;
    this.setState({
      [e.target.id]: inputValue
    });
  };

  log = () => {
    console.log("hi");
  };

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div>
           <button id = "closePopup" onClick={this.props.closePopup}>
              <i className="fas fa-times" />
            </button>
          </div>
          <div id="input-container">
            <div className="popText"> Name : </div>
            <div>
              <input className="popInput" placeholder="Stacy" id="name" />
            </div>
            <div className="popText"> Surname : </div>
            <div>
              <input className="popInput" placeholder="Morton" id="surName" />
            </div>
            <div className="popText"> Country : </div>
            <div>
              <input className="popInput" placeholder="France" id="country" />
            </div>
          </div>
          <div>
            <button id="updatePopup" onClick={this.log}>
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;

