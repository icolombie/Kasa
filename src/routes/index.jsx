import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Location from "../pages/Location";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/location/:id" element={<Location />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
