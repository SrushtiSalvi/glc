import React from 'react';

const NoticePage = () => {
  return (
    <div className="m-2 p-4 shadow-xl">
      <h1 className="text-xl font-bold text-primary">Notice Heading</h1>
      <p className="mt-1 text-xs font-medium text-primary-lighter">By GLC</p>
      <body className="my-8">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
          illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
        </p>
      </body>
      <footer>Date posted</footer>
    </div>
  );
};

export default NoticePage;
