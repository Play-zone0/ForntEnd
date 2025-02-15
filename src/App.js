//// src/App.js
//import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NavBar from './components/NavBar';
//import Home from './components/Home';
//import Policyholders from './components/Policyholders';
//import Policies from './components/Policies';
//import Claims from './components/Claims';
//
//function App() {
//  return (
//    <Router>
//      <NavBar />
//      <Routes>
//        <Route path="/" element={<Home />} />
//        <Route path="/policyholders" element={<Policyholders />} />
//        <Route path="/policies" element={<Policies />} />
//        <Route path="/claims" element={<Claims />} />
//      </Routes>
//    </Router>
//  );
//}
//
//export default App;



// for UI

//// src/App.js
//import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NavBar from './components/NavBar';
//import Home from './components/Home';
//import Policyholders from './components/Policyholders';
//import Policies from './components/Policies';
//import Claims from './components/Claims';
//import Login from './components/Login';
//import Signup from './components/Signup';
//
//function App() {
//  return (
//    <Router>
//      <NavBar />
//      <Routes>
//        <Route path="/" element={<Home />} />
//        <Route path="/policyholders" element={<Policyholders />} />
//        <Route path="/policies" element={<Policies />} />
//        <Route path="/claims" element={<Claims />} />
//        <Route path="/login" element={<Login />} />
//        <Route path="/signup" element={<Signup />} />
//      </Routes>
//    </Router>
//  );
//}
//
//export default App;


// changes to the UI

// src/App.js
//import React, { useEffect } from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { setAuthToken } from './api/api';
//import NavBar from './components/NavBar';
//import Home from './components/Home';
//import Policyholders from './components/Policyholders';
//import Policies from './components/Policies';
//import Claims from './components/Claims';
//import Login from './components/Login';
//import Signup from './components/Signup';
//
//function App() {
//  useEffect(() => {
//    const token = localStorage.getItem('token');
//    if (token) {
//      setAuthToken(token);
//    }
//  }, []);
//
//  return (
//    <Router>
//      <NavBar />
//      <Routes>
//        <Route path="/" element={<Home />} />
//        <Route path="/policyholders" element={<Policyholders />} />
//        <Route path="/policies" element={<Policies />} />
//        <Route path="/claims" element={<Claims />} />
//        <Route path="/login" element={<Login />} />
//        <Route path="/signup" element={<Signup />} />
//      </Routes>
//    </Router>
//  );
//}
//
//export default App;



// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setAuthToken } from './api/api';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Policyholders from './components/Policyholders';
import Policies from './components/Policies';
import Claims from './components/Claims';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
    setAuthInitialized(true);
  }, []);

  if (!authInitialized) {
    return <div>Loading authentication...</div>;
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policyholders" element={<Policyholders />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

