import React, { useState } from "react";
import "./Post.css";
import Navbar from "../Navbar/Navbar";

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

    console.log("Submitting post:", newPost);

    try {
      const response = await fetch("http://localhost:4001/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error("Failed to create a new post");
      }

      const data = await response.json();
      console.log("Server response:", data);
      setMessage("Post created successfully!");

      setTitle("");
      setContent("");
      setAuthor("");
    } catch (error) {
      console.error("Error during submission:", error);
      setMessage(error.message || "Error creating post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  console.log("Rendering Post component");

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
