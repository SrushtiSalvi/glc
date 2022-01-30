import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { adminSignup } from '../api/api';
import logo from '../assets/logo2.png';
import { toast } from 'react-toastify';

const AdminSignup = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const signup = async () => {
    if (password === confirmPassword) {
      let res = await adminSignup(username, password);
      if (res['success']) {
        toast.success(res['message']);
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        navigate('/admin/login');
      } else {
        toast.error(res['message']);
      }
    } else {
      toast.error('Passwords do not match');
    }
  };

  return (
    <div className="h-screen flex">
      <div className="relative flex-1 md:flex bg-gradient-to-tr from-primary-dark to-primary-light overflow-hidden justify-around items-center hidden">
        <img
          src={logo}
          alt="logo"
          className="h-15 w-100 md:h-30 md:w-170 mx-auto md:mx-2"
        />
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <form className="bg-white w-3/4 border shadow-2xl p-6">
          <h1 className="text-gray-800 font-bold text-2xl mb-8">
            Create Your Account
          </h1>

          <div>
            <label className="text-gray-500">Username</label>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
          </div>
          <div>
            <div>
              <label className="text-gray-500">Password</label>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="password"
                  name=""
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-500">Confirm Password</label>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="password"
                  name=""
                  id=""
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <button
              onClick={signup}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  signup();
                }
              }}
              type="button"
              className="block w-full hover:bg-black bg-primary-light mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
              Sign Up
            </button>
            <span className=" flex text-sm justify-center">
              <Link to="/login" className="cursor-pointer hover:text-blue-500">
                Already have an account?
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
