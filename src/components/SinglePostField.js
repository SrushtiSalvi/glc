import React from 'react';

const SinglePostField = ({ icon, heading, children, className }) => {
  return (
    <li className={className}>
      <p className="text-lg leading-6 font-medium text-gray-900">{heading}</p>
      <p className="my-2 text-base text-gray-500 text-justify break-words ">
        {children}
      </p>
    </li>
  );
};

export default SinglePostField;
