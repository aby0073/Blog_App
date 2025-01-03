import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import PostBlog from "./pages/PostBlog/Postblog";
import SearchPage from "./pages/Search/Search";
import ViewDetails from "./pages/Viewdetails/Viewdetail";
import EditPost from "./pages/Editpost/Editpost";


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post-blog" element={<PostBlog />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/post/:id" element={<ViewDetails />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
};

export default App;
