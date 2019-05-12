import React, { Component } from "react";
import RowClient from "./RowClient";
import RowHeader from "./RowHeader";
import axios from 'axios'

class Client extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchInput: "",
      selectInput: "name"
    };
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
 
handleInput = e => {
    let inputValue = e.target.value;
    this.setState({
      [e.target.id]: inputValue
    })
  }

  displayFiltered = () => {
    const searchData = [...this.state.data];
    const options = searchData.filter(n =>
      n[this.state.selectInput]
        .toUpperCase()
        .toLowerCase()
        .includes(this.state.searchInput)
    )
    return options.map(c => <RowClient key={c._id} client={c}  />);
  }

  displayAll = () => {
    return this.state.data.map(c => <RowClient key={c._id} client={c}  />);
  };

  displayClients = () => {
   return this.state.searchInput === "" ? this.displayAll() : this.displayFiltered();
  };

  render() {
    return (
      <div>
       <div id="search-nav">
         <input
            placeholder="Search"
            id="searchInput"
            value={this.state.searchInput}
            onChange={this.handleInput}
          />
          <select id="selectInput" onChange={this.handleInput}>
            <option value="name">Name</option>
            <option value="country">Country</option>
            <option value="owner">Owner</option>
          </select>
        </div>
        <RowHeader />
        {this.displayClients()}
      </div>
    );
  }
}

export default Client;
