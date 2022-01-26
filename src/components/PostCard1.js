import React from "react";

const PostCard1 = ({ post }) => {
  return (
    <div className="px-6 pt-6 rounded-lg shadow-md shadow-gray-400 bg-gradient-to-br from-[#193455] to-[#285A84] text-white w-full h-full">
      <section className="flex justify-between">
        <p className="text-xl font-bold line-clamp-1">{post.company_name}</p>
        <button className="rounded-xl border-green-400 border text-green-400 px-1 text-xs cursor-default">
          open
        </button>
      </section>
      <section className="mt-8 border-b pb-4">
        <ul className="text-xs md:text-sm space-y-4">
          <li className="grid grid-cols-2 auto-rows-auto">
            <b>Eligibility:</b> <span>{post.eligibility}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <b>Position:</b> <span>{post.position}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <b>Joining:</b> <span>{post.joining}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <b>Deadline:</b> <span>{post.deadline}</span>
          </li>
        </ul>
      </section>
      <div className="my-4 pb-4 flex justify-between">
        <p className="text-gray-400 md:text-sm">{post.created_on}</p>
        <button className="border border-black rounded-md px-3 py-1 md:text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PostCard1;
