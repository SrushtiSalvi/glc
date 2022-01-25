import React from "react";
import Input from "../common/Input";

const AddPost = () => {
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
            />
          </div>
        </div>
      </div>
      <button className="flex mx-auto mb-4 bg-black py-2 px-6 text-lg text-white border hover:border transition-all duration-150 hover:bg-white hover:text-black rounded-md border-black">
        Submit
      </button>
    </div>
  );
};

export default AddPost;
