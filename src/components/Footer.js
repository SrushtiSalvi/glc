import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex-row">
      <div className="hidden bg-primary md:grid grid-cols-4">
        <div className="text-white m-8">
          <h1 className="text-sm font-bold p-2 border-0 bg-primaryLight">
            QUICK LINKS
          </h1>
          <div className="text-xs space-y-4 p-2">
            <Link to="/" className="hover:underline">
              Downloads for Recruiters
            </Link>
            <hr className="pb-3 " />
            <Link to="/" className="hover:underline">
              Interview Schedule
            </Link>
            <hr className="pb-3 " />
            <Link to="/" className="hover:underline">
              Notice Board
            </Link>
            <hr className="pb-3 " />
            <Link to="/" className="hover:underline">
              Rules & Regulations
            </Link>
            <hr className="pb-3 " />
          </div>
        </div>

        <div className="text-white m-8">
          <h1 className="text-sm font-bold p-2 border-0 bg-primaryLight">
            LINKS
          </h1>
          <div className="text-xs space-y-4 p-2">
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <hr className="pb-3 " />
            <Link to="/" className="hover:underline">
              Login
            </Link>
            <hr className="pb-3 " />
            <Link to="/chairman" className="hover:underline">
              Message From Chairman
            </Link>
            <hr className="pb-3 " />
            <Link to="/" className="hover:underline">
              Past Recruiters
            </Link>
            <hr className="pb-3 " />
            <Link to="/registration" className="hover:underline">
              Recruiters Registration
            </Link>
            <hr className="pb-3 " />
          </div>
        </div>

        <div className="text-white m-8">
          <h1 className="text-sm font-bold p-2 border-0 bg-primaryLight">
            LATEST NOTICES
          </h1>
          <div className="text-xs space-y-4 p-2">
            <Link to="/" className="hover:underline">
              Mirchandani Advocates & Co.
            </Link>
            <hr className="pb-3 " />
            <Link to="/" className="hover:underline">
              Vidur Legal
            </Link>
            <hr className="pb-3 " />
            <Link to="/" className="hover:underline">
              Mirchandani Advocates & Co
            </Link>
            <hr className="pb-3 " />
            <Link to="/" className="hover:underline">
              Adv. Sangram Chinnappa
            </Link>
            <hr className="pb-3 " />
          </div>
        </div>

        <div className="text-white m-8">
          <h1 className="text-sm font-bold p-2 border-0 bg-primaryLight">
            QUICK LINKS
          </h1>
          <div className="text-xs p-2">
            <p className="pb-4">
              The Government Law College 'A' Road, Churchgate Mumbai - 400 020
              Maharastra - India
            </p>
            <Link to="/" className="hover:underline">
              placements.glc@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primaryLight flex justify-evenly text-white py-4 text-xs">
        <span>
          © 2022 <Link to="/"> Government Law College</Link>
        </span>
        <span>
          Powered by<Link to="/"> OGTech</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
