import React from "react";
import Post from "../Post/Post";

const PostList = (posts) => {
    // add handleLike, handleDislike once written
  return (
    <div className="post-form">
      {posts.map((post, index) => (
        <Post
            key={index}
            post={post}
        />
      ))}
    </div>
  );
};

export default PostList;