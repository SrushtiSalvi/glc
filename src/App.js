import React from "react";
import Feed from "./components/Feed";
import Layout from "./components/common/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recruiters from "./components/Recruiters";
import StudentsCorner from "./pages/StudentsCorner";
import Registration from "./pages/Registration";
import ContactPage from "./pages/ContactPage";
import Chairman from "./pages/Chairman";
import Login from "./pages/Login";
import RulesRegulations from "./pages/RulesRegulations";

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
        </Route>
        {/* <Route path="/admin" element={<div>admin page</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
