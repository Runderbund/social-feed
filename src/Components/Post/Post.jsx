import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
// imports thumbs up/down icons after running npm install react-icons

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
