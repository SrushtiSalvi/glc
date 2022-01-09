import React from "react";

import Posts from "./Posts";
import PhotoCarousel from "./PhotoCarousel";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <div className="md:grid md:grid-cols-4">
      <div className="md:col-span-3">
        <PhotoCarousel />
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
};

export default Feed;
