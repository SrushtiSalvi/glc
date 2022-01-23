import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo2.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={
        match
          ? "text-yellow-600 underline underline-offset-4 decoration-white"
          : "hover:text-yellow-600"
      }
    >
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
    <nav className="bg-navbackground flex-row md:flex justify-between">
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
              navbarOpen ? "flex-row" : "hidden"
            } `}
          >
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/chairman">CHAIRMAN</NavLink>
            </li>
            <li>
              <NavLink to="/recruiters">RECRUITERS</NavLink>
            </li>
            <li>
              <NavLink to="/students-corner">STUDENTS CORNER</NavLink>
            </li>
            <li>
              <NavLink to="/registration">REGISTRATION</NavLink>
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
