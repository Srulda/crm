import React, { Component } from 'react';
import '../style/rowHeader.css'

class RowHeader extends Component {
    render() {
        return (
                 <div id = "rowHeader" >
              <span id ="nameHeader">Name</span>
              <span>Surname</span>
              <span>Country</span>
              <span>First Contact</span>
              <span>Email Type</span>
              <span>Sold</span>
              <span>Owner</span>
            </div>
        );
    }
}

export default RowHeader;