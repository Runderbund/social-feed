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
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const post = {
      name,
      contents,
      date: `${date.getDate()} ${
        monthNames[date.getMonth()]
      } ${date.getFullYear()}`,
      // Displays as e.g., 2 June 2021
      time: `${date.getHours()}:${date.getMinutes()}`,
      // Dsiplays 24-hour time. May add logic later to handle AM/PM
      liked: false,
      disliked: false,
    };
    setPosts([post, ...posts]);
  };

  const handleLike = (index) => { // Takes the index provided in PostList.jsx
    const newPosts = [...posts]; // Creates a copy of the posts array
    newPosts[index].liked = !newPosts[index].liked; // Changes liked status of the post at the given index to the opposite status. True to false, false to true.
    setPosts(newPosts);
  };

  const handleDislike = (index) => {
    const newPosts = [...posts];
    newPosts[index].disliked = !newPosts[index].disliked;
    setPosts(newPosts);
  };

  return (
    <div className="background">
      <NavBar />
      <CreatePostForm handleSubmit={handleSubmit} />
      <PostList posts={posts} handleLike={handleLike} handleDislike={handleDislike} />
    </div>
  );
}

export default App;
