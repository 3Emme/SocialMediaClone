import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PostList from "./PostList";
import UserPanel from "./UserPanel";
import AddPost from "./AddPost";
import UserList from "./UserList";


function App() {
  return (
    <React.Fragment>
      <Header />
      <UserPanel />
      <UserList />
      <AddPost />
      <PostList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
