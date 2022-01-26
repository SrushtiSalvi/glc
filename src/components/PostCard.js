import { MdDelete, MdModeEditOutline } from 'react-icons/md';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post, isAdmin }) => {
  let navigate = useNavigate();

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
        {isAdmin ? (
          <button
            onClick={() => {
              navigate('/learnMore');
            }}
            className="border border-black rounded-md px-3 py-1 md:text-sm md:py-0.5 text-navbackground hover:bg-navbackground hover:text-white">
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

export default PostCard;
