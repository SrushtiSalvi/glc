import React from "react";

const Input = ({ id, type, placeHolder, label, htmlFor, value, onChange }) => {
  return (
    <>
      <input
        className="peer bg-white text-gray-700 border border-gray-500 w-11/12 rounded py-2 px-4 my-2 placeholder-transparent focus:shadow-md focus:outline-none"
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <label
        className="peer-placeholder-shown:text-gray-400 peer-placeholder-shown:mt-4 peer-placeholder-shown:ml-5 peer-placeholder-shown:bg-none peer-placeholder-shown:font-medium transition-all hover:cursor-auto absolute ml-2 px-0.5 -mt-2 bg-white text-gray-600 text-md font-bold place-self-start"
        htmlFor={htmlFor}
      >
        {label}
      </label>
    </>
  );
};

export default Input;
