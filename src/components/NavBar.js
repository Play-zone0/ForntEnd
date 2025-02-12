// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/policyholders">Policyholders</Link></li>
        <li><Link to="/policies">Policies</Link></li>
        <li><Link to="/claims">Claims</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
