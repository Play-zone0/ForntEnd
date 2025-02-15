//import React, { useState, useEffect } from 'react';
//import api from '../api/api';
//
//const Policies = () => {
//  const [policies, setPolicies] = useState([]);
//  const [newPolicy, setNewPolicy] = useState({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
//  const [editingId, setEditingId] = useState(null);
//  const [editingData, setEditingData] = useState({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
//
//  useEffect(() => {
//    fetchPolicies();
//  }, []);
//
//  const fetchPolicies = async () => {
//    try {
//      const response = await api.get('/policies/');
//      setPolicies(response.data);
//    } catch (error) {
//      console.error(error);
//      alert('Error fetching policies');
//    }
//  };
//
//  const handleCreate = async (e) => {
//    e.preventDefault();
//    try {
//      // Convert id, policyholder_id, and coverage_amount to numbers if needed.
//      const payload = {
//        id: Number(newPolicy.id),
//        policyholder_id: Number(newPolicy.policyholder_id),
//        type: newPolicy.type,
//        coverage_amount: Number(newPolicy.coverage_amount)
//      };
//      await api.post('/policy/', payload);
//      setNewPolicy({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
//      fetchPolicies();
//    } catch (error) {
//      console.error(error);
//      alert('Error creating policy');
//    }
//  };
//
//  const handleEdit = (policy) => {
//    setEditingId(policy.id);
//    setEditingData({
//      id: policy.id,
//      policyholder_id: policy.policyholder_id,
//      type: policy.type,
//      coverage_amount: policy.coverage_amount,
//    });
//  };
//
//  const handleUpdate = async (id) => {
//    try {
//      const payload = {
//        id: Number(editingData.id),
//        policyholder_id: Number(editingData.policyholder_id),
//        type: editingData.type,
//        coverage_amount: Number(editingData.coverage_amount),
//      };
//      await api.put(`/policy/${id}`, payload);
//      setEditingId(null);
//      fetchPolicies();
//    } catch (error) {
//      console.error(error);
//      alert('Error updating policy');
//    }
//  };
//
//  const handleDelete = async (id) => {
//    try {
//      await api.delete(`/policy/${id}`);
//      fetchPolicies();
//    } catch (error) {
//      console.error(error);
//      alert('Error deleting policy');
//    }
//  };
//
//  return (
//    <div style={{ padding: '1rem' }}>
//      <h1>Policies</h1>
//      <form onSubmit={handleCreate}>
//        <h2>Create Policy</h2>
//        <input
//          type="number"
//          placeholder="ID"
//          value={newPolicy.id}
//          onChange={(e) => setNewPolicy({ ...newPolicy, id: e.target.value })}
//          required
//        />
//        <input
//          type="number"
//          placeholder="Policyholder ID"
//          value={newPolicy.policyholder_id}
//          onChange={(e) => setNewPolicy({ ...newPolicy, policyholder_id: e.target.value })}
//          required
//        />
//        <input
//          type="text"
//          placeholder="Type"
//          value={newPolicy.type}
//          onChange={(e) => setNewPolicy({ ...newPolicy, type: e.target.value })}
//          required
//        />
//        <input
//          type="number"
//          placeholder="Coverage Amount"
//          value={newPolicy.coverage_amount}
//          onChange={(e) => setNewPolicy({ ...newPolicy, coverage_amount: e.target.value })}
//          required
//        />
//        <button type="submit">Create</button>
//      </form>
//      <hr />
//      <h2>Existing Policies</h2>
//      <ul>
//        {policies.map((policy) => (
//          <li key={policy.id} style={{ marginBottom: '1rem' }}>
//            {editingId === policy.id ? (
//              <>
//                <input
//                  type="number"
//                  value={editingData.id}
//                  onChange={(e) => setEditingData({ ...editingData, id: e.target.value })}
//                />
//                <input
//                  type="number"
//                  value={editingData.policyholder_id}
//                  onChange={(e) => setEditingData({ ...editingData, policyholder_id: e.target.value })}
//                />
//                <input
//                  type="text"
//                  value={editingData.type}
//                  onChange={(e) => setEditingData({ ...editingData, type: e.target.value })}
//                />
//                <input
//                  type="number"
//                  value={editingData.coverage_amount}
//                  onChange={(e) => setEditingData({ ...editingData, coverage_amount: e.target.value })}
//                />
//                <button onClick={() => handleUpdate(policy.id)}>Save</button>
//                <button onClick={() => setEditingId(null)}>Cancel</button>
//              </>
//            ) : (
//              <>
//                <div>
//                  <strong>ID: {policy.id}</strong> | Policyholder ID: {policy.policyholder_id} | Type: {policy.type} | Coverage: {policy.coverage_amount}
//                </div>
//                <button onClick={() => handleEdit(policy)}>Edit</button>
//                <button onClick={() => handleDelete(policy.id)}>Delete</button>
//              </>
//            )}
//          </li>
//        ))}
//      </ul>
//    </div>
//  );
//};
//
//export default Policies;


// working great

// src/components/Policies.js
//import React, { useState, useEffect } from 'react';
//import { Container, Card, CardContent, Typography, TextField, Button, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
//import { Edit, Delete } from '@mui/icons-material';
//import api from '../api/api';
//import { useNavigate } from 'react-router-dom';
//
//const Policies = () => {
//  const [policies, setPolicies] = useState([]);
//  const [newPolicy, setNewPolicy] = useState({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
//  const [editingId, setEditingId] = useState(null);
//  const [editingData, setEditingData] = useState({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
//  const navigate = useNavigate();
//
//  useEffect(() => {
//    fetchPolicies();
//  }, []);
//
//  const fetchPolicies = async () => {
//    try {
//      const response = await api.get('/policies/');
//      setPolicies(response.data);
//    } catch (error) {
//      if (error.response && error.response.status === 403) {
//        alert("Not authorized. Please login again.");
//        navigate('/login');
//      } else {
//        alert('Error fetching policies');
//      }
//      console.error(error);
//    }
//  };
//
//  const handleCreate = async (e) => {
//    e.preventDefault();
//    try {
//      const payload = {
//        id: Number(newPolicy.id),
//        policyholder_id: Number(newPolicy.policyholder_id),
//        type: newPolicy.type,
//        coverage_amount: Number(newPolicy.coverage_amount),
//      };
//      await api.post('/policy/', payload);
//      setNewPolicy({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
//      fetchPolicies();
//    } catch (error) {
//      console.error(error);
//      alert('Error creating policy');
//    }
//  };
//
//  const handleEdit = (policy) => {
//    setEditingId(policy.id);
//    setEditingData({
//      id: policy.id,
//      policyholder_id: policy.policyholder_id,
//      type: policy.type,
//      coverage_amount: policy.coverage_amount,
//    });
//  };
//
//  const handleUpdate = async (id) => {
//    try {
//      const payload = {
//        id: Number(editingData.id),
//        policyholder_id: Number(editingData.policyholder_id),
//        type: editingData.type,
//        coverage_amount: Number(editingData.coverage_amount),
//      };
//      await api.put(`/policy/${id}`, payload);
//      setEditingId(null);
//      fetchPolicies();
//    } catch (error) {
//      console.error(error);
//      alert('Error updating policy');
//    }
//  };
//
//  const handleDelete = async (id) => {
//    try {
//      await api.delete(`/policy/${id}`);
//      fetchPolicies();
//    } catch (error) {
//      console.error(error);
//      alert('Error deleting policy');
//    }
//  };
//
//  return (
//    <Container sx={{ mt: 4 }}>
//      <Card>
//        <CardContent>
//          <Typography variant="h4" gutterBottom>Policies</Typography>
//          <form onSubmit={handleCreate}>
//            <Grid container spacing={2}>
//              <Grid item xs={12} sm={2}>
//                <TextField
//                  label="ID"
//                  type="number"
//                  value={newPolicy.id}
//                  onChange={(e) => setNewPolicy({ ...newPolicy, id: e.target.value })}
//                  fullWidth
//                  required
//                />
//              </Grid>
//              <Grid item xs={12} sm={3}>
//                <TextField
//                  label="Policyholder ID"
//                  type="number"
//                  value={newPolicy.policyholder_id}
//                  onChange={(e) => setNewPolicy({ ...newPolicy, policyholder_id: e.target.value })}
//                  fullWidth
//                  required
//                />
//              </Grid>
//              <Grid item xs={12} sm={3}>
//                <TextField
//                  label="Type"
//                  value={newPolicy.type}
//                  onChange={(e) => setNewPolicy({ ...newPolicy, type: e.target.value })}
//                  fullWidth
//                  required
//                />
//              </Grid>
//              <Grid item xs={12} sm={2}>
//                <TextField
//                  label="Coverage Amount"
//                  type="number"
//                  value={newPolicy.coverage_amount}
//                  onChange={(e) => setNewPolicy({ ...newPolicy, coverage_amount: e.target.value })}
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
//          <Typography variant="h5" sx={{ mt: 4 }}>Existing Policies</Typography>
//          <List>
//            {policies.map((policy) => (
//              <ListItem key={policy.id} secondaryAction={
//                <>
//                  <IconButton edge="end" onClick={() => handleEdit(policy)}>
//                    <Edit />
//                  </IconButton>
//                  <IconButton edge="end" onClick={() => handleDelete(policy.id)}>
//                    <Delete />
//                  </IconButton>
//                </>
//              }>
//                {editingId === policy.id ? (
//                  <Grid container spacing={2} alignItems="center">
//                    <Grid item xs={2}>
//                      <TextField
//                        label="ID"
//                        type="number"
//                        value={editingData.id}
//                        onChange={(e) => setEditingData({ ...editingData, id: e.target.value })}
//                        fullWidth
//                      />
//                    </Grid>
//                    <Grid item xs={3}>
//                      <TextField
//                        label="Policyholder ID"
//                        type="number"
//                        value={editingData.policyholder_id}
//                        onChange={(e) => setEditingData({ ...editingData, policyholder_id: e.target.value })}
//                        fullWidth
//                      />
//                    </Grid>
//                    <Grid item xs={3}>
//                      <TextField
//                        label="Type"
//                        value={editingData.type}
//                        onChange={(e) => setEditingData({ ...editingData, type: e.target.value })}
//                        fullWidth
//                      />
//                    </Grid>
//                    <Grid item xs={2}>
//                      <TextField
//                        label="Coverage"
//                        type="number"
//                        value={editingData.coverage_amount}
//                        onChange={(e) => setEditingData({ ...editingData, coverage_amount: e.target.value })}
//                        fullWidth
//                      />
//                    </Grid>
//                    <Grid item xs={2}>
//                      <Button variant="contained" onClick={() => handleUpdate(policy.id)}>
//                        Save
//                      </Button>
//                      <Button variant="text" onClick={() => setEditingId(null)}>
//                        Cancel
//                      </Button>
//                    </Grid>
//                  </Grid>
//                ) : (
//                  <ListItemText primary={`ID: ${policy.id} | Policyholder ID: ${policy.policyholder_id} | Type: ${policy.type} | Coverage: ${policy.coverage_amount}`} />
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
//export default Policies;




// src/components/Policies.js
import React, { useState, useEffect, useCallback } from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const Policies = () => {
  const [policies, setPolicies] = useState([]);
  const [newPolicy, setNewPolicy] = useState({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
  const navigate = useNavigate();

  const fetchPolicies = useCallback(async () => {
    try {
      const response = await api.get('/policies/');
      setPolicies(response.data);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("Not authorized. Please login again.");
        navigate('/login');
      } else {
        alert('Error fetching policies');
      }
      console.error(error);
    }
  }, [navigate]);

  useEffect(() => {
    fetchPolicies();
  }, [fetchPolicies]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        id: Number(newPolicy.id),
        policyholder_id: Number(newPolicy.policyholder_id),
        type: newPolicy.type,
        coverage_amount: Number(newPolicy.coverage_amount),
      };
      await api.post('/policy/', payload);
      setNewPolicy({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
      fetchPolicies();
    } catch (error) {
      console.error(error);
      alert('Error creating policy');
    }
  };

  const handleEdit = (policy) => {
    setEditingId(policy.id);
    setEditingData({
      id: policy.id,
      policyholder_id: policy.policyholder_id,
      type: policy.type,
      coverage_amount: policy.coverage_amount,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const payload = {
        id: Number(editingData.id),
        policyholder_id: Number(editingData.policyholder_id),
        type: editingData.type,
        coverage_amount: Number(editingData.coverage_amount),
      };
      await api.put(`/policy/${id}`, payload);
      setEditingId(null);
      fetchPolicies();
    } catch (error) {
      console.error(error);
      alert('Error updating policy');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/policy/${id}`);
      fetchPolicies();
    } catch (error) {
      console.error(error);
      alert('Error deleting policy');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Policies</Typography>
          <form onSubmit={handleCreate}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <TextField
                  label="ID"
                  type="number"
                  value={newPolicy.id}
                  onChange={(e) => setNewPolicy({ ...newPolicy, id: e.target.value })}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Policyholder ID"
                  type="number"
                  value={newPolicy.policyholder_id}
                  onChange={(e) => setNewPolicy({ ...newPolicy, policyholder_id: e.target.value })}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Type"
                  value={newPolicy.type}
                  onChange={(e) => setNewPolicy({ ...newPolicy, type: e.target.value })}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  label="Coverage Amount"
                  type="number"
                  value={newPolicy.coverage_amount}
                  onChange={(e) => setNewPolicy({ ...newPolicy, coverage_amount: e.target.value })}
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
          <Typography variant="h5" sx={{ mt: 4 }}>Existing Policies</Typography>
          <List>
            {policies.map((policy) => (
              <ListItem key={policy.id} secondaryAction={
                <>
                  <IconButton edge="end" onClick={() => handleEdit(policy)}>
                    <Edit />
                  </IconButton>
                  <IconButton edge="end" onClick={() => handleDelete(policy.id)}>
                    <Delete />
                  </IconButton>
                </>
              }>
                {editingId === policy.id ? (
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2}>
                      <TextField
                        label="ID"
                        type="number"
                        value={editingData.id}
                        onChange={(e) => setEditingData({ ...editingData, id: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        label="Policyholder ID"
                        type="number"
                        value={editingData.policyholder_id}
                        onChange={(e) => setEditingData({ ...editingData, policyholder_id: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        label="Type"
                        value={editingData.type}
                        onChange={(e) => setEditingData({ ...editingData, type: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        label="Coverage"
                        type="number"
                        value={editingData.coverage_amount}
                        onChange={(e) => setEditingData({ ...editingData, coverage_amount: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="contained" onClick={() => handleUpdate(policy.id)}>
                        Save
                      </Button>
                      <Button variant="text" onClick={() => setEditingId(null)}>
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                ) : (
                  <ListItemText primary={`ID: ${policy.id} | Policyholder ID: ${policy.policyholder_id} | Type: ${policy.type} | Coverage: ${policy.coverage_amount}`} />
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Policies;

