import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from '../admin/AdminNav';
import AdminSidebar from '../admin/AdminSidebar';

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
