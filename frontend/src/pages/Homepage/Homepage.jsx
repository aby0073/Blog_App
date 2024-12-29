import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { fetchPosts, deletePost } from "../../servies/api";
import Navbar from "../../components/Navbar/Navbar";
import { format } from "date-fns";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  const deleteblog = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="allpost">
        <h1>All Blog Posts</h1>
        {posts.length === 0 ? (
          <p>No posts available. Create a new post!</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="onepost">
              <div className="title">
                <h2>{post.title}</h2>
              </div>
              <p>{post.content}</p>
              <p>Date: {format(new Date(post.date), "dd-MM-yyyy")}</p>
              <p>Published by: {post.author}</p>
              <button onClick={() => deleteblog(post._id)}>Delete</button>
              <button>Edit</button>
              <button>Commands</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Homepage;
