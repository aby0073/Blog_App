import React, { useEffect, useState } from 'react';
import './Homepage.css';
import { fetchPosts, deletePost } from '../../servies/api';

import { format } from 'date-fns';

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);
  
  const deleteblog = async (id) => {
    try {
      await deletePost(id); 
      setPosts(posts.filter((post) => post._id !== id)); 
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  

  

  return (
    <div>
      <h1>All Blog Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <p>{format(new Date(post.date), 'dd-mm-yyyy')}</p>
          <p>{post.author}</p>
          <button onClick={()=>deleteblog(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
