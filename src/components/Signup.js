//// src/components/Signup.js
//import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { Container, TextField, Button, Typography, Card, CardContent } from '@mui/material';
//
//const Signup = () => {
//  const [username, setUsername] = useState('');
//  const [password, setPassword] = useState('');
//  const navigate = useNavigate();
//
//  const handleSignup = (e) => {
//    e.preventDefault();
//    // In a real app, you would send a request to your backend.
//    localStorage.setItem('signupUser', username);
//    alert('Signup successful! Please login.');
//    navigate('/login');
//  };
//
//  return (
//    <Container maxWidth="sm" sx={{ mt: 4 }}>
//      <Card>
//        <CardContent>
//          <Typography variant="h5" gutterBottom>Sign Up</Typography>
//          <form onSubmit={handleSignup}>
//            <TextField
//              label="Username"
//              fullWidth
//              margin="normal"
//              value={username}
//              onChange={(e) => setUsername(e.target.value)}
//              required
//            />
//            <TextField
//              label="Password"
//              type="password"
//              fullWidth
//              margin="normal"
//              value={password}
//              onChange={(e) => setPassword(e.target.value)}
//              required
//            />
//            <Button type="submit" variant="contained" color="primary" fullWidth>
//              Sign Up
//            </Button>
//          </form>
//        </CardContent>
//      </Card>
//    </Container>
//  );
//};
//
//export default Signup;


//V2 after adding the cards UI

//// src/components/Signup.js
//import React, { useState } from 'react';
//import { Container, TextField, Button, Typography, Card, CardContent, Box } from '@mui/material';
//import { useNavigate } from 'react-router-dom';
//
//const Signup = () => {
//  const [username, setUsername] = useState('');
//  const [password, setPassword] = useState('');
//  const navigate = useNavigate();
//
//  const handleSignup = (e) => {
//    e.preventDefault();
//    // In a real app, send a request to your backend.
//    localStorage.setItem('signupUser', username);
//    alert('Signup successful! Please login.');
//    navigate('/login');
//  };
//
//  return (
//    <Container maxWidth="sm" sx={{ mt: 8 }}>
//      <Card
//        sx={{
//          borderRadius: 4,
//          boxShadow: 4,
//          background: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
//          color: 'white',
//          p: 2
//        }}
//      >
//        <CardContent>
//          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
//            Sign Up
//          </Typography>
//          <Box
//            component="form"
//            onSubmit={handleSignup}
//            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
//          >
//            <TextField
//              label="Username"
//              variant="filled"
//              fullWidth
//              value={username}
//              onChange={(e) => setUsername(e.target.value)}
//              InputProps={{
//                sx: { backgroundColor: 'white', borderRadius: 1 },
//              }}
//              required
//            />
//            <TextField
//              label="Password"
//              type="password"
//              variant="filled"
//              fullWidth
//              value={password}
//              onChange={(e) => setPassword(e.target.value)}
//              InputProps={{
//                sx: { backgroundColor: 'white', borderRadius: 1 },
//              }}
//              required
//            />
//            <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
//              Sign Up
//            </Button>
//          </Box>
//        </CardContent>
//      </Card>
//    </Container>
//  );
//};
//
//export default Signup;




// src/components/Signup.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const response = await api.post('/signup', { username, password });
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      setErrorMsg(error.response?.data?.detail || 'Signup failed');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 4,
          background: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
          color: 'white',
          p: 2
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSignup}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              label="Username"
              variant="filled"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                sx: { backgroundColor: 'white', borderRadius: 1 },
              }}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                sx: { backgroundColor: 'white', borderRadius: 1 },
              }}
              required
            />
            {errorMsg && (
              <Typography variant="body2" color="error" align="center">
                {errorMsg}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Signup;
