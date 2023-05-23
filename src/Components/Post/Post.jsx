import React from "react";

const Post = ({post, handleLike, handleDislike}) => {
    return (
        <div className="post">
            <b>{post.name}</b> - {post.date} - {post.time}
            <p>{post.contents}</p>
            <button className="like" style={{color: post.liked ? 'blue' : 'grey'}} onClick={handleLike}>Like</button>
            {/* Checks whether the post is currently liked. If true, sets value to blue, if false, sets to grey */}
            <button className="dislike" style={{color: post.disliked ? 'red' : 'grey'}} onClick={handleDislike}>Dislike</button>
            <hr />
        </div>
    );    
};
export default Post;