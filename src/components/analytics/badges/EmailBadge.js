import React, { Component } from "react";
import "../style/emailBadge.css"

class EmailBadge extends Component {
  countSentEmail = () => {
    let count = this.props.data.filter(e => e.emailType);
    return count.length;
  };

  render() {
    return (
      <div id="email-container">
        <div id = "emailBadge">
          <i className="fas fa-envelope" />
        </div>
        <div id="emailText-container">
          <span id = "emailNum">{this.countSentEmail()}</span>
          <span id = "emailText">Email Sent</span>
        </div>
      </div>
    );
  }
}

export default EmailBadge;
