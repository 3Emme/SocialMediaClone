import React from "react";
import PropTypes from "prop-types";


function Post(props) {
  return (
    <React.Fragment>
      <h5>{props.name}</h5>
      <p>"{props.tweet}"</p>
    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  tweet: PropTypes.string
};

export default Post;