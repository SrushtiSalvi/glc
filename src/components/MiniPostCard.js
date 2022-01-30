import { useLocation, useNavigate } from 'react-router-dom';

import { BsClockHistory } from 'react-icons/bs';
import React from 'react';

const MiniPostCard = ({ post, isActive }) => {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div
      onClick={() => {
        navigate(`/post/${post._id}`);
      }}
      className={`p-8 shadow-md cursor-pointer transition-all duration-150 rounded-md h-auto space-y-5 ${
        isActive ? 'bg-primary-lighter text-white' : 'bg-white text-black'
      }`}>
      <section className="flex justify-between">
        <p className="text-xl font-poppins font-medium line-clamp-1">
          {post.company_name}
        </p>
        <button className="rounded-xl border-green-400 border text-green-400 px-2 text-xs cursor-default">
          open
        </button>
      </section>
      <div className="flex space-x-2 text-sm">
        <p
          className={`${
            location.pathname === `/post/${post._id}` ? '' : ''
          }  rounded-lg`}>
          {post.eligibility}
        </p>
        <p
          className={`${
            location.pathname === `/post/${post._id}` ? '' : ''
          }  rounded-lg`}>
          {post.position}
        </p>
        <p
          className={`${
            location.pathname === `/post/${post._id}` ? '' : ''
          }  rounded-lg`}>
          {post.joining}
        </p>
      </div>
      <div className="text-right text-sm flex flex-row justify-end">
        <span>
          <BsClockHistory
            className={`${
              location.pathname === `/post/${post._id}`
                ? 'text-white'
                : 'text-gray-700'
            } my-0.5 mx-1`}
          />
        </span>
        <p>12th January, 2022, 06:00 PM</p>
      </div>
    </div>
  );
};

export default MiniPostCard;
