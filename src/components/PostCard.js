import React from "react";

const PostCard = () => {
  return (
    <div className="border-l-8 border-l-navbackground  px-6 pt-1 mx-6 mt-4 radius-8 bg-gray-100 shadow-xl">
      <p className="text-xl m-2">Tata consultancy</p>
      <hr className="bg-gray-400 m-1" />
      <section className="m-4">
        <ul className="md:text-sm">
          <li>Eligibity:</li>
          <li>position:</li>
          <li>Joining:</li>
          <li>Duration:</li>
        </ul>
      </section>
      <hr className="bg-gray-400" />
      <div className="my-4 pb-4 flex justify-between ">
        <p className="text-gray-400 md:text-sm">January 8, 2022</p>
        <button className="border border-black rounded-md px-3 py-1 md:text-sm md:py-0 text-navbackground">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PostCard;
