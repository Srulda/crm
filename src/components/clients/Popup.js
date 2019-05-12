import React, { Component } from "react";

class Popup extends Component {
    constructor(){
    super()
    this.state = {
        

    }
    }
    log = () => {console.log("hi")}

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <button onClick={this.props.closePopup}>X</button>
          <div>
              <div><input placeholder="Name" id="popName"/></div>
              <div><input placeholder="Country" id="popName"/></div>
              <div><button onClick = {this.log}>Update</button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
