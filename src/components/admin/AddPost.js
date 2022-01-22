import React from "react";


const AddPost = () => {
  return (
    <div className="flex flex-col">
      <div className="md:grid md:auto-rows-auto m-8 sm:flex sm:flex-row md:grid-cols-2 place-items-center w-3/4 mx-auto bg-white px-10 shadow-xl rounded-lg py-6">
        <h1 className="text-headings font-bold sm:text-xl md:text-2xl place-self-start mb-8 col-span-2 border-l-4 pl-4 border-headings">Add new post</h1>
        <div className="flex mx-auto w-full justify-center">
          <div className=" flex flex-col w-full my-4">
            <label
              className=" text-gray-700 text-md font-bold place-self-start"
              htmlFor="postType"
            >
              Post Type
            </label>
            <input
              className="block  bg-white text-gray-700 border border-gray-500 w-11/12 rounded py-2 px-4 my-2"
              id="postType"
              type="text"
              placeholder="Post Type"
            />
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
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
        <div className="flex mx-auto w-full col-span-2 justify-center">
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
        </div>
      </div>
      <button className="flex mx-auto mb-4 bg-black py-2 px-6 text-lg text-white border hover:border transition-all duration-150 hover:bg-white hover:text-black rounded-md border-black">
        Submit
      </button>
    </div>
  );
};

export default AddPost;
