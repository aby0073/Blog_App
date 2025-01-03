import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { fetchPosts, deletePost } from "../../servies/api";
import Navbar from "../../components/Navbar/Navbar";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 5; 
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await fetchPosts(currentPage, postsPerPage);
        setPosts(data.posts);
        setTotalPages(Math.ceil(data.total / postsPerPage));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, [currentPage]);

  const deleteblog = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const viewDetails = (id) => {
    navigate(`/post/${id}`);
  };

  const editPost = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
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
              <p>{post.content.slice(0, 100)}...</p>
              <p>Date: {format(new Date(post.date), "dd-MM-yyyy")}</p>
              <p>Published by: {post.author}</p>
              <div className="commands">
                <button onClick={() => viewDetails(post._id)}>View Details</button>
                <button onClick={() => editPost(post._id)}>Edit</button>
                <button onClick={() => deleteblog(post._id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Homepage;
