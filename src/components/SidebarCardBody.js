import React from "react";

const SidebarCardBody = ({ children, className }) => {
  return (
    <div className={`shadow-md rounded-b-md ${className}`}>
      <span>{children}</span>
    </div>
  );
};

export default SidebarCardBody;
