import React from 'react';

const SidebarCardHeader = ({ children }) => {
  return (
    <div className="bg-primary-dark text-white text-xs p-4 font-bold border-t-0 rounded-t-md mt-3 mx-auto">
      {children}
    </div>
  );
};

export default SidebarCardHeader;
