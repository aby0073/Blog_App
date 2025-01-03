import React, { useState } from "react";
import "./Post.css";
import Navbar from "../Navbar/Navbar";
import { createPost } from "../../servies/api";

const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newPost = { title, content, author };

    try {
      const response = await createPost(newPost); 
      console.log("Server response:", response.data);
      setMessage("Post created successfully!");

     
      setTitle("");
      setContent("");
      setAuthor("");
    } catch (error) {
      console.error("Error during submission:", error);
      setMessage(error.response?.data?.message || "Error creating post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="post-head">
        <h1>Post Blog</h1>
      </div>
      <form className="post-content" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Post;
