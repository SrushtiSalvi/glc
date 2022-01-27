import React from 'react';

function StudentsCorner() {
  return (
    <div className="flex-row m-10">
      <h1 className="mb-10 text-2xl font-bold text-primary-light border-l-4 pl-4 border-primary-light">
        Students Corner
      </h1>
      <div className="flex-row space-y-8">
        <div className="border-l-2 pl-2 ">
          <a
            href="/"
            className="hover:underline decoration-primary font-bold text-xl">
            Notice Board
          </a>
        </div>
        <div className="border-l-2 pl-2 ">
          <a
            href="/"
            className="hover:underline decoration-primary font-bold text-xl">
            Rules and Regulations
          </a>
        </div>
        <div className="border-l-2 pl-2 ">
          <a
            href="/"
            className="hover:underline decoration-primary font-bold text-xl">
            New-Placement-CV-Format
          </a>
        </div>
      </div>
    </div>
  );
}

export default StudentsCorner;
