import React from "react";

const Card = props => {
  const { firstName, lastName, telNo, email, status, bid } = props.applicants;

  return (
    <div className="card">
      <span
        className="material-icons circle circle-init"
        style={generateColor()}
      >
        <span className="avatar-initials">
          {firstName.substr(0, 1) + lastName.substr(0, 1)}
        </span>
      </span>
      <div className="card-content">
        <p className="applicant-name">
          {firstName} {lastName}
        </p>
        <p> {telNo} </p> <p>{email}</p>
        <p className="applicant-status">{status}</p>
        <br />
        {bid != null ? (
          <p className="applicant-bid">
            {" "}
            BID {bid.amount} {bid.currency}{" "}
          </p>
        ) : null}
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
