import React from "react";
import User from "./User";



function UserPanel(props) {
  return (
    <React.Fragment>
      <div class="userPanel">
        <img id="headshot" src="https://www.ricksteves.com/about-rick/mini-rick-steves-binoculars-nyt-photo-114.jpg"></img>
        <h3>Rick Steeves</h3>
        <p>Traveler, rocker, crocheter</p>
        <h4><a href="null">27 Tweets</a> <a href="null">15 Following</a> <a href="null">23 Followers</a></h4>
      </div>
    </React.Fragment>
  );
}
export default UserPanel; 