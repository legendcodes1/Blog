// src/components/PostDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams(); // Get post ID from URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <p className="text-gray-500 text-sm">
        {new Date(post.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}

export default PostDetails;
