import React from "react";
import PropTypes from "prop-types";


function Post(props) {
  return (
    <React.Fragment>
      <div class="post">
        <div class="name">
          <h5>{props.name}</h5>
        </div>
        <p>{props.tweet}</p>
      </div>

    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  tweet: PropTypes.string
};

export default Post;