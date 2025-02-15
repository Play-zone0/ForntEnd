//// src/components/Policyholders.js
//import React, { useState, useEffect } from 'react';
//import api from '../api/api';
//
//const Policyholders = () => {
//  const [policyholders, setPolicyholders] = useState([]);
//  const [newHolder, setNewHolder] = useState({ id: '', name: '', age: '' });
//  const [editingId, setEditingId] = useState(null);
//  const [editingData, setEditingData] = useState({ id: '', name: '', age: '' });
//
//  useEffect(() => {
//    fetchPolicyholders();
//  }, []);
//
//  const fetchPolicyholders = async () => {
//    try {
//      const response = await api.get('/policyholders/');
//      setPolicyholders(response.data);
//    } catch (error) {
//      console.error(error);
//      alert('Error fetching policyholders');
//    }
//  };
//
//  const handleCreate = async (e) => {
//    e.preventDefault();
//    try {
//      // The backend may auto-generate the id so we only send name and age.
//      const payload = {
//        id: Number(newHolder.id),
//        name: newHolder.name,
//        age: Number(newHolder.age)
//      };
//      await api.post('/policyholder/', payload);
//      setNewHolder({ id: '', name: '', age: '' });
//      fetchPolicyholders();
//    } catch (error) {
//      console.error(error);
//      alert('Error creating policyholder');
//    }
//  };
//
//  const handleEdit = (holder) => {
//    setEditingId(holder.id);
//    setEditingData({ id: holder.id, name: holder.name, age: holder.age });
//  };
//
//  const handleUpdate = async (id) => {
//    try {
//      const payload = {
//          id: Number(editingData.id),
//          name: editingData.name,
//          age: Number(editingData.age)
//      };
//      await api.put(`/policyholder/${id}`, payload);
//      setEditingId(null);
//      fetchPolicyholders();
//    } catch (error) {
//      console.error(error);
//      alert('Error updating policyholder');
//    }
//  };
//
//  const handleDelete = async (id) => {
//    try {
//      await api.delete(`/policyholder/${id}`);
//      fetchPolicyholders();
//    } catch (error) {
//      console.error(error);
//      alert('Error deleting policyholder');
//    }
//  };
//
//  return (
//    <div style={{ padding: '1rem' }}>
//      <h1>Policyholders</h1>
//      <form onSubmit={handleCreate}>
//        <h2>Create Policyholder</h2>
//        <input
//          type="number"
//          placeholder="ID"
//          value={newHolder.id}
//          onChange={(e) => setNewHolder({ ...newHolder, id: e.target.value })}
//          required
//        />
//        <input
//          type="text"
//          placeholder="Name"
//          value={newHolder.name}
//          onChange={(e) => setNewHolder({ ...newHolder, name: e.target.value })}
//          required
//        />
//        <input
//          type="number"
//          placeholder="Age"
//          value={newHolder.age}
//          onChange={(e) => setNewHolder({ ...newHolder, age: e.target.value })}
//          required
//        />
//        <button type="submit">Create</button>
//      </form>
//      <hr />
//      <h2>Existing Policyholders</h2>
//      <ul>
//        {policyholders.map((holder) => (
//          <li key={holder.id} style={{ marginBottom: '1rem' }}>
//            {editingId === holder.id ? (
//              <>
//                <input
//                  type="number"
//                  value={editingData.id}
//                  onChange={(e) =>
//                    setEditingData({ ...editingData, id: e.target.value })
//                  }
//                />
//                <input
//                  type="text"
//                  value={editingData.name}
//                  onChange={(e) =>
//                    setEditingData({ ...editingData, name: e.target.value })
//                  }
//                />
//                <input
//                  type="number"
//                  value={editingData.age}
//                  onChange={(e) =>
//                    setEditingData({ ...editingData, age: e.target.value })
//                  }
//                />
//                <button onClick={() => handleUpdate(holder.id)}>Save</button>
//                <button onClick={() => setEditingId(null)}>Cancel</button>
//              </>
//            ) : (
//              <>
//                <strong>ID: {holder.id}</strong> | <strong>{holder.name}</strong> (Age: {holder.age})
//                <button onClick={() => handleEdit(holder)}>Edit</button>
//                <button onClick={() => handleDelete(holder.id)}>Delete</button>
//              </>
//            )}
//          </li>
//        ))}
//      </ul>
//    </div>
//  );
//};
//
//export default Policyholders;

//working great

// src/components/Policyholders.js
//import React, { useState, useEffect } from 'react';
//import { Container, Card, CardContent, Typography, TextField, Button, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
//import { Edit, Delete } from '@mui/icons-material';
//import api from '../api/api';
//import { useNavigate } from 'react-router-dom';
//
//const Policyholders = () => {
//  const [policyholders, setPolicyholders] = useState([]);
//  const [newHolder, setNewHolder] = useState({ id: '', name: '', age: '' });
//  const [editingId, setEditingId] = useState(null);
//  const [editingData, setEditingData] = useState({ id: '', name: '', age: '' });
//  const navigate = useNavigate();
//
//  useEffect(() => {
//    fetchPolicyholders();
//  }, []);
//
//  const fetchPolicyholders = async () => {
//    try {
//      const response = await api.get('/policyholders/');
//      setPolicyholders(response.data);
//    } catch (error) {
//      if (error.response && error.response.status === 403) {
//        alert("Not authorized. Please login again.");
//        navigate('/login');
//      } else {
//        alert('Error fetching policyholders');
//      }
//      console.error(error);
//    }
//  };
//
//  const handleCreate = async (e) => {
//    e.preventDefault();
//    try {
//      const payload = { id: Number(newHolder.id), name: newHolder.name, age: Number(newHolder.age) };
//      await api.post('/policyholder/', payload);
//      setNewHolder({ id: '', name: '', age: '' });
//      fetchPolicyholders();
//    } catch (error) {
//      console.error(error);
//      alert('Error creating policyholder');
//    }
//  };
//
//  const handleEdit = (holder) => {
//    setEditingId(holder.id);
//    setEditingData({ id: holder.id, name: holder.name, age: holder.age });
//  };
//
//  const handleUpdate = async (id) => {
//    try {
//      const payload = { id: Number(editingData.id), name: editingData.name, age: Number(editingData.age) };
//      await api.put(`/policyholder/${id}`, payload);
//      setEditingId(null);
//      fetchPolicyholders();
//    } catch (error) {
//      console.error(error);
//      alert('Error updating policyholder');
//    }
//  };
//
//  const handleDelete = async (id) => {
//    try {
//      await api.delete(`/policyholder/${id}`);
//      fetchPolicyholders();
//    } catch (error) {
//      console.error(error);
//      alert('Error deleting policyholder');
//    }
//  };
//
//  return (
//    <Container sx={{ mt: 4 }}>
//      <Card>
//        <CardContent>
//          <Typography variant="h4" gutterBottom>Policyholders</Typography>
//          <form onSubmit={handleCreate}>
//            <Grid container spacing={2}>
//              <Grid item xs={12} sm={3}>
//                <TextField
//                  label="ID"
//                  type="number"
//                  value={newHolder.id}
//                  onChange={(e) => setNewHolder({ ...newHolder, id: e.target.value })}
//                  fullWidth
//                  required
//                />
//              </Grid>
//              <Grid item xs={12} sm={4}>
//                <TextField
//                  label="Name"
//                  value={newHolder.name}
//                  onChange={(e) => setNewHolder({ ...newHolder, name: e.target.value })}
//                  fullWidth
//                  required
//                />
//              </Grid>
//              <Grid item xs={12} sm={3}>
//                <TextField
//                  label="Age"
//                  type="number"
//                  value={newHolder.age}
//                  onChange={(e) => setNewHolder({ ...newHolder, age: e.target.value })}
//                  fullWidth
//                  required
//                />
//              </Grid>
//              <Grid item xs={12} sm={2}>
//                <Button type="submit" variant="contained" color="primary" fullWidth>
//                  Create
//                </Button>
//              </Grid>
//            </Grid>
//          </form>
//          <Typography variant="h5" sx={{ mt: 4 }}>Existing Policyholders</Typography>
//          <List>
//            {policyholders.map((holder) => (
//              <ListItem key={holder.id} secondaryAction={
//                <>
//                  <IconButton edge="end" onClick={() => handleEdit(holder)}>
//                    <Edit />
//                  </IconButton>
//                  <IconButton edge="end" onClick={() => handleDelete(holder.id)}>
//                    <Delete />
//                  </IconButton>
//                </>
//              }>
//                {editingId === holder.id ? (
//                  <Grid container spacing={2} alignItems="center">
//                    <Grid item xs={3}>
//                      <TextField
//                        label="ID"
//                        type="number"
//                        value={editingData.id}
//                        onChange={(e) => setEditingData({ ...editingData, id: e.target.value })}
//                        fullWidth
//                      />
//                    </Grid>
//                    <Grid item xs={4}>
//                      <TextField
//                        label="Name"
//                        value={editingData.name}
//                        onChange={(e) => setEditingData({ ...editingData, name: e.target.value })}
//                        fullWidth
//                      />
//                    </Grid>
//                    <Grid item xs={3}>
//                      <TextField
//                        label="Age"
//                        type="number"
//                        value={editingData.age}
//                        onChange={(e) => setEditingData({ ...editingData, age: e.target.value })}
//                        fullWidth
//                      />
//                    </Grid>
//                    <Grid item xs={2}>
//                      <Button variant="contained" onClick={() => handleUpdate(holder.id)}>
//                        Save
//                      </Button>
//                      <Button variant="text" onClick={() => setEditingId(null)}>
//                        Cancel
//                      </Button>
//                    </Grid>
//                  </Grid>
//                ) : (
//                  <ListItemText primary={`ID: ${holder.id} | ${holder.name} (Age: ${holder.age})`} />
//                )}
//              </ListItem>
//            ))}
//          </List>
//        </CardContent>
//      </Card>
//    </Container>
//  );
//};
//
//export default Policyholders;
//



// src/components/Policyholders.js
import React, { useState, useEffect, useCallback } from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const Policyholders = () => {
  const [policyholders, setPolicyholders] = useState([]);
  const [newHolder, setNewHolder] = useState({ id: '', name: '', age: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ id: '', name: '', age: '' });
  const navigate = useNavigate();

  // Wrap fetchPolicyholders with useCallback so that it can be safely added to the dependency array
  const fetchPolicyholders = useCallback(async () => {
    try {
      const response = await api.get('/policyholders/');
      setPolicyholders(response.data);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("Not authorized. Please login again.");
        navigate('/login');
      } else {
        alert('Error fetching policyholders');
      }
      console.error(error);
    }
  }, [navigate]);

  useEffect(() => {
    fetchPolicyholders();
  }, [fetchPolicyholders]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const payload = { id: Number(newHolder.id), name: newHolder.name, age: Number(newHolder.age) };
      await api.post('/policyholder/', payload);
      setNewHolder({ id: '', name: '', age: '' });
      fetchPolicyholders();
    } catch (error) {
      console.error(error);
      alert('Error creating policyholder');
    }
  };

  const handleEdit = (holder) => {
    setEditingId(holder.id);
    setEditingData({ id: holder.id, name: holder.name, age: holder.age });
  };

  const handleUpdate = async (id) => {
    try {
      const payload = { id: Number(editingData.id), name: editingData.name, age: Number(editingData.age) };
      await api.put(`/policyholder/${id}`, payload);
      setEditingId(null);
      fetchPolicyholders();
    } catch (error) {
      console.error(error);
      alert('Error updating policyholder');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/policyholder/${id}`);
      fetchPolicyholders();
    } catch (error) {
      console.error(error);
      alert('Error deleting policyholder');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Policyholders</Typography>
          <form onSubmit={handleCreate}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="ID"
                  type="number"
                  value={newHolder.id}
                  onChange={(e) => setNewHolder({ ...newHolder, id: e.target.value })}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Name"
                  value={newHolder.name}
                  onChange={(e) => setNewHolder({ ...newHolder, name: e.target.value })}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Age"
                  type="number"
                  value={newHolder.age}
                  onChange={(e) => setNewHolder({ ...newHolder, age: e.target.value })}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography variant="h5" sx={{ mt: 4 }}>Existing Policyholders</Typography>
          <List>
            {policyholders.map((holder) => (
              <ListItem key={holder.id} secondaryAction={
                <>
                  <IconButton edge="end" onClick={() => handleEdit(holder)}>
                    <Edit />
                  </IconButton>
                  <IconButton edge="end" onClick={() => handleDelete(holder.id)}>
                    <Delete />
                  </IconButton>
                </>
              }>
                {editingId === holder.id ? (
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <TextField
                        label="ID"
                        type="number"
                        value={editingData.id}
                        onChange={(e) => setEditingData({ ...editingData, id: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        label="Name"
                        value={editingData.name}
                        onChange={(e) => setEditingData({ ...editingData, name: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        label="Age"
                        type="number"
                        value={editingData.age}
                        onChange={(e) => setEditingData({ ...editingData, age: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="contained" onClick={() => handleUpdate(holder.id)}>
                        Save
                      </Button>
                      <Button variant="text" onClick={() => setEditingId(null)}>
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                ) : (
                  <ListItemText primary={`ID: ${holder.id} | ${holder.name} (Age: ${holder.age})`} />
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Policyholders;

