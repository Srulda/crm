import React, { Component } from "react";
import "../style/hottest.css"

class HottestBadge extends Component {
  findHottestCountry = () => {
    const countryObj = {};

    this.props.data.forEach(c => {
      countryObj[c.country] = 0;
    });
    this.props.data.forEach(c => {
      if (c.sold) countryObj[c.country]++;
    });
  };

  render() {
    return (
      <div id="hot-container">
        <div id="hotBadge">
          <i className="fas fa-globe-americas" />
        </div>
        <div id="hot-text-container">
          <span id="hotNum">France</span>
          <span id="hotText">Hottest Country</span>
        </div>
      </div>
    );
  }
}

export default HottestBadge;
