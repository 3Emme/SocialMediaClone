import React from "react";


function AddPost() {
  return (
    <React.Fragment>
      <div class="addPost">
        <form>
          <label>
            <h1>Type your post!</h1>
            <input type="text" name="post" />
          </label>
          <input type="submit" value="Post" />
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddPost; 