import React from "react";

const Footer = () => {
  return (
    <div className="flex-row">
      <div className="hidden bg-[#022a4d] md:grid grid-cols-4 px-40">
        <div className="text-white m-8">
          <h1 className="text-sm font-bold p-2 border-0 bg-[#003969]">QUICK LINKS</h1>
          <div className="text-xs space-y-4 p-2">
            <a href="/" className="hover:underline">Downloads for Recruiters</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Interview Schedule</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Notice Board</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Rules & Regulations</a>
            <hr className="pb-3 "/>
          </div>
        </div>

        <div className="text-white m-8">
          <h1 className="text-sm font-bold p-2 border-0 bg-[#003969]">LINKS</h1>
          <div className="text-xs space-y-4 p-2">
            <a href="/" className="hover:underline">Contact</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Login</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Message From Chairman</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Past Recruiters</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Recruiters Registration</a>
            <hr className="pb-3 "/>
            
          </div>
        </div>

        <div className="text-white m-8">
          <h1 className="text-sm font-bold p-2 border-0 bg-[#003969]">LATEST NOTICES</h1>
          <div className="text-xs space-y-4 p-2">
            <a href="/" className="hover:underline">Mirchandani Advocates & Co.</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Vidur Legal</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Mirchandani Advocates & Co</a>
            <hr className="pb-3 "/>
            <a href="/" className="hover:underline">Adv. Sangram Chinnappa</a>
            <hr className="pb-3 "/>
          </div>
        </div>

        <div className="text-white m-8">
          <h1 className="text-sm font-bold p-2 border-0 bg-[#003969]">QUICK LINKS</h1>
          <div className="text-xs p-2">
            <p className="pb-4">The Government Law College 'A' Road, Churchgate Mumbai - 400 020 Maharastra - India</p>
            <a href="/" className="hover:underline">placements.glc@gmail.com</a>
          </div>
        </div>
        
      </div>
      <div className="bg-[#003969] flex justify-evenly text-white py-4 text-xs">
          <span>© 2022 <a href="/"> Government Law College</a></span>
          <span>Powered by<a href="/"> OGTech</a></span>
      </div>
    </div>
  );
};

export default Footer;
