import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (name, postText) => {
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
      postText,
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

  return (
    <div className="background">
      <NavBar />
      <CreatePostForm handleSubmit={handleSubmit} />
      {/* <PostList posts={posts}/> */}
      {/* posts not defined yet */}
    </div>
  );
}

export default App;
