import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo2.png';

const AdminSidebar = () => {
  return (
    <div className="md:w-1/6  bg-primary-dark text-left md:h-screen md:sticky md:top-0 md:block">
      <div className="flex flex-col">
        <img src={logo} alt="logo" className="py-6 px-2" />
      </div>

      <hr className="sm:hidden md:block mx-4 my-2" />
      <span className="sm:hidden md:block md:text-md lg:text-lg ">
        <NavLink
          to="/admin/allPosts"
          className={({ isActive }) => {
            return `block text-gray-200 hover:bg-primary-dark transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
              isActive ? ' border-l-4' : ''
            }`;
          }}>
          POSTS
        </NavLink>
        <NavLink
          to="/admin/notices"
          className={({ isActive }) => {
            return `block text-gray-200 hover:bg-primary-dark transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
              isActive ? ' border-l-4' : ''
            }`;
          }}>
          NOTICES
        </NavLink>
        <NavLink
          to="/admin/blogs"
          className={({ isActive }) => {
            return `block text-gray-200 hover:bg-primary-dark transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
              isActive ? ' border-l-4' : ''
            }`;
          }}>
          BLOGS
        </NavLink>
        <NavLink
          to="/admin/subscribers"
          className={({ isActive }) => {
            return `block text-gray-200 hover:bg-primary-dark transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-8 ${
              isActive ? ' border-l-4' : ''
            }`;
          }}>
          SUBSCRIBERS
        </NavLink>
      </span>
    </div>
  );
};

export default AdminSidebar;
