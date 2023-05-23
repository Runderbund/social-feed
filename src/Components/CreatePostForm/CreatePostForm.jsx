import React, { useState } from "react";

const CreatePostForm = () => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  return (
    <form className="post-form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/><br/>
      <label htmlFor="post">Post</label>
      <textarea value={post} onChange={e => setPost(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePostForm;
