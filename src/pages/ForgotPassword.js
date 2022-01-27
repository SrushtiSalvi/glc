import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="relative overflow-hidden md:flex w-screen h-screen bg-gradient-to-tr from-primary-dark to-primary-light  justify-around items-center hidden">
      <div className="w-full lg:w-1/2 bg-white  p-5 rounded-lg ">
        <div className="px-8 mb-4 text-center">
          <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
          <p className="mb-4 text-sm text-gray-700">
            We get it, stuff happens. Just enter your email address below and
            we'll send you a link to reset your password!
          </p>
        </div>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email Address..."
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-primary-light rounded-full hover:bg-black focus:outline-none focus:shadow-outline"
              type="button">
              Reset Password
            </button>
          </div>
        </form>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
