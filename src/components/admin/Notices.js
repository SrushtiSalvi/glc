import React, { useEffect, useState } from "react";
import PostCard from "../PostCard";
import { getAllNoticePosts } from "../../api/api";

const Notices = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const result = await getAllNoticePosts(pageNumber, pageSize);
      if (result.success) {
        setPosts(result.data);
      } else {
        alert(result.message);
      }
    };
    getData();
  }, []);
  return (
    <div className=" bg-gray-100">
      <h1 className="md:text-3xl text-2xl underline underline-offset-8 decoration-navbackground font-bold text-center my-5">
        {" "}
        Notices{" "}
      </h1>
      <div className=" py-2 mx-4 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {posts.length > 0
          ? posts
              .filter((post) => {
                return post.post_type === "notice";
              })
              .map((post) => {
                return <PostCard key={post.post_id} post={post} />;
              })
          : "no posts available"}
      </div>
    </div>
  );
};

export default Notices;
