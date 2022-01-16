import React from "react";

function ContactPage() {
  return (
    <div className="flex-row">
      <h1 className="text-headings font-bold text-2xl mb-8 border-l-4 pl-4 border-headings">
        Contact
      </h1>
      <div className="flex-row ml-8">
        <div className="flex space-x-20">
          <p className=" w-20 text-gray-700 ">Name:</p>
          <input
            type="email"
            className="mb-6 border-2"
            id="exampleInputEmail1"
            label="Name"
          ></input>
        </div>
        <div className="flex space-x-20">
          <p className=" w-20 text-gray-700 ">Email:</p>
          <input
            type="email"
            className="mb-6 border-2"
            id="exampleInputEmail1"
            label="Name"
          ></input>
        </div>
        <div className="flex space-x-20">
          <p className=" w-20 text-gray-700 ">1 + 6 = ?</p>
          <input
            type="email"
            className="mb-6 border-2"
            id="exampleInputEmail1"
            label="Name"
          ></input>
        </div>
        <div className="flex space-x-20">
          <p className=" w-20 text-gray-700 ">Subject:</p>
          <input
            type="email"
            className="mb-6 border-2"
            id="exampleInputEmail1"
            label="Name"
          ></input>
        </div>
        <div className="flex space-x-20">
          <p className=" w-20 text-gray-700 ">Message:</p>
          <input
            type="email"
            className="mb-6 border-2 w-1/3 h-48"
            id="exampleInputEmail1"
            label="Name"
          ></input>
        </div>
        <button className="border-black border px-4 py place-self-center">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
