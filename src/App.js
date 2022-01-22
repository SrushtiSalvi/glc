import React from "react";
import Feed from "./components/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recruiters from "./components/Recruiters";
import StudentsCorner from "./pages/StudentsCorner";
import Registration from "./pages/Registration";
import ContactPage from "./pages/ContactPage";
import Chairman from "./pages/Chairman";
import Login from "./pages/Login";
import RulesRegulations from "./pages/RulesRegulations";
import NoticeBoard from "./pages/NoticeBoard";
import AddPost from "./components/admin/AddPost";
import AllPosts from "./components/admin/AllPosts";
import Notices from "./components/admin/Notices";
import Blogs from "./components/admin/Blogs";
import Layout from "./components/layouts/Layout";
import AdminLayout from "./components/layouts/AdminLayout";

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
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<Login />} />
          <Route path="rulesRegulations" element={<RulesRegulations />} />
          <Route path="noticeBoard" element={<NoticeBoard />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="allPosts" element={<AllPosts />} />
          <Route path="addPost" element={<AddPost />} />
          <Route path="notices" element={<Notices />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
