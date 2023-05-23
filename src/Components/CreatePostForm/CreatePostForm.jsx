import React, { useState } from "react";

/**
 * A form component for creating a new post.
 * @param {function} handleSubmit - The function to handle the form submission.
 */
const CreatePostForm = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  return (
    <form
      className="post-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(name, post);
        setName("");
        setPost("");
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="input-box"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="post">Post</label>
      <textarea
        className="input-box"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <div className="button-container">
        <button type="submit" className="submit-button">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;
