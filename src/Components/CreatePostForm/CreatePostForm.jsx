import React, { useState } from "react";

const CreatePostForm = () => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  return (
    <form className="post-form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value="" /><br/>
      <label htmlFor="post">Post</label>
      <input type="textarea" id="post" name="post" value="" />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePostForm;
