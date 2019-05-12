import React, { Component } from "react";
import Popup from "./Popup";

class RowClient extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  getFormmatedDate = date => {
    date = new Date(date);
    let day = date.getDate() - 1;
    const month = date.toLocaleString('en-us', { month: 'long' });
    let year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const fullName = this.props.client.name.split(" "),
      first = fullName[0],
      last = fullName[1],
      country = this.props.client.country,
      firstContact = this.props.client.firstContact,
      email = this.props.client.emailType,
      sold = this.props.client.sold ? <i className = "fas fa-check"/> : "-",
      owner = this.props.client.owner;

    return (
      <div id="row" onClick={this.togglePopup.bind(this)}>
        <span>{first}</span>
        <span>{last}</span>
        <span>{country}</span>
        <span>{this.getFormmatedDate(firstContact)}</span>
        <span>{email}</span>
        <span>{sold}</span>
        <span>{owner}</span>

        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default RowClient;
