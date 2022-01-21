import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo2.png'


const AdminSidebar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };
    let location = useLocation();
    return (
        <div className=' md:w-1/6 '>
            <div className='bg-headings text-center md:h-screen sticky top-0'>
                <div className='flex flex-col'>
                    <img src={logo} alt="logo" className="py-6 px-2" />
                    <AiOutlineMenu
                        className="md:hidden text-2xl text-white mx-4 mt-3"
                        onClick={() => {
                            handleToggle()
                        }}
                    />
                </div>
                <hr className='mx-4 my-2' />
                <span className={`lg:block ${navbarOpen ? "sm:m-auto" : "hidden"} `} >
                    <span className='md:text-md lg:text-lg'>
                        <Link to='/admin/allPosts' className={`block text-gray-200 hover:bg-navbackground transition-all duration-100 ease-out hover:text-white hover:border-l py-4 sm:pl-3 lg:px-8 ${location.pathname === '/admin/allPosts' ? 'border-l' : ''} `}>POSTS</Link>
                        <Link to='/admin/notices' className={`block text-gray-200 hover:bg-navbackground transition-all duration-100 ease-out hover:text-white hover:border-l py-4 sm:pl-3 lg:px-8 ${location.pathname === '/admin/notices' ? 'border-l' : ''}`}>NOTICES</Link>
                        <Link to='/admin/blogs' className={`block text-gray-200 hover:bg-navbackground transition-all duration-100 ease-out hover:text-white hover:border-l py-4 sm:pl-3 lg:px-8 ${location.pathname === '/admin/blogs' ? 'border-l' : ''}`}>BLOGS</Link>
                        <Link to='/admin/addPost' className={`block text-gray-200 hover:bg-navbackground transition-all duration-100 ease-out hover:text-white hover:border-l py-4 sm:pl-3 lg:px-8 ${location.pathname === '/admin/addPost' ? 'border-l' : ''} `}>ADD POSTS</Link>
                    </span></span>
            </div>
        </div>
    );
};

export default AdminSidebar;
