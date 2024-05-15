import React from "react";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
        <div className="max-w-md bg-white p-8 rounded shadow-md text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Voice to Text App
          </h1>
          <p className="text-gray-600 mb-4">
            Convert your voice into text with our amazing Voice to Text
            application. Simply speak into your microphone and let our app
            transcribe your speech into written words.
          </p>
          <Link to="/register">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
