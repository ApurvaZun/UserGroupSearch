import React, { Component } from "react";
import "./header.scss";
import { connect } from "react-redux";
import { searchApp } from "./actions/applicantactions";

class Header extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(events) {
    this.props.searchApp(events.target.value);
  }

  render() {
    return (
      <div className="container">
        <h5> Applicants </h5>
        <form>
          <input
            placeholder="Search for applicant"
            className="search-applicant"
            onChange={this.handleInputChange}
          />
        </form>
        <span> Bids </span> &nbsp;
        <span> Status </span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchApp: value => {
      dispatch(searchApp(value));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
