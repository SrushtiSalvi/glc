import React from 'react';

function Recruiters() {
  return (
    <div className="flex-row m-10">
      <h1 className="mb-10 text-2xl font-bold text-primary-light border-l-4 pl-4 border-primary-light">
        Recruiters
      </h1>
      <div className="flex-row space-y-8">
        <div className="border-l-2 pl-2 ">
          <a
            href="/"
            className="hover:underline decoration-primary font-bold text-xl">
            Recruitment Process
          </a>
        </div>
        <div className="border-l-2 pl-2 ">
          <a
            href="/"
            className="hover:underline decoration-primary font-bold text-xl">
            Registration Form
          </a>
        </div>
        <div className="border-l-2 pl-2 ">
          <a
            href="/"
            className="hover:underline decoration-primary font-bold text-xl">
            Past Recruiters
          </a>
        </div>
        <div className="border-l-2 pl-2 ">
          <a
            href="/"
            className="hover:underline decoration-primary font-bold text-xl">
            Downloads for Recruiters
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recruiters;
