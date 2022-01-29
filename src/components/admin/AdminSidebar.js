import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo2.png';
import { IoIosPhotos, IoMdSettings } from 'react-icons/io';
import { BiNotepad } from 'react-icons/bi';
import { ImBlog } from 'react-icons/im';
import { BsPeopleFill } from 'react-icons/bs';

const AdminSidebar = () => {
  return (
    <div className="md:w-1/6 hidden bg-primary-dark text-left md:h-screen md:sticky md:top-0 md:block">
      <div className="flex flex-col">
        <img src={logo} alt="logo" className="py-6 px-2" />
      </div>

      <hr className="sm:hidden md:block mx-4 my-2" />
      <span className="sm:hidden md:block md:text-md lg:text-lg ">
        <NavLink
          to="/admin/allPosts"
          className={({ isActive }) => {
            return ` flex text-gray-200 hover:bg-primary-dark transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-4 ${
              isActive ? ' border-l-4' : ''
            }`;
          }}>
          <IoIosPhotos className="mr-6 mt-1" />
          POSTS
        </NavLink>
        <NavLink
          to="/admin/notices"
          className={({ isActive }) => {
            return `flex text-gray-200 hover:bg-primary-dark transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-4 ${
              isActive ? ' border-l-4' : ''
            }`;
          }}>
          <BiNotepad className="mr-6 mt-1" />
          NOTICES
        </NavLink>
        <NavLink
          to="/admin/blogs"
          className={({ isActive }) => {
            return `flex text-gray-200 hover:bg-primary-dark transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-4 ${
              isActive ? ' border-l-4' : ''
            }`;
          }}>
          <ImBlog className="mr-6 mt-1" />
          BLOGS
        </NavLink>
        <NavLink
          to="/admin/subscribers"
          className={({ isActive }) => {
            return `flex text-gray-200 hover:bg-primary-dark transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-4 ${
              isActive ? ' border-l-4' : ''
            }`;
          }}>
          <BsPeopleFill className="mr-6 mt-1" />
          SUBSCRIBERS
        </NavLink>
        <NavLink
          to="/admin/themes"
          className={({ isActive }) => {
            return `flex text-gray-200 hover:bg-primary-dark transition-all duration-100 ease-out hover:text-white hover:border-l-4 py-4 sm:pl-3 lg:px-4 ${
              isActive ? ' border-l-4' : ''
            }`;
          }}>
          <IoMdSettings className="my-1 mr-6" />
          CONFIGURATIONS
        </NavLink>
      </span>
    </div>
  );
};

export default AdminSidebar;
