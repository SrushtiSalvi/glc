import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { ImFacebook } from 'react-icons/im';
import logo from '../assets/logo2.png';

function NavLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      to={to}
      {...props}
      className={
        match
          ? 'text-yellow-600 underline underline-offset-4 decoration-white'
          : 'hover:text-yellow-600'
      }>
      {children}
    </Link>
  );
}

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
    console.log(navbarOpen);
  };

  return (
    <nav className="bg-primary-dark flex-row md:flex justify-between">
      <img
        src={logo}
        alt="logo"
        className="h-15 w-100 md:h-20 md:w-150 mx-auto md:mx-2"
      />
      <div className="pt-3 md:py-4 space-y-4 px-6">
        <div className="flex justify-end">
          <div className="flex space-x-4 md:justify-end justify-center mt-4 text-sm text-white">
            <ImFacebook />
            <GrInstagram />
            <BsFillTelephoneFill />
            <HiOutlineMail />
          </div>
          <div className="ml-6 mt-3">
            <button className="border-2 text-white text-sm rounded px-3 ">
              Subscribe
            </button>
          </div>
          <AiOutlineMenu
            className="lg:hidden text-2xl text-white ml-4 mt-3"
            onClick={handleToggle}
          />
        </div>
        <div className="flex space-x-10 text-white text-sm justify-center md:justify-end text-center">
          <ul
            className={`lg:flex space-x-4 ${
              navbarOpen ? 'flex-row' : 'hidden'
            } `}>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/chairman">CHAIRMAN</NavLink>
            </li>
            <li>
              <Menu>
                <Menu.Button className="my-auto flex flex-row space-x-2 ">
                  <p className="my-auto hover:text-yellow-600"> RECRUITERS </p>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-in duration-100"
                  enterFrom="transform opacity-0 scale-100"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute z-10 mt-3 right-52 bg-primary-dark rounded-sm shadow-lg">
                    <div className="w-full ">
                      <Menu.Item>
                        <Link
                          to="/recruitmentProcess"
                          className="flex transition-all duration-100 hover:font-semibold items-center px-6 py-2 w-full text-md">
                          Recruitment Process
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/registrationForm"
                          className="flex transition-all duration-100 hover:font-semibold items-center px-6 py-2 w-full text-md">
                          Registration Form
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/pastRecruiters"
                          className="flex transition-all duration-100 hover:font-semibold items-center px-6 py-2 w-full text-md">
                          Past Recruiters
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/brochureForRecruiters"
                          className="flex transition-all duration-100 hover:font-semibold items-center px-6 py-2 w-full text-md">
                          Brochure for Recruiters
                        </Link>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li>
              <Menu>
                <Menu.Button className="my-auto flex flex-row space-x-2 ">
                  <p className="my-auto hover:text-yellow-600">
                    STUDENTS CORNER
                  </p>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-in duration-100"
                  enterFrom="transform opacity-0 scale-100"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute z-10 mt-3 right-24 bg-primary-dark rounded-sm shadow-lg">
                    <div className="w-full ">
                      <Menu.Item>
                        <Link
                          to="/noticeBoard"
                          className="flex transition-all duration-100 hover:font-semibold items-center px-6 py-2 w-full text-md">
                          Notice Board
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/rulesNRegulations"
                          className="flex transition-all duration-100 hover:font-semibold items-center px-6 py-2 w-full text-md">
                          Rules and Regulations
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/cvFormat"
                          className="flex transition-all duration-100 hover:font-semibold items-center px-6 py-2 w-full text-md">
                          New-Placement-CV-Format
                        </Link>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
