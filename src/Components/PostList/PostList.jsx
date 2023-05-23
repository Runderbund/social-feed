import React from "react";
import Post from "../Post/Post";

/**
 * A component that generates a list of Post components.
 * @param {Array} posts - The array of post objects.
 * @param {function} handleLike - The function to handle like actions.
 * @param {function} handleDislike - The function to handle dislike actions.
 */
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