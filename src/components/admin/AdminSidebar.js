import { Link, NavLink, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo2.png';

const AdminSidebar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div className=" md:w-1/6 bg-headings text-center md:h-screen">
      <div className="flex flex-col">
        <img src={logo} alt="logo" className="py-6 px-2" />
        <AiOutlineMenu
          className="lg:hidden text-2xl text-white mx-4 mt-3 cursor-pointer"
          onClick={() => {
            handleToggle();
          }}
        />
      </div>
      <hr className="mx-4 my-2" />
      <span className={`lg:block ${navbarOpen ? 'sm:m-auto' : 'hidden'} `}>
        <span className="md:text-md lg:text-lg">
          <NavLink
            to="/admin/allPosts"
            className={({ isActive }) => {
              return `block text-gray-200 hover:bg-navbackground transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
                isActive ? ' border-l-4' : ''
              }`;
            }}>
            POSTS
          </NavLink>
          <NavLink
            to="/admin/notices"
            className={({ isActive }) => {
              return `block text-gray-200 hover:bg-navbackground transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
                isActive ? ' border-l-4' : ''
              }`;
            }}>
            NOTICES
          </NavLink>
          <NavLink
            to="/admin/blogs"
            className={({ isActive }) => {
              return `block text-gray-200 hover:bg-navbackground transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
                isActive ? ' border-l-4' : ''
              }`;
            }}>
            BLOGS
          </NavLink>
          <NavLink
            to="/admin/addPost"
            className={({ isActive }) => {
              return `block text-gray-200 hover:bg-navbackground transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
                isActive ? ' border-l-4' : ''
              }`;
            }}>
            ADD POSTS
          </NavLink>
        </span>
      </span>
    </div>
  );
};

export default AdminSidebar;
