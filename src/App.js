// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Policyholders from './components/Policyholders';
import Policies from './components/Policies';
import Claims from './components/Claims';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policyholders" element={<Policyholders />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/claims" element={<Claims />} />
      </Routes>
    </Router>
  );
}

export default App;
