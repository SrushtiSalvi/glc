import React from 'react';

function ContactPage() {
  return (
    <div className="flex-row">
      <h1 className="text-headings font-bold text-2xl mb-8 border-l-4 pl-4 border-headings">
        Contact
      </h1>
      <div className="flex-row ml-8">
        <div className="flex space-x-20">
          <label htmlFor="name" className=" w-1/12 text-gray-700 ">
            Name:
          </label>
          <input
            type="text"
            className="mb-6 border-2 p-2"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="flex space-x-20">
          <label className=" w-1/12 text-gray-700 ">Email:</label>
          <input
            type="email"
            className="mb-6 border-2"
            id="exampleInputEmail1"
            label="Name"></input>
        </div>
        <div className="flex space-x-20">
          <label className=" w-1/12 text-gray-700 ">1 + 6 = ?</label>
          <input
            type="email"
            className="mb-6 border-2"
            id="exampleInputEmail1"
            label="Name"></input>
        </div>
        <div className="flex space-x-20">
          <label className=" w-1/12 text-gray-700 ">Subject:</label>
          <input
            type="email"
            className="mb-6 border-2"
            id="exampleInputEmail1"
            label="Name"></input>
        </div>
        <div className="flex space-x-20">
          <label className=" w-1/12 text-gray-700 ">Message:</label>
          <textarea
            type="email"
            className="mb-6 border-2 w-1/3 "
            id="exampleInputEmail1"
            label="Name"></textarea>
        </div>
        <button className="border-black border px-4 py place-self-center">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
