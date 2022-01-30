import 'aos/dist/aos.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import AddNotice from './components/admin/AddNotice';
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
import Recruiters from './components/Recruiters';
import Registration from './pages/Registration';
import RulesRegulations from './pages/RulesRegulations';
import SinglePost from './pages/SinglePost';
import StudentsCorner from './pages/StudentsCorner';
import Subscribers from './components/admin/Subscribers';
import Themes from './components/admin/Themes';
import { ToastContainer } from 'react-toastify';
import { getCurrentTheme } from './api/api';

function App() {
  const [currentTheme, setCurrentTheme] = useState('');
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
    const getData = async () => {
      const response = await getCurrentTheme();
      setCurrentTheme(response.data['current_theme']);
      localStorage.setItem('current_theme', response.data['current_theme']);
    };
    getData();
  }, []);

  return (
    <main className={currentTheme}>
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
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="allPosts" element={<AllPosts />} />
            <Route path="addPost" element={<AddPost />} />
            <Route path="addNotice" element={<AddNotice />} />
            <Route path="notices" element={<Notices />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="subscribers" element={<Subscribers />} />
            <Route path="themes" element={<Themes />} />
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
