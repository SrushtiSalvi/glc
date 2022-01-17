import React from 'react';

const SidebarCardBody = ({ children }) => {
  return (
    <div className="shadow-md rounded-b-md bg-white">
      <span>{children}</span>
    </div>
  );
};

export default SidebarCardBody;
