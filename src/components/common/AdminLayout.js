import AdminNav from '../admin/AdminNav';
import AdminSidebar from '../admin/AdminSidebar';
import { Outlet } from 'react-router-dom';
import React from 'react';

const AdminLayout = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <AdminSidebar />
        <div className="flex-row bg-gray-100 sm:w-full md:w-5/6">
          <AdminNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
