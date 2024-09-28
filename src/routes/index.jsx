import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Location from '../pages/Location';
import About from '../pages/About';

const Paths = () => (
  <Routes>
    <Route path="/" element={Home} />
    <Route path="/location" element={Location} />
    <Route path="/about" element={About} />
  </Routes>
);

export default Paths