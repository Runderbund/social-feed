import React, {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);


  return (
    <div className='background'>
      <NavBar />
      <CreatePostForm />
      {/* <PostList posts={posts}/> */}
      {/* posts not defined yet */}
    </div>

  );
}

export default App;