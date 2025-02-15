//// src/components/Home.js
//import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import api, { setAuthToken } from '../api/api';
//
//const Home = () => {
//  const [token, setToken] = useState('');
//  const navigate = useNavigate();
//
//  const generateToken = async () => {
//    try {
//      const response = await api.get('/generate-token');
//      const newToken = response.data.access_token;
//      localStorage.setItem('token', newToken);
//      setAuthToken(newToken);
//      setToken(newToken);
//      alert('Token generated and saved!');
//    } catch (error) {
//      console.error(error);
//      alert('Error generating token');
//    }
//  };
//
//  return (
//    <div style={{ padding: '1rem' }}>
//      <h1>Claims Management App</h1>
//      <button onClick={generateToken}>Generate Token</button>
//      <hr />
//      <h2>Entities</h2>
//      <div style={{ display: 'flex', gap: '1rem' }}>
//        <button onClick={() => navigate('/policyholders')}>Policyholders</button>
//        <button onClick={() => navigate('/policies')}>Policies</button>
//        <button onClick={() => navigate('/claims')}>Claims</button>
//      </div>
//    </div>
//  );
//};
//
//export default Home;




// Updated code for UI

//// src/components/Home.js
//import React from 'react';
//import { Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
//import { useNavigate } from 'react-router-dom';
//
//const Home = () => {
//  const navigate = useNavigate();
//
//  return (
//    <Container sx={{ mt: 4 }}>
//      <Card>
//        <CardContent>
//          <Typography variant="h4" gutterBottom>
//            Welcome to Claims Management
//          </Typography>
//          <Typography variant="body1" gutterBottom>
//            Manage Policyholders, Policies, and Claims with ease.
//          </Typography>
//          <Grid container spacing={2} sx={{ mt: 2 }}>
//            <Grid item>
//              <Button variant="contained" color="primary" onClick={() => navigate('/policyholders')}>
//                Policyholders
//              </Button>
//            </Grid>
//            <Grid item>
//              <Button variant="contained" color="primary" onClick={() => navigate('/policies')}>
//                Policies
//              </Button>
//            </Grid>
//            <Grid item>
//              <Button variant="contained" color="primary" onClick={() => navigate('/claims')}>
//                Claims
//              </Button>
//            </Grid>
//          </Grid>
//        </CardContent>
//      </Card>
//    </Container>
//  );
//};
//
//export default Home;

// UI changes


//// src/components/Home.js
//import React from 'react';
//import { Container, Typography, Button, Card, CardContent, Grid, Box } from '@mui/material';
//import { useNavigate } from 'react-router-dom';
//
//const Home = () => {
//  const navigate = useNavigate();
//
//  return (
//    <Container sx={{ mt: 4 }}>
//      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//        <Card
//          sx={{
//            maxWidth: 600,
//            borderRadius: 4,
//            boxShadow: 6,
//            background: 'linear-gradient(135deg, #84fab0, #8fd3f4)'
//          }}
//        >
//          <CardContent>
//            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#fff' }}>
//              Welcome to Claims Management
//            </Typography>
//            <Typography variant="body1" gutterBottom sx={{ textAlign: 'center', color: '#fff' }}>
//              Manage Policyholders, Policies, and Claims with ease.
//            </Typography>
//            <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
//              <Grid item>
//                <Button variant="contained" color="secondary" onClick={() => navigate('/policyholders')}>
//                  Policyholders
//                </Button>
//              </Grid>
//              <Grid item>
//                <Button variant="contained" color="secondary" onClick={() => navigate('/policies')}>
//                  Policies
//                </Button>
//              </Grid>
//              <Grid item>
//                <Button variant="contained" color="secondary" onClick={() => navigate('/claims')}>
//                  Claims
//                </Button>
//              </Grid>
//            </Grid>
//          </CardContent>
//        </Card>
//      </Box>
//    </Container>
//  );
//};
//
//export default Home;



// src/components/Home.js
import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            maxWidth: 600,
            borderRadius: 4,
            boxShadow: 6,
            background: 'linear-gradient(135deg, #84fab0, #8fd3f4)'
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#fff' }}>
              Welcome to Claims Management
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ textAlign: 'center', color: '#fff' }}>
              Manage Policyholders, Policies, and Claims with ease.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
              <Grid item>
                <Button variant="contained" color="secondary" onClick={() => navigate('/policyholders')}>
                  Policyholders
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" onClick={() => navigate('/policies')}>
                  Policies
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" onClick={() => navigate('/claims')}>
                  Claims
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Home;

