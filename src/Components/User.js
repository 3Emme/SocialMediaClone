import React from "react";
import PropTypes from "prop-types";

function User(props) {
  return (
    <React.Fragment>
      <h5>{props.userName}</h5>
      <p>{props.info}</p>
      <hr />
    </React.Fragment>
  );
}

User.propTypes = {
  userName: PropTypes.string,
  info: PropTypes.string
};

export default User;