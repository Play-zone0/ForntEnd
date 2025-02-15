//// src/components/Login.js
//import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { Container, TextField, Button, Typography, Card, CardContent } from '@mui/material';
//import api, { setAuthToken } from '../api/api';
//
//const Login = () => {
//  const [username, setUsername] = useState('');
//  const [password, setPassword] = useState(''); // for UI only
//  const navigate = useNavigate();
//
//  const handleLogin = async (e) => {
//    e.preventDefault();
//    // Check if a token exists for the same username
//    const storedUser = localStorage.getItem('username');
//    const storedToken = localStorage.getItem('token');
//    if (storedUser === username && storedToken) {
//      setAuthToken(storedToken);
//      navigate('/');
//      return;
//    }
//    try {
//      // Call the backend to generate a token (backend uses a test user here)
//      const response = await api.get('/generate-token');
//      const token = response.data.access_token;
//      localStorage.setItem('token', token);
//      localStorage.setItem('username', username);
//      setAuthToken(token);
//      navigate('/');
//    } catch (error) {
//      console.error(error);
//      alert('Login failed');
//    }
//  };
//
//  return (
//    <Container maxWidth="sm" sx={{ mt: 4 }}>
//      <Card>
//        <CardContent>
//          <Typography variant="h5" gutterBottom>Login</Typography>
//          <form onSubmit={handleLogin}>
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
//              Login
//            </Button>
//          </form>
//        </CardContent>
//      </Card>
//    </Container>
//  );
//};
//
//export default Login;


// V2 after adding the cards UI

//// src/components/Login.js
//import React, { useState } from 'react';
//import { Container, TextField, Button, Typography, Card, CardContent, Box } from '@mui/material';
//import { useNavigate } from 'react-router-dom';
//import api, { setAuthToken } from '../api/api';
//
//const Login = () => {
//  const [username, setUsername] = useState('');
//  const [password, setPassword] = useState(''); // For UI only
//  const navigate = useNavigate();
//
//  const handleLogin = async (e) => {
//    e.preventDefault();
//    // Check if a token exists for the same username
//    const storedUser = localStorage.getItem('username');
//    const storedToken = localStorage.getItem('token');
//    if (storedUser === username && storedToken) {
//      setAuthToken(storedToken);
//      navigate('/');
//      return;
//    }
//    try {
//      // Call the backend to generate a token
//      const response = await api.get('/generate-token');
//      const token = response.data.access_token;
//      localStorage.setItem('token', token);
//      localStorage.setItem('username', username);
//      setAuthToken(token);
//      navigate('/');
//    } catch (error) {
//      console.error(error);
//      alert('Login failed');
//    }
//  };
//
//  return (
//    <Container maxWidth="sm" sx={{ mt: 8 }}>
//      <Card
//        sx={{
//          borderRadius: 4,
//          boxShadow: 4,
//          background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
//          color: 'white',
//          p: 2
//        }}
//      >
//        <CardContent>
//          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
//            Login
//          </Typography>
//          <Box
//            component="form"
//            onSubmit={handleLogin}
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
//              Login
//            </Button>
//          </Box>
//        </CardContent>
//      </Card>
//    </Container>
//  );
//};
//
//export default Login;



// src/components/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api, { setAuthToken } from '../api/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await api.post('/login', { username, password });
      const token = response.data.access_token;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      setAuthToken(token);
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 4,
          background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
          color: 'white',
          p: 2
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
            Login
          </Typography>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress color="secondary" />
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleLogin}
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
                Login
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;

