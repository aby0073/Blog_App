import React, { useState, useEffect } from "react";
import "./Search.css";
import Navbar from "../../components/Navbar/Navbar";
import { fetchPosts } from "../../servies/api";

const SearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

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

  useEffect(() => {
    if (searchQuery) {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchQuery, posts]);

  return (
    <div>
      <Navbar />
      <div className="search-container">
        <h1>Search Blog Posts</h1>
        <input
          type="text"
          placeholder="Search by title, content, or author"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className="results">
          {filteredPosts.length === 0 ? (
            <p>No matching posts found.</p>
          ) : (
            filteredPosts.map((post) => (
              <div key={post._id} className="search-result">
                <h2>{post.title}</h2>
                <p>{post.content.substring(0, 100)}...</p>
                <p>Author: {post.author}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
