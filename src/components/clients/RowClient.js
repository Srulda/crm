import React, { Component } from 'react';
import Popup from './Popup';

class RowClient extends Component {
    constructor(){
        super()
        this.state = {
            showPopup: false
          }
    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        })
      }

     render() {
        return (
            <div id = "row" onClick = {this.togglePopup.bind(this)} >
              <span>{this.props.client.name}</span>   
              <span>{this.props.client.country}</span>   
              <span>{this.props.client.firstContact}</span>   
              <span>{this.props.client.emailType}</span>   
              <span>{this.props.client.sold? "V" : "X"}</span>   
              <span>{this.props.client.owner}</span>   

              {this.state.showPopup ? 
          <Popup
            closePopup ={this.togglePopup.bind(this)}
          />
          : null
        }
            </div>
        )
    }
}

export default RowClient;