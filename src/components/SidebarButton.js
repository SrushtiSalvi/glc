import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-black m-4 py-1 px-4 text-xs text-white border-0 rounded-md">
      {children}
    </button>
  );
};

export default Button;
