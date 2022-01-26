import { Menu, Transition } from "@headlessui/react";

import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Fragment } from "react/cjs/react.production.min";
import { ImUser } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNav = () => {
  let navigate = useNavigate();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div className="block z-10 md:sticky md:top-0">
      <div className="flex justify-between bg-white shadow-lg w-full">
        <div className="my-2">
          <AiOutlineMenu
            className="md:hidden text-2xl text-black mx-4 mt-3 cursor-pointer"
            onClick={() => {
              handleToggle();
            }}
          />

          <span
            className={`transition-all duration-150 ${
              navbarOpen ? "sm:m-auto opacity-100" : "hidden opactiy-0"
            } `}
          >
            <span className="md:text-md lg:text-lg">
              <NavLink
                to="/admin/allPosts"
                className={({ isActive }) => {
                  return `block text-navbackground transition-all duration-100 ease-out hover:text-black hover:underline hover:underline-offset-2 hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
                    isActive ? " border-l-4" : ""
                  }`;
                }}
              >
                POSTS
              </NavLink>
              <NavLink
                to="/admin/notices"
                className={({ isActive }) => {
                  return `block text-navbackground transition-all duration-100 ease-out hover:text-black hover:underline hover:underline-offset-2 hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
                    isActive ? " border-l-4" : ""
                  }`;
                }}
              >
                NOTICES
              </NavLink>
              <NavLink
                to="/admin/blogs"
                className={({ isActive }) => {
                  return `block text-navbackground transition-all duration-100 ease-out hover:text-black hover:underline hover:underline-offset-2 hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
                    isActive ? " border-l-4" : ""
                  }`;
                }}
              >
                BLOGS
              </NavLink>
              <NavLink
                to="/admin/addPost"
                className={({ isActive }) => {
                  return `block text-navbackground transition-all duration-100 ease-out hover:text-black hover:underline hover:underline-offset-2 hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
                    isActive ? " border-l-4" : ""
                  }`;
                }}
              >
                ADD POSTS
              </NavLink>
              <NavLink
                to="/admin/subscribers"
                className={({ isActive }) => {
                  return `block text-navbackground transition-all duration-100 ease-out hover:text-black hover:underline hover:underline-offset-2 hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
                    isActive ? " border-l-4" : ""
                  }`;
                }}
              >
                SUBSCRIBERS
              </NavLink>
            </span>
          </span>
        </div>
        <div className="flex space-x-2 my-3 mr-12 border border-gray-600 rounded-md bg-white hover:bg-gray-100 hover:cursor-pointer h-8 px-2">
          <Menu>
            <Menu.Button className="my-auto flex flex-row space-x-2">
              <ImUser className="my-auto" />
              <p className="my-auto"> Admin </p>
              <IoIosArrowDown className="my-auto" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-in duration-100"
              enterFrom="transform opacity-0 scale-100"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-8 right-12 bg-white border border-gray-200 rounded-sm shadow-lg">
                <div className="w-full ">
                  <Menu.Item>
                    <button
                      onClick={() => {
                        navigate("/profile");
                      }}
                      className="flex transition-all duration-300 hover:bg-gray-200 items-center px-6 py-2 w-full text-md"
                    >
                      <FaUserCircle className="text-lg mr-5" />
                      Profile
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      onClick={() => {
                        navigate("/logout");
                      }}
                      className="flex transition-all duration-300 hover:bg-gray-200 items-center px-6 py-2 w-full text-md"
                    >
                      <FiLogOut className="text-lg mr-5" />
                      Logout
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
