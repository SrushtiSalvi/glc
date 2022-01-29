import React from 'react';

const SinglePostField = ({ icon, heading, children, className }) => {
  return (
    <div className={className}>
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-light text-white">
          {icon}
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
          {heading}
        </p>
      </dt>
      <dd className="my-2 ml-16 text-base text-gray-500 text-justify break-words ">
        {children}
      </dd>
    </div>
  );
};

export default SinglePostField;
