import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-black m-4 py-1 px-4 text-xs text-white border hover:border transition-all duration-150 hover:bg-white hover:text-black rounded-md border-black">
      {children}
    </button>
  );
};

export default Button;
