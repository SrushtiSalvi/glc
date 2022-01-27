import React, { useEffect, useState } from 'react';

import Input from '../common/Input';
import { addPost } from '../../api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [postType, setPostType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [position, setPosition] = useState('');
  const [joining, setJoining] = useState('');
  const [deadline, setDeadline] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);
    if (!accessToken) {
      navigate('/login');
      toast.warning('please login first');
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
    navigate('/admin/allPosts');
  };

  return (
    <div className="flex flex-col">
      <h1 className="md:text-3xl text-2xl underline underline-offset-8 decoration-primary-dark font-bold text-center mt-6 mb-1">
        Add Post
      </h1>
      <form className="grid auto-rows-auto sm:m-16 lg:m-8 grid-cols-1 md:grid-cols-2 place-items-center mx-auto bg-white px-10 shadow-xl rounded-lg py-6">
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              className="inputField"
              placeHolder="Post Type"
              id="postType"
              htmlFor="postType"
              type="text"
              label="Post Type"
              value={postType}
              onChange={(v) => {
                setPostType(v);
              }}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              className="inputField"
              placeHolder="Company Name"
              id="companyName"
              htmlFor="companyName"
              type="text"
              label="Company Name"
              value={companyName}
              onChange={setCompanyName}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              className="inputField"
              placeHolder="Eligibility"
              id="eligibility"
              htmlFor="eligibility"
              type="text"
              label="Eligibility"
              value={eligibility}
              onChange={setEligibility}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              className="inputField"
              placeHolder="Position"
              id="position"
              htmlFor="position"
              type="text"
              label="Position"
              value={position}
              onChange={setPosition}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              className="inputField"
              placeHolder="Joining"
              id="joining"
              htmlFor="joining"
              type="text"
              label="Joining"
              value={joining}
              onChange={setJoining}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              className="inputField"
              placeHolder="Deadline"
              id="deadline"
              htmlFor="deadline"
              type="date"
              label="Deadline"
              value={deadline}
              onChange={setDeadline}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center col-span-2">
          <div className=" flex flex-col w-full my-4 ">
            <Input
              className="inputField"
              placeHolder="Content"
              id="content"
              htmlFor="content"
              type="text"
              label="Content"
              onChange={setContent}
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <Input
              placeHolder="Status"
              id="status"
              type="text"
              label="Content"
              onChange={setContent}
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
              onChange={setStatus}
            />
          </div>
        </div>
        <button
          className="flex mx-auto mb-4 bg-black py-2 px-6 text-lg text-white border hover:border transition-all duration-150 hover:bg-white hover:text-black rounded-md border-black"
          onClick={handleAddPost}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
