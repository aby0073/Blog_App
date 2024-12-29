import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import PostBlog from "./pages/PostBlog/Postblog";
import Search from "./pages/Search/Search";


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post-blog" element={<PostBlog />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
