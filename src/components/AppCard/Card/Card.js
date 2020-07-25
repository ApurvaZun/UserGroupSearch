import React from "react";

const Card = props => {
  return (
    <div className="card">
      <span
        className="material-icons circle circle-init"
        style={generateColor()}
      >
        <span className="avatar-initials">
          {props.applicants.firstName.substr(0, 1) +
            props.applicants.lastName.substr(0, 1)}
        </span>
      </span>
      <div className="card-content">
        <p className="applicant-name">
          {props.applicants.firstName} {props.applicants.lastName}
        </p>
        <p> {props.applicants.telNo} </p> <p>{props.applicants.email}</p>
        <p className="applicant-status">{props.applicants.status}</p>
      </div>
    </div>
  );
};

const generateColor = () => {
  return {
    background:
      "#" +
      Math.random()
        .toString(16)
        .substr(-6)
  };
};

export default Card;
