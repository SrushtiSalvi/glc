import React from "react";

import Posts from "./Posts";
import PhotoCarousel from "./PhotoCarousel";
import Sidebar from "./Sidebar";
import Chairman from "../pages/Chairman";

const Feed = () => {
  return (
    <div className="bg-gray-50 flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/4">
        <PhotoCarousel />
        <Posts />
        <Chairman isFeed />
      </div>
      <div className="w-full lg:w-1/4">
        <Sidebar />
      </div>
    </div>
  );
};

export default Feed;
