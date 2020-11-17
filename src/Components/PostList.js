import React from "react";
import Post from "./Post";

const masterPostList = [
  {
    name: 'Grandpa Steve',
    tweet: 'You are doing me a frighten long water shoob he made many woofs very jealous pupper mlem'
  },
  {
    name: 'Rick',
    tweet: 'Many pats doge long water shoob pupperino long woofer such treat'
  },
  {
    name: 'Bobby',
    tweet: 'Wow such tempt doggorino wow very biscit borkf'
  },
  {
    name: 'Crazy Uncle Rodger',
    tweet: 'pupperino blep wrinkler. Heckin angery woofer big ol wow such tempt, very jealous pupper.'
  }
];

function PostList() {
  return (
    <React.Fragment>
      <div class="postListBox">
        <h1>Post List</h1>
        <hr />
        {masterPostList.map((post, index) =>
          <Post // JSX tags being used props to child component which is the Post
            tweet={post.tweet}
            name={post.name}
            key={index} />
        )}
      </div>
    </React.Fragment>
  )
}

export default PostList; 