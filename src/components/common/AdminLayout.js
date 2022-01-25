import AdminNav from "../admin/AdminNav";
import AdminSidebar from "../admin/AdminSidebar";
import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    console.log(accessToken);
    if (!accessToken) {
      navigate("/login");
      toast.warning("please login first");
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
