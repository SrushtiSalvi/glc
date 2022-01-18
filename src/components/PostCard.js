import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="px-6 pt-6 rounded-lg shadow-md shadow-gray-400 bg-white">
      <p className="text-xl m-2 font-bold line-clamp-1">{post.company_name}</p>
      <hr className="bg-gray-400 m-1" />
      <section className="m-2 p-1">
        <ul className="md:text-sm">
          <li>
            <b>Eligibility:</b> {post.eligibility}
          </li>
          <li>
            <b>Position:</b> {post.position}
          </li>
          <li>
            <b>Joining:</b> {post.joining}
          </li>
          <li>
            <b>Deadline:</b> {post.deadline}
          </li>
        </ul>
      </section>
      <hr className="bg-gray-400" />
      <div className="my-4 pb-4 flex justify-between ">
        <p className="text-gray-400 md:text-sm">{post.created_on}</p>
        <button className="border border-black rounded-md px-3 py-1 md:text-sm md:py-0 text-navbackground">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PostCard;
