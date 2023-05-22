import React, {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import './App.css';

function App() {
  return (
    <div className='background'>
      <NavBar />
    </div>

  );
}

export default App;