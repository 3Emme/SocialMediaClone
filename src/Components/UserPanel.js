import React from "react";
import User from "./User";



function UserPanel(props) {
  return (
    <React.Fragment>
      <h3>{props.userName}</h3>
      <p>{props.info}</p>
      <h4><a href="null">Tweets</a> <a href="null">Following</a> <a href="null">Followers</a></h4>
    </React.Fragment>
  );
}
export default UserPanel; 