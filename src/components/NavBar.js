//// src/components/NavBar.js
//import React from 'react';
//import { Link } from 'react-router-dom';
//
//const NavBar = () => {
//  return (
//    <nav style={{ padding: '1rem', background: '#eee' }}>
//      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
//        <li><Link to="/">Home</Link></li>
//        <li><Link to="/policyholders">Policyholders</Link></li>
//        <li><Link to="/policies">Policies</Link></li>
//        <li><Link to="/claims">Claims</Link></li>
//      </ul>
//    </nav>
//  );
//};
//
//export default NavBar;


// Newly changed Code for UI


// src/components/NavBar.js
//import React from 'react';
//import { AppBar, Toolbar, Typography, Button } from '@mui/material';
//import { Link, useNavigate } from 'react-router-dom';
//
//const NavBar = () => {
//  const navigate = useNavigate();
//  const token = localStorage.getItem('token');
//
//  const handleLogout = () => {
//    localStorage.removeItem('token');
//    localStorage.removeItem('username');
//    navigate('/login');
//  };
//
//  return (
//    <AppBar position="static">
//      <Toolbar>
//        <Typography variant="h6" sx={{ flexGrow: 1 }}>
//          Claims Management
//        </Typography>
//        <Button color="inherit" component={Link} to="/">Home</Button>
//        <Button color="inherit" component={Link} to="/policyholders">Policyholders</Button>
//        <Button color="inherit" component={Link} to="/policies">Policies</Button>
//        <Button color="inherit" component={Link} to="/claims">Claims</Button>
//        {token ? (
//          <Button color="inherit" onClick={handleLogout}>Logout</Button>
//        ) : (
//          <>
//            <Button color="inherit" component={Link} to="/login">Login</Button>
//            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
//          </>
//        )}
//      </Toolbar>
//    </AppBar>
//  );
//};
//
//export default NavBar;


// Updated version of the UI
//
//// src/components/NavBar.js
//import React from 'react';
//import { AppBar, Toolbar, Typography, Button } from '@mui/material';
//import { Link, useNavigate } from 'react-router-dom';
//
//const NavBar = () => {
//  const navigate = useNavigate();
//  const token = localStorage.getItem('token');
//
//  const handleLogout = () => {
//    localStorage.removeItem('token');
//    localStorage.removeItem('username');
//    navigate('/login');
//  };
//
//  return (
//    <AppBar position="static" sx={{ background: '#333' }}>
//      <Toolbar>
//        <Typography variant="h6" sx={{ flexGrow: 1 }}>
//          Claims Management
//        </Typography>
//        <Button color="inherit" component={Link} to="/">Home</Button>
//        <Button color="inherit" component={Link} to="/policyholders">Policyholders</Button>
//        <Button color="inherit" component={Link} to="/policies">Policies</Button>
//        <Button color="inherit" component={Link} to="/claims">Claims</Button>
//        {token ? (
//          <Button color="inherit" onClick={handleLogout}>Logout</Button>
//        ) : (
//          <>
//            <Button color="inherit" component={Link} to="/login">Login</Button>
//            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
//          </>
//        )}
//      </Toolbar>
//    </AppBar>
//  );
//};
//
//export default NavBar;







// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ background: '#333' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Claims Management
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/policyholders">Policyholders</Button>
        <Button color="inherit" component={Link} to="/policies">Policies</Button>
        <Button color="inherit" component={Link} to="/claims">Claims</Button>
        {token ? (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
