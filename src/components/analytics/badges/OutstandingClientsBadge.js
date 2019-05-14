import React, { Component } from "react";
import "../style/outBadge.css"

class OutstandingClientsBadge extends Component {
  countNotSold = () => {
    let noSold = this.props.data.filter(c => c.sold === false);
    return noSold.length;
  };

  render() {
    return (
      <div id = "out-container">
        <div id = "outBadge">
          <i className="fas fa-user-tie" />
        </div>
        <div id="out-text-container">
          <span id = "outNum">{this.countNotSold()}</span>
          <span id = "outText">Outstanding Clients</span>
        </div>
      </div>
    );
  }
}
export default OutstandingClientsBadge;


