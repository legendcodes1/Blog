import * as React from "react";
import { FaBars } from "react-icons/fa"; // For the menu icon
import { Link } from "react-router-dom"; // For routing, if needed

export default function Navbar() {
  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button className="text-white text-2xl mr-4">
            <FaBars />
          </button>
          <h1 className="text-white text-2xl font-bold">News</h1>
        </div>
        <div>
          <Link to="/login">
            <button className="text-white bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
