import Footer from '../Footer';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import React from 'react';

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
