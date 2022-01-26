import React, { useEffect, useState } from "react";

import PostCard from "./PostCard1";
import { getAllVacancyPosts } from "../api/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const getData = async () => {
      let res = await getAllVacancyPosts(pageNumber, pageSize);
      if (res.success) {
        setPosts(res.data);
      } else {
        alert(res.message);
      }
    };
    getData();
  }, []);
  return (
    <div className="m-8">
      <h1 className="md:text-3xl text-2xl underline underline-offset-8 decoration-navbackground font-bold text-center my-5">
        Posts
      </h1>
      <div className="my-10 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
        {posts.length > 0
          ? posts
              .filter((post) => {
                return post.post_type === "vacancy";
              })
              .map((post) => {
                return <PostCard isAdmin key={post.post_id} post={post} />;
              })
          : "no posts available"}
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
