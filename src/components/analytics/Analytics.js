import React, { Component } from 'react';
import Badges from './badges/Badges';
import Charts from './charts/Charts';
import axios from 'axios'
import "../analytics/style/analytics.css"

class Analytics extends Component {
    constructor(){
     super()
     this.state = {
         data : []
     }   
    }
    componentDidMount = () => {
        this.getDataFromDB()
      }
    
      getDataFromDB = async () => {
        let clientsData = await axios.get('http://localhost:5515/clients')
        this.setState({
          data : clientsData.data
        })
    }


    render() {
        return (
            <div>
            <div id = "analytics-container">
            <div><Badges data = {this.state.data}/></div>  
               <div><Charts data = {this.state.data}/></div>
              </div>
              </div>
        );
    }
}

export default Analytics;