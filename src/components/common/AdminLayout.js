import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashboardSideMenu from "../../pages/AdminDashboardSideMenu";

function AdminLayout() {
  return (
    <div className="flex">
      <AdminDashboardSideMenu />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
