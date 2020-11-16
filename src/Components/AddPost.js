import React from "react";


function AddPost() {
  return (
    <React.Fragment>
      <hr />
      <form>
        <label>
          <h1>Type your post!</h1>
          <input type="text" name="post" />
        </label>
        <input type="submit" value="Post" />
      </form>
    </React.Fragment>
  )
}

export default AddPost; 