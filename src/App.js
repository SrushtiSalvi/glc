import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddPost from './components/admin/AddPost';
import AdminLayout from './components/common/AdminLayout';
import AdminSignup from './pages/AdminSignup';
import AllPosts from './components/admin/AllPosts';
import Blogs from './components/admin/Blogs';
import Chairman from './pages/Chairman';
import ContactPage from './pages/ContactPage';
import Feed from './components/Feed';
import ForgotPassword from './pages/ForgotPassword';
import Layout from './components/common/Layout';
import Login from './components/admin/Login';
import Notices from './components/admin/Notices';
import React from 'react';
import Recruiters from './components/Recruiters';
import Registration from './pages/Registration';
import RulesRegulations from './pages/RulesRegulations';
import SinglePost from './pages/SinglePost';
import StudentsCorner from './pages/StudentsCorner';
import Subscribers from './components/admin/Subscribers';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <main className="theme-crimson">
      <ToastContainer
        role="alert"
        theme="dark"
        newestOnTop
        position="bottom-right"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Feed />} />
            <Route path="chairman" element={<Chairman />} />
            <Route path="recruiters" element={<Recruiters />} />
            <Route path="students-corner" element={<StudentsCorner />} />
            <Route path="registration" element={<Registration />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="rulesRegulations" element={<RulesRegulations />} />
            <Route path="post/:id" element={<SinglePost />} />
            {/* <Route path="singlePost" element={<SinglePost />} /> */}
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="allPosts" element={<AllPosts />} />
            <Route path="addPost" element={<AddPost />} />
            <Route path="notices" element={<Notices />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="subscribers" element={<Subscribers />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="admin/forgotPassword" element={<ForgotPassword />} />
          <Route path="admin/signup" element={<AdminSignup />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
