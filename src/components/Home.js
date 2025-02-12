// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { setAuthToken } from '../api/api';

const Home = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const generateToken = async () => {
    try {
      const response = await api.get('/generate-token');
      const newToken = response.data.access_token;
      localStorage.setItem('token', newToken);
      setAuthToken(newToken);
      setToken(newToken);
      alert('Token generated and saved!');
    } catch (error) {
      console.error(error);
      alert('Error generating token');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Claims Management App</h1>
      <button onClick={generateToken}>Generate Token</button>
      <hr />
      <h2>Entities</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => navigate('/policyholders')}>Policyholders</button>
        <button onClick={() => navigate('/policies')}>Policies</button>
        <button onClick={() => navigate('/claims')}>Claims</button>
      </div>
    </div>
  );
};

export default Home;
