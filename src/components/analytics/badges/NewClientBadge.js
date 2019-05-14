import React, { Component } from "react";
import "../style/NewClientBadge.css"

class NewClientBadge extends Component {
    
  getFormmatedDate = date => {
    date = new Date(date);
    let month = date.toLocaleString('en-us', { month: 'long' })
    let year = date.getFullYear();
    return `${year}${month}`;
  };

  totalNewClients = () => {
    let filtered = this.props.data.filter(
      d =>
        this.getFormmatedDate(Date.now()) ===
        this.getFormmatedDate(d.firstContact)
    );
    return filtered.length;
  };

  render() {
    return <div id = "newClient-container">
        <div id = "newClientBadge"><i className="fas fa-chart-line"></i></div>
        <div id = "newClientText">
            <span id = "leftBNum">{this.totalNewClients()}</span>
            <span id = "leftBText">New {this.getFormmatedDate(Date.now()).substring(4)} Clients</span>
        </div>
    </div>
  }
}

export default NewClientBadge;
