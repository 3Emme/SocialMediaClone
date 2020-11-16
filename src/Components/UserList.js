import React from "react";
import User from "./User";

const masterUserList = [
  {
    userName: 'Grandpa Steve',
    info: 'You are doing me a frighten long water shoob he made many woofs very jealous pupper mlem'
  },
  {
    userName: 'Rick',
    info: 'Many pats doge long water shoob pupperino long woofer such treat'
  },
  {
    userName: 'Crazy Uncle Rodger',
    info: 'pupperino blep wrinkler. Heckin angery woofer big ol wow such tempt, very jealous pupper.'
  }
];

function UserList() {
  return (
    <React.Fragment>

      <h1>Users</h1>
      <hr />
      {masterUserList.map((user, index) =>
        <User
          userName={user.userName}
          info={user.info}
          // button
          key={index} />
      )}
    </React.Fragment>
  )
}

export default UserList; 