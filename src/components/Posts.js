import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import data from "../posts.json";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, []);
  return (
    <div className="m-8">
      <h1 className="md:text-3xl text-2xl underline underline-offset-8 decoration-navbackground font-bold text-center my-5">
        Posts
      </h1>
      <div className=" py-2 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {posts.length > 0
          ? posts
              .filter((post) => {
                return post.post_type === "vacancy";
              })
              .map((post) => {
                return <PostCard key={post.post_id} post={post} />;
              })
          : "no posts available"}
        {/* <a className="flex justify-end pr-10 border border-gray-500 ">View More</a> */}
        {/* <button className="flex justify-end border rounded-md border-black ">View More</button> */}
      </div>
      <ul className="flex space-x-4 justify-end">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>Next</li>
      </ul>
    </div>
  );
};

export default Posts;
