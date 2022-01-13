import React from "react";
import Homepage from "./components/Feed";
import Chairman from "./components/Chairman";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Recruiters from "./components/Recruiters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="chairman" element={<Chairman />} />
          <Route path="recruiters" element={<Recruiters />} />
        </Route>
        <Route path="/admin" element={<div>admin page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
