import React from 'react';
import { BsClockHistory } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

const MiniPostCard = ({ post, isActive, pageNumber, pageSize }) => {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div
      onClick={() => {
        navigate(`/post/${post._id}`, {
          state: {
            pageNumber,
            pageSize,
          },
        });
      }}
      className={`px-6 pt-6 m-4 shadow-lg cursor-pointer transition-all duration-150 rounded-lg text-white h-full ${
        isActive
          ? 'scale-105 shadow-lg shadow-primary bg-primary'
          : 'hover:shadow-lg hover:scale-105 text-primary-dark bg-white'
      } ${location.pathname === `/post/${post._id}` ? 'bg-primary' : ''}`}>
      <section className="flex justify-between mb-6">
        <p className="text-2xl font-poppins font-medium line-clamp-1">
          {post.company_name}
        </p>
        <button className="rounded-xl border-green-400 border text-green-400 px-2 text-xs cursor-default">
          open
        </button>
      </section>
      <div className="flex space-x-4 text-sm mr-6">
        <p
          className={`${
            location.pathname === `/post/${post._id}`
              ? 'bg-primary-light'
              : 'bg-gray-200 text-primary'
          }  px-2 rounded-lg`}>
          {post.eligibility}
        </p>
        <p
          className={`${
            location.pathname === `/post/${post._id}`
              ? 'bg-primary-light'
              : 'bg-gray-200 text-primary'
          }  px-2 rounded-lg`}>
          {post.position}
        </p>
        <p
          className={`${
            location.pathname === `/post/${post._id}`
              ? 'bg-primary-light'
              : 'bg-gray-200 text-primary'
          }  px-2 rounded-lg`}>
          {post.joining}
        </p>
      </div>
      <div className="text-right mt-8 mb-3 text-gray-500 text-sm flex flex-row justify-end">
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
