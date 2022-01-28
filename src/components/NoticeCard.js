import React from 'react';

const NoticeCard = ({ post, isAdmin }) => {
  return (
    <div>
      <a
        className="relative  bg-gradient-to-br from-primary-dark to-primary-lighter block p-8 overflow-hidden border border-gray-100 rounded-lg"
        href="/">
        <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="justify-between sm:flex">
          <div>
            <h5 className="text-xl font-bold text-gray-100">
              {post.company_name}
            </h5>
            <p className="mt-1 text-xs font-medium text-gray-400">By GLC</p>
          </div>
        </div>

        <div className="mt-4 sm:pr-8">
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et
            eaque.
          </p>
        </div>

        <dl className="flex mt-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-400">Published</dt>
            <dd className="text-xs text-gray-300">31st June, 2021</dd>
          </div>

          <div className="flex flex-col-reverse ml-3 sm:ml-6">
            <dt className="text-sm font-medium text-gray-400">Reading time</dt>
            <dd className="text-xs text-gray-300">3 minute</dd>
          </div>
        </dl>
      </a>
    </div>
  );
};

export default NoticeCard;
