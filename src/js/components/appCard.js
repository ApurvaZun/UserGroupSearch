import React, { Component } from "react";
import { connect } from "react-redux";
import "./card.scss";
import Slider from "react-slick";

class Appcard extends Component {
  generateColor() {
    return {
      background:
        "#" +
        Math.random()
          .toString(16)
          .substr(-6)
    };
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

    const group =
      this.props.applicantSearch.length !== 0
        ? this.props.applicantSearch
        : this.props.applicants.reduce((r, a) => {
            r[a.status] = [...(r[a.status] || []), a];
            return r;
          }, {});

    return Object.keys(group).map(status => (
      <div className="container" key={status}>
        <h5>{status}</h5>
        <Slider {...settings}>
          {group[status].map(applicants => (
            <div className="card" key={applicants.id}>
              <i
                className="material-icons circle circle-init"
                style={this.generateColor()}
              >
                <span className="avatar-initials">
                  {applicants.firstName.substr(0, 1) +
                    applicants.lastName.substr(0, 1)}
                </span>
              </i>
              <div className="card-content">
                <p className="applicant-name">
                  {applicants.firstName} {applicants.lastName}
                </p>
                <p> {applicants.telNo} </p> <p>{applicants.email}</p>
                <p className="applicant-status">{applicants.status}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    ));
  }
}

const mapStateToProps = state => {
  return {
    applicants: state.applicants,
    applicantSearch: state.applicantSearch
  };
};

export default connect(mapStateToProps)(Appcard);
