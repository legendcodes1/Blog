// PostsWrap.js
import React from "react";
import { Link } from "react-router-dom";

const PostsWrap = ({ id, title, content }) => {
  return (
    <div className="border p-4 mb-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content.substring(0, 100)}...</p>
      <Link to={`/posts/${id}`} className="text-blue-500 hover:underline">
        Read more
      </Link>
    </div>
  );
};

export default PostsWrap;
