import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (name, contents) => {
    const date = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December",
    ];
    const minutes = date.getMinutes().toString().padStart(2, "0");
    // Adds a leading 0 to minutes if minutes is less than 10. E.g., shows 17:07 instead of 17:7.

    /**
     * Creates a new post object with the given name, contents, current date/time, and liked/disliked status.
     */
    const post = {
      name,
      contents,
      date: `${date.getDate()} ${
        monthNames[date.getMonth()]
      } ${date.getFullYear()}`,
      // Displays as e.g., 2 June 2021
      time: `${date.getHours()}:${minutes}`,
      // Displays 24-hour time.
      liked: false,
      disliked: false,
    };
    setPosts([post, ...posts]);
  };

  /**
   * Sets "Liked" status to the opposite of its current value when clicked.
   * @param {int} index - The index of the post in the posts array.
   */
  const handleLike = (index) => {
    const newPosts = [...posts]; // Creates a copy of the posts array
    newPosts[index].liked = !newPosts[index].liked; // Changes liked status of the post at the given index/key to the opposite status: true to false, false to true.
    setPosts(newPosts);
  };

   /**
   * Sets "Disliked" status to the opposite of its current value when clicked.
   * @param {int} index - The index of the post in the posts array.
   */
  const handleDislike = (index) => {
    const newPosts = [...posts];
    newPosts[index].disliked = !newPosts[index].disliked;
    setPosts(newPosts);
  };
  // These are here, instead of intead of Post, to allow passing directly to PostList.jsx below

  return (
    <div className="background">
      <NavBar />
      <CreatePostForm handleSubmit={handleSubmit} />
      <PostList
        posts={posts}
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
    </div>
  );
}

export default App;

//TODO: Add docstrings to all functions
//TODO: Make Like/Dislike mutually exclusive

//TODO (Maybe): Restyle CreatePostForm to match picture