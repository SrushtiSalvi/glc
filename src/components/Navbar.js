import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo2.png";

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
        className="bg-red h-15 w-100 md:h-20 md:w-150 mx-auto md:mx-2"
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
            className="md:hidden text-2xl text-white ml-4 mt-3"
            onClick={handleToggle}
          />
        </div>
        <div className="flex space-x-10 text-white text-sm justify-end">
          <ul
            className={`md:flex space-x-4 ${
              navbarOpen ? "flex-row" : "hidden"
            } `}
          >
            <li className="hover:text-yellow-600 text-yellow-700 underline underline-offset-4 decoration-white">
              HOME
            </li>
            <li className="hover:text-yellow-600">CHAIRMAN</li>
            <li className="hover:text-yellow-600">RECRUITERS</li>
            <li className="hover:text-yellow-600">STUDENTS CORNER</li>
            <li className="hover:text-yellow-600">REGISTRATION</li>
            <li className="hover:text-yellow-600">CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
