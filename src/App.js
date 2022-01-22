import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddPost from './components/admin/AddPost';
import AdminDashboard from './pages/AdminDashboard';
import AdminLayout from './components/common/AdminLayout';
import AdminSignup from './pages/AdminSignup';
import AllPosts from './components/admin/AllPosts';
import Blogs from './components/admin/Blogs';
import Chairman from './pages/Chairman';
import ContactPage from './pages/ContactPage';
import ContactPage1 from './pages/ContactPage1';
import DashboardPost from './pages/DashboardPost';
import DashboardSubscribers from './pages/DashboardSubscribers';
import Feed from './components/Feed';
import Layout from './components/common/Layout';
import Login from './pages/Login';
import Notices from './components/admin/Notices';
import React from 'react';
import Recruiters from './components/Recruiters';
import Registration from './pages/Registration';
import RulesRegulations from './pages/RulesRegulations';
import StudentsCorner from './pages/StudentsCorner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="chairman" element={<Chairman />} />
          <Route path="recruiters" element={<Recruiters />} />
          <Route path="students-corner" element={<StudentsCorner />} />
          <Route path="registration" element={<Registration />} />
          {/* <Route path="contact" element={<ContactPage />} /> */}
          <Route path="contact" element={<ContactPage />} />
          <Route path="rulesRegulations" element={<RulesRegulations />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="allPosts" element={<AllPosts />} />
          <Route path="addPost" element={<AddPost />} />
          <Route path="notices" element={<Notices />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="posts" element={<DashboardPost />} />
          <Route path="subscribers" element={<DashboardSubscribers />} />
        </Route>
        <Route path="admin/signup" element={<AdminSignup />} />
        {/* <Route path="/admin" element={<div>admin page</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
