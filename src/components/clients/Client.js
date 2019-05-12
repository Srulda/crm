import React, { Component } from "react";
import RowClient from "./RowClient";
import data from "./data";
import RowHeader from "./RowHeader";

class Client extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchInput: "",
      selectInput: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      data: data
    });
  };

  handleInput = e => {
    let inputValue = e.target.value;
    this.setState({
      [e.target.id]: inputValue
    });
  };

  displayFiltered = () => {
    const searchData = [...this.state.data];
    const options = searchData.filter(n =>
      n[this.state.selectInput]
        .toUpperCase()
        .toLowerCase()
        .includes(this.state.searchInput)
    );
    return options.map(c => <RowClient client={c} key={c.id} />);
  };

  displayAll = () => {
    return this.state.data.map(c => <RowClient client={c} key={c.id} />);
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
            <option value="name">name</option>
            <option value="country">country</option>
            <option value="email">email</option>
            <option value="owner">owner</option>
          </select>
        </div>
        <RowHeader />
        {this.displayClients()}
      </div>
    );
  }
}

export default Client;
