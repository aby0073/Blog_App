import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../servies/api";
import "./Viewdetail.css";
import Navbar from "../../components/Navbar/Navbar";

const ViewDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await fetchPost(id);
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    getPost();
  }, [id]);

  if (!post) {
    return <p className="view-details-loading">Loading...</p>;
  }

  return (
    <div>
        <Navbar />
      <div className="view-details-container">
      <h1 className="view-details-title">{post.title}</h1>
      <p className="view-details-content">{post.content}</p>
      <p className="view-details-author">Author: {post.author}</p>
      <p className="view-details-date">Date: {new Date(post.date).toLocaleDateString()}</p>
    </div>
    </div>
  );
};

export default ViewDetails;
