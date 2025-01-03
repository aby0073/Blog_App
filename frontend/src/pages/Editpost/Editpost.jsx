import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPost, editPost } from "../../servies/api";
import "./Editpost.css";
import Navbar from "../../components/Navbar/Navbar";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 

  
  useEffect(() => {
    const getPost = async () => {
      setLoading(true); 
      try {
        const { data } = await fetchPost(id);
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
        setLoading(false); 
      } catch (error) {
        setError("Error fetching post data");
        setLoading(false); 
        console.error("Error fetching post:", error);
      }
    };

    getPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      await editPost(id, { title, content, author });
      alert("Post updated successfully!");
      navigate(`/post/${id}`); 
    } catch (error) {
      setError("Error updating post");
      setLoading(false); 
      console.error("Error updating post:", error);
    }
  };

  if (loading) return <p>Loading...</p>; 

  return (
    <div>
        <Navbar />
      <h1>Edit Post</h1>
      {error && <p className="error">{error}</p>} 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Post Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Post Content"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          placeholder="Author Name"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Post"} 
        </button>
      </form>
    </div>
  );
};

export default EditPost;
