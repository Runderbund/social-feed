import React from "react";
import Post from "../Post/Post";

const PostList = ({ posts, handleLike, handleDislike }) => {
  return (
    <div className="post-form">
      {posts.map((post, index) => (
        <Post
          key={index}
          post={post}
          handleLike={() => handleLike(index)}
          handleDislike={() => handleDislike(index)}
        />
      ))}
    </div>
  );
};

export default PostList;