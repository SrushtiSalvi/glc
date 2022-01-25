import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import AdminNav from '../admin/AdminNav';
import AdminSidebar from '../admin/AdminSidebar';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      navigate('/login');
      toast.warning('please login first');
    }
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
      <AdminSidebar />
      <div className="bg-gray-100 flex-grow">
        <AdminNav />
        <Outlet />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default AdminLayout;
