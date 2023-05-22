import React from "react";

const Post = (post) => {
        // add handleLike, handleDislike once written
    return (
        <div className="post">
            <b>Name</b>
            <p>Post content</p>
            <button>Like</button>
            <button>Dislike</button>
            <hr />
        </div>
    );    
};
export default Post;