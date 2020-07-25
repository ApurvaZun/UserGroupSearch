import React, { Component } from "react";
import "./header.scss";
import { connect } from "react-redux";

import { searchApp } from "../../store/actions/applicantactions";
import Breakpoint from "../Breakpoint/breakPoint";

function setParams({ query }) {
  const searchParams = new URLSearchParams();
  searchParams.set("query", query || "");
  return searchParams.toString();
}

class Header extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(events) {
    //update URL on search
    const queryVal = events.target.value;
    const url = setParams({ query: queryVal });
    this.props.history.push(`?${url}`);

    //dispatch searchApp action to update applicantSearch
    this.props.searchApp(queryVal);
  }

  render() {
    return (
      <div className="container">
        <h5> Applicants </h5>
        <div className="desktop-box">
          <form>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              placeholder="Search for applicant"
              className="search-applicant "
              onChange={this.handleInputChange}
            />
            <span className="button-bid">
              {" "}
              Bids <i className="fa fa-caret-down"></i>
            </span>{" "}
            &nbsp;
            <span className="button-bid">
              {" "}
              Status <i className="fa fa-caret-down"></i>
            </span>
          </form>
        </div>
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
