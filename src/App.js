import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails"; // Import your PostDetails component
import "./App.css"; // Ensure the path is correct

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
