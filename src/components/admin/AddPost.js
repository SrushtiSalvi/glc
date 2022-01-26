import React, { useState, useEffect } from "react";
import Input from "../common/Input";
import { addPost } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPost = () => {
  const [postType, setPostType] = useState("");
  const [companyName, setCompanyName] = useState("bu");
  const [eligibility, setEligibility] = useState("");
  const [position, setPosition] = useState("");
  const [joining, setJoining] = useState("");
  const [deadline, setDeadline] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    console.log(accessToken);
    if (!accessToken) {
      navigate("/login");
      toast.warning("please login first");
    }
  }, []);

  const handleAddPost = async (event) => {
    event.preventDefault();

    const result = await addPost(
      postType,
      companyName,
      eligibility,
      position,
      joining,
      deadline,
      content,
      status
    );
    console.log(result);
    navigate("/admin/allPosts");
  };

  return (
    <div className="flex flex-col">
      <h1 className="md:text-3xl text-2xl underline underline-offset-8 decoration-navbackground font-bold text-center mt-6 mb-1">
        Add Post
      </h1>
      <div className="grid auto-rows-auto sm:m-16 lg:m-8 grid-cols-1 md:grid-cols-2 place-items-center mx-auto bg-white px-10 shadow-xl rounded-lg py-6">
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              placeHolder="Post Type "
              id="postType"
              type="text"
              label="Post Type"
              onChange={(e) => setPostType(e.target.value)}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              placeHolder="Company Name"
              id="companyName"
              type="text"
              label="Company Name"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              placeHolder="Eligibility"
              id="eligibility"
              type="text"
              label="Eligibility"
              onChange={(e) => setEligibility(e.target.value)}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              placeHolder="Position"
              id="position"
              type="text"
              label="Position"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              placeHolder="Joining"
              id="joining"
              type="text"
              label="Joining"
              onChange={(e) => setJoining(e.target.value)}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              placeHolder="Deadline"
              id="deadline"
              type="date"
              label="Deadline"
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input placeHolder="Date" id="date" type="date" label="Date" />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              placeHolder="Content"
              id="content"
              type="text"
              label="Content"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              placeHolder="Status"
              id="status"
              type="text"
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        className="flex mx-auto mb-4 bg-black py-2 px-6 text-lg text-white border hover:border transition-all duration-150 hover:bg-white hover:text-black rounded-md border-black"
        onClick={handleAddPost}
      >
        Submit
      </button>
    </div>
  );
};

export default AddPost;
