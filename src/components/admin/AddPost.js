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
        {/* <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <label
              className=" text-gray-700 text-md font-bold place-self-start"
              htmlFor="companyName"
            >
              Company name
            </label>
            <input
              className="block bg-white text-gray-700 border border-gray-500  w-11/12 rounded py-2 px-4 my-2"
              id="companyName"
              type="text"
              placeholder="Company Name"
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <label
              className=" text-gray-700 text-md font-bold place-self-start"
              htmlFor="eligibility"
            >
              Eligibility
            </label>
            <input
              className="block bg-white text-gray-700 border border-gray-500  w-11/12 rounded py-2 px-4 my-2"
              id="eligibility"
              type="text"
              placeholder="Eligibility"
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <label
              className=" text-gray-700 text-md font-bold place-self-start"
              htmlFor="position"
            >
              Position
            </label>
            <input
              className="block bg-white text-gray-700 border border-gray-500  w-11/12 rounded py-2 px-4 my-2"
              id="position"
              type="text"
              placeholder="Position"
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <label
              className=" text-gray-700 text-md font-bold place-self-start"
              htmlFor="joining"
            >
              Joining
            </label>
            <input
              className="block bg-white text-gray-700 border border-gray-500  w-11/12 rounded py-2 px-4 my-2"
              id="joining"
              type="text"
              placeholder="Joining"
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <label
              className=" text-gray-700 text-md font-bold place-self-start"
              htmlFor="deadline"
            >
              Deadline
            </label>
            <input
              className="block bg-white text-gray-700 border border-gray-500  w-11/12 rounded py-2 px-4 my-2"
              id="deadline"
              type="date"
              placeholder="Deadline"
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <label
              className=" text-gray-700 text-md font-bold place-self-start"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="block bg-white text-gray-700 border border-gray-500  w-11/12 rounded py-2 px-4 my-2"
              id="date"
              type="date"
              placeholder="Date"
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center md:col-span-2">
          <div className=" flex flex-col w-full my-4">
            <label
              className="text-gray-700 text-md font-bold place-self-start"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              className="block bg-white text-gray-700 border border-gray-500  w-11/12 rounded py-2 px-4 my-2"
              id="content"
              type="text"
              placeholder="Content"
            ></textarea>
          </div>
        </div> */}
      </div>
      <button className="flex mx-auto mb-4 bg-black py-2 px-6 text-lg text-white border hover:border transition-all duration-150 hover:bg-white hover:text-black rounded-md border-black">
        Submit
      </button>
    </div>
  );
};

export default AddPost;
