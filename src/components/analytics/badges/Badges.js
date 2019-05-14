import React, { Component } from 'react';
import NewClientBadge from './NewClientBadge';
import EmailBadge from './EmailBadge';
import HottestBadge from './HottestBadge';
import OutstandingClientsBadge from './OutstandingClientsBadge';
import "../../style/analytics.css";

class Badges extends Component {



    render() {
        return (
            <div id = "badges-container">
              <div><NewClientBadge data = {this.props.data}/></div>  
              <div><EmailBadge data = {this.props.data}/></div>    
              <div><OutstandingClientsBadge data = {this.props.data} /></div>     
              <div> <HottestBadge data = {this.props.data} /></div>  
            </div>
        );
    }
}

export default Badges;