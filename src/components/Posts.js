import React, { useEffect, useState } from "react";
import PostsWrap from "./PostsWrap"; // Import the Post component

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/posts"); // Update with your API URL
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">All Your Latest Posts</h1>
      <div className="flex flex-col items-center p-4 mt-10">
        {posts.map((post) => (
          <PostsWrap key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
