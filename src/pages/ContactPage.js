import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import map from "../assets/map.png";

function ContactPage() {
  return (
    <div>
      <img
        src={map}
        alt="maps"
        className="absolute w-screen -z-10 hidden lg:block top-24"
      />
      <div className="z-10 relative flex flex-col items-center w-3/5 mx-auto my-32">
        <h1 className="font-bold w-full text-white">LET'S KEEP IN TOUCH</h1>
        <div className="flex lg:flex-row flex-col rounded-sm">
          <div className="flex flex-col justify-center items-center bg-headings text-sm w-full p-8 text-white">
            <h1 className="mb-10 justify-self-start w-full">
              <b>Our Contacts</b>
            </h1>
            <div className="space-y-8">
              <section className="flex space-x-5">
                <FaMapMarkerAlt />
                <p className="w-2/3">
                  The Government Law College 'A' Road, Churchgate Mumbai - 400
                  020 Maharastra - India
                </p>
              </section>
              <section className="flex space-x-3">
                <IoCall className="text-xl" />
                <div className="flex-col flex space-y-2">
                  <span>
                    <b className="underline">Ms. Mansi Dhadke </b>
                    <h3>General Secretary</h3>
                    <p>(+91 8657156719)</p>
                  </span>
                  <span>
                    <b className="underline">Mr. Haryashwa Singh Thakore</b>
                    <h3>Assistant General Secretary</h3>
                    <p> (+91 9921462543)</p>
                  </span>
                </div>
              </section>
              <section className="flex space-x-3 ">
                <IoMail />
                <h3>placements.glc@gmail.com</h3>
              </section>
            </div>
          </div>

          <div className="bg-white flex flex-col">
            <b className="p-6">Send Us A Message</b>
            {/* <div className="h-full grid grid-cols-2 content-center lg:w-1/2 w-full"> */}
            <div className="flex content-center">
              <form class="m-8 space-y-20">
                <div class="flex flex-wrap items-center">
                  <div class="md:w-2/5 w-full border-b border-navbackground mb-8 md:mb-0 pt-12 pb-2 m-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                      id="grid-first-name"
                      type="text"
                      placeholder="Fisrt Name"
                    />
                  </div>
                  <div class="md:w-2/5 w-full border-b border-navbackground mb-8 md:mb-0 pt-12 pb-2 m-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                      id="grid-last-name"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="w-full md:w-2/5 border-b border-navbackground mb-8 md:mb-0 pt-12 pb-2 m-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                      id="grid-last-name"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="w-full md:w-2/5 border-b border-navbackground  mb-8 md:mb-0 pt-12 pb-2 m-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                      id="grid-last-name"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="flex items-center  py-2 sm:py-5 m-2">
                  <input
                    class="appearance-none bg-transparent border-b border-navbackground w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <button
                  class="flex-shrink-0 bg-headings hover:bg-navbackground border-headings hover:border-headings text-md text-white py-2 px-5 rounded"
                  type="button"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
