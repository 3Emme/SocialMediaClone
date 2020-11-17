import React from "react";
import PropTypes from "prop-types";

function User(props) {
  return (
    <React.Fragment>
      <div class="userBox">
        <h5>{props.userName}</h5>
        {/* <p>{props.info}</p> */}
        <button type="button">Click Me!</button>
      </div>
    </React.Fragment>
  );
}

User.propTypes = {
  userName: PropTypes.string,
  info: PropTypes.string
};

export default User;