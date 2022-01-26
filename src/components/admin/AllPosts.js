import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import data from "../../posts.json";
import PostCard from "../PostCard";
import { getAllVacancyPosts } from "../../api/api";

const AllPosts = () => {
  let navigate = useNavigate();
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
    <div className=" bg-gray-100">
      <h1 className="md:text-3xl text-2xl underline underline-offset-8 decoration-navbackground font-bold text-center my-5">
        Vacancy Posts
      </h1>
      <div className="flex justify-end mx-4 text-white">
        <button
          onClick={() => {
            navigate("/admin/addPost");
          }}
          className="group my-auto text-xs flex flex-row space-x-1 bg-black py-1 px-2 border hover:border transition-all duration-150 hover:bg-white hover:text-black rounded-md border-black"
        >
          <FiPlus className="text-lg my-auto text-white group-hover:text-black" />
          <p className="my-auto"> Add Posts </p>
        </button>
      </div>
      <div className=" py-2 mx-4 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {posts.length > 0
          ? posts
              .filter((post) => {
                return post.post_type === "vacancy";
              })
              .map((post) => {
                return <PostCard key={post._id} post={post} isAdmin={true} />;
              })
          : "no posts available"}
      </div>
    </div>
  );
};

export default AllPosts;
