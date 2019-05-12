import React, { Component } from 'react';

class RowHeader extends Component {
    render() {
        return (
                 <div id = "rowHeader" >
              <span>Name</span>
              <span>Surname</span>
              <span>Country</span>
              <span>First Contact</span>
              <span>Email </span>
              <span>Sold</span>
              <span>Owner</span>
            </div>
        );
    }
}

export default RowHeader;