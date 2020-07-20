import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleInputChange(events) {
    debugger;
    const query = event.target.value;
    this.setState({
      value: query
    });
  }

  render() {
    return (
      <div className="container">
        <h5> Applicants </h5>
        <form>
          <input
            placeholder="Search for applicant"
            className="search-applicant"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </form>
        <span> Bids </span> &nbsp;
        <span> Status </span>
      </div>
    );
  }
}

export default Header;
