import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
// imports thumbs up/down icons after running npm install react-icons

/**
 * A component that represents a single post.
 * @param {Object} post - The post object.
 * @param {function} handleLike - The function to handle a like action.
 * @param {function} handleDislike - The function to handle a dislike action.
 */
const Post = ({ post, handleLike, handleDislike }) => {
  return (
    <div className="post">
      <div className="post-content">
        <div>
          <b>{post.name}</b> - {post.date} - {post.time}
          <p>{post.contents}</p>
        </div>
        <div className="post-actions">
          <button className="like" onClick={handleLike}>
            <FaThumbsUp color={post.liked ? "green" : "grey"} />
          </button>
          <button className="dislike" onClick={handleDislike}>
            <FaThumbsDown color={post.disliked ? "red" : "grey"} />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Post;
