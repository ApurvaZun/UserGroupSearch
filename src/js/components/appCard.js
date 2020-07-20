import React, { Component } from "react";
import { connect } from "react-redux";
import "./card.scss";
import Slider from "react-slick";

class Appcard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    let itemList = this.props.appointment_set.map(item => {
      const style = {
        backgroundColor: generateColor()
      };

      const initials = item.firstName.substr(0, 1) + item.lastName.substr(0, 1);

      return (
        <div className="card" key={item.id}>
          <i className="material-icons circle circle-init" style={style}>
            <span className="avatar-initials">{initials}</span>
          </i>

          <div className="card-content">
            <p className="applicant-name">
              {item.firstName} {item.lastName}
            </p>
            <p> {item.telNo} </p>
            <p>{item.email}</p>
            <p className="applicant-status">{item.status}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h5 className="center">{this.props.title}</h5>
        <Slider {...settings}>{itemList} </Slider>
      </div>
    );
  }
}

const generateColor = () => {
  return (
    "#" +
    Math.random()
      .toString(16)
      .substr(-6)
  );
};

const mapStateToProps = state => {
  return {
    appointment_set: state.appointment_set
  };
};

export default connect(mapStateToProps)(Appcard);
