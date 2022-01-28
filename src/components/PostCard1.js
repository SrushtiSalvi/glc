import { MdDelete, MdModeEditOutline } from 'react-icons/md';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard1 = ({ post, isAdmin, pageNumber, pageSize }) => {
  let navigate = useNavigate();
  return (
    <div className="px-6 pt-6 rounded-lg shadow-md shadow-gray-400 bg-gradient-to-br from-primary-dark to-primary-lighter text-white h-full">
      <section className="flex justify-between mb-16">
        <p className="text-2xl font-poppins font-medium line-clamp-1">
          {post.company_name}
        </p>
        <button className="rounded-xl border-green-400 border text-green-400 px-1 text-xs cursor-default">
          open
        </button>
      </section>
      <section className="mt-8 border-b pb-8 pr-8">
        <ul className="text-xs md:text-sm space-y-4">
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Eligibility</> <span>{post.eligibility}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Position</> <span>{post.position}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Joining</> <span>{post.joining}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Deadline</> <span>{post.deadline}</span>
          </li>
        </ul>
      </section>
      <div className="mt-8 pb-8 flex justify-between">
        <p className="block text-gray-400 md:text-sm align-text-bottom">
          {post.created_on}
        </p>
        {isAdmin ? (
          <button
            onClick={() => {
              navigate(`/post/${post._id}`, {
                state: {
                  pageNumber,
                  pageSize,
                },
              });
            }}
            className="border border-black hover:bg-primary-dark transition-all duration-300 rounded-md px-3 py-1 md:text-sm">
            Learn More
          </button>
        ) : (
          <div className="flex flex-row space-x-4 text-xl ">
            <MdModeEditOutline
              onClick={() => {
                navigate('/editPost');
              }}
              className="hover:text-yellow-400"
            />
            <MdDelete
              onClick={() => {
                navigate('/deletePost');
              }}
              className="hover:text-red-500"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard1;
