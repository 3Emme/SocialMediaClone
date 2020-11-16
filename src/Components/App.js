import React from "react";
import Header from "./Header";
import PostList from "./PostList";
import UserPanel from "./UserPanel";
import AddPost from "./AddPost";
import UserList from "./UserList";


function App() {
  return (
    <React.Fragment>
      <Header />
      <UserPanel />
      <AddPost />
      <PostList />
      <UserList />
    </React.Fragment>
  );
}

export default App;
