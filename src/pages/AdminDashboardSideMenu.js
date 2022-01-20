import React from "react";
import { NavLink } from "react-router-dom";

const AdminDashboardSideMenu = () => {
  return (
    <div className="flex flex-col bg-headings text-white w-1/5 h-screen">
      <NavLink
        to="/admin/posts"
        className="block hover:bg-navbackground p-4 transition-all duration-150 ease-out"
      >
        Posts
      </NavLink>
      <NavLink
        to="/admin/subscribers"
        className="block hover:bg-navbackground p-4 transition-all duration-150 ease-out"
      >
        Subscribers
      </NavLink>
    </div>
  );
};

export default AdminDashboardSideMenu;
