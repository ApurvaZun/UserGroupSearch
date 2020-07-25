import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

import "./card.scss";
import Card from "./Card/Card";
import Breakpoint from "../Breakpoint/breakPoint";
import * as actions from "../../store/actions/applicantactions";

class Appcard extends Component {
  componentDidMount() {
    this.props.getApplicants();

    if (this.props.query != null || this.props.query != "")
      setTimeout(() => {
        this.props.searchApp(this.props.query);
      }, 1000);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    const { applicantSearch, applicants, error } = this.props;
    const group = applicantSearch
      ? applicantSearch
      : applicants == null
      ? null
      : applicants.reduce((r, a) => {
          r[a.status] = [...(r[a.status] || []), a];
          return r;
        }, {});

    return group == null ? (
      <div className="container">
        <div> Loading.. </div>
      </div>
    ) : (
      Object.keys(group).map(status => (
        <div className="container" key={status}>
          <p className="status">{status}</p>

          <Breakpoint name="phone">
            <Slider {...settings}>
              {group[status].map(applicants => (
                <Card key={applicants.id} applicants={applicants} />
              ))}
            </Slider>
          </Breakpoint>

          <Breakpoint name="desktop">
            <div className="desktop-box">
              {group[status].map(applicants => (
                <Card key={applicants.id} applicants={applicants} />
              ))}
            </div>
          </Breakpoint>

          <Breakpoint name="tablet">
            <div className="desktop-box">
              {group[status].map(applicants => (
                <Card key={applicants.id} applicants={applicants} />
              ))}
            </div>
          </Breakpoint>
        </div>
      ))
    );
  }
}

const mapStateToProps = state => {
  return {
    applicants: state.applicants.applicants,
    applicantSearch: state.applicants.applicantSearch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getApplicants: () => dispatch(actions.getApplicants()),
    searchApp: value => {
      dispatch(actions.searchApp(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appcard);