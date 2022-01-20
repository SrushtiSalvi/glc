import React from "react";

function ContactPage() {
  return (
    <div className="space-y-4 m-8 md:p-8">
      <h1 className="text-headings font-bold text-2xl mb-8 border-l-4 pl-4 border-headings">
        Contact
      </h1>
      <form className=" border shadow-xl rounded-md grid auto-rows-auto md:grid-cols-2">
        <div className="">
          <div className="m-4 space-x-10">
            <label className="text-md" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              type="text"
              required
              className=" border-gray-500 border rounded-sm text-sm p-2"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="space-x-10 m-4">
            <label className="text-md" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              required
              className=" border-gray-500 border rounded-sm text-sm p-2"
              placeholder="Enter Valid Email"
            />
          </div>
          <div className="space-x-10 m-4">
            <label className="text-md" htmlFor="subject">
              Subject:
            </label>
            <input
              id="subject"
              type="text"
              required
              className=" border-gray-500 border rounded-sm text-sm p-2"
              placeholder="Enter Subject"
            />
          </div>
        </div>
        <div className="space-x-10 m-6">
          <label className="text-md" htmlFor="message">
            Message:
          </label>
          <textarea
            id="massage"
            type="text"
            required
            className=" border-gray-500 border rounded-sm text-sm p-2"
            placeholder="Enter Message"
          />
        </div>
        {/* <div>TODO: recaptcha</div> */}
      </form>
      <button className="bg-navbackground rounded-md text-white w-40 py-1 px-4 mx-auto">
        Submit
      </button>
    </div>
  );
}

export default ContactPage;
