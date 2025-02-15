//// src/components/Claims.js
//import React, { useState, useEffect } from 'react';
//import api from '../api/api';
//
//const Claims = () => {
//  const [claims, setClaims] = useState([]);
//  const [newClaim, setNewClaim] = useState({ id: '', policy_id: '', amount_claimed: '', status: '' });
//  const [editingId, setEditingId] = useState(null);
//  const [editingData, setEditingData] = useState({ id: '', policy_id: '', amount_claimed: '', status: '' });
//
//  useEffect(() => {
//    fetchClaims();
//  }, []);
//
//  const fetchClaims = async () => {
//    try {
//      const response = await api.get('/claims/');
//      setClaims(response.data);
//    } catch (error) {
//      console.error(error);
//      alert('Error fetching claims');
//    }
//  };
//
//  const handleCreate = async (e) => {
//    e.preventDefault();
//    try {
//      const payload = {
//        id: Number(newClaim.id),
//        policy_id: Number(newClaim.policy_id),
//        amount_claimed: Number(newClaim.amount_claimed),
//        status: newClaim.status,
//      };
//      await api.post('/claim/', payload);
//      setNewClaim({ id: '', policy_id: '', amount_claimed: '', status: '' });
//      fetchClaims();
//    } catch (error) {
//      console.error(error);
//      alert('Error creating claim');
//    }
//  };
//
//  const handleEdit = (claim) => {
//    setEditingId(claim.id);
//    setEditingData({
//      id: claim.id,
//      policy_id: claim.policy_id,
//      amount_claimed: claim.amount_claimed,
//      status: claim.status,
//    });
//  };
//
//  const handleUpdate = async (id) => {
//    try {
//      const payload = {
//        id: Number(editingData.id),
//        policy_id: Number(editingData.policy_id),
//        amount_claimed: Number(editingData.amount_claimed),
//        status: editingData.status,
//      };
//      await api.put(`/claim/${id}`, payload);
//      setEditingId(null);
//      fetchClaims();
//    } catch (error) {
//      console.error(error);
//      alert('Error updating claim');
//    }
//  };
//
//  const handleDelete = async (id) => {
//    try {
//      await api.delete(`/claim/${id}`);
//      fetchClaims();
//    } catch (error) {
//      console.error(error);
//      alert('Error deleting claim');
//    }
//  };
//
//  return (
//    <div style={{ padding: '1rem' }}>
//      <h1>Claims</h1>
//      <form onSubmit={handleCreate}>
//        <h2>Create Claim</h2>
//        <input
//          type="number"
//          placeholder="ID"
//          value={newClaim.id}
//          onChange={(e) => setNewClaim({ ...newClaim, id: e.target.value })}
//          required
//        />
//        <input
//          type="number"
//          placeholder="Policy ID"
//          value={newClaim.policy_id}
//          onChange={(e) => setNewClaim({ ...newClaim, policy_id: e.target.value })}
//          required
//        />
//        <input
//          type="number"
//          placeholder="Amount Claimed"
//          value={newClaim.amount_claimed}
//          onChange={(e) => setNewClaim({ ...newClaim, amount_claimed: e.target.value })}
//          required
//        />
//        <input
//          type="text"
//          placeholder="Status"
//          value={newClaim.status}
//          onChange={(e) => setNewClaim({ ...newClaim, status: e.target.value })}
//          required
//        />
//        <button type="submit">Create</button>
//      </form>
//      <hr />
//      <h2>Existing Claims</h2>
//      <ul>
//        {claims.map((claim) => (
//          <li key={claim.id} style={{ marginBottom: '1rem' }}>
//            {editingId === claim.id ? (
//              <>
//                <input
//                  type="number"
//                  value={editingData.id}
//                  onChange={(e) => setEditingData({ ...editingData, id: e.target.value })}
//                />
//                <input
//                  type="number"
//                  value={editingData.policy_id}
//                  onChange={(e) => setEditingData({ ...editingData, policy_id: e.target.value })}
//                />
//                <input
//                  type="number"
//                  value={editingData.amount_claimed}
//                  onChange={(e) => setEditingData({ ...editingData, amount_claimed: e.target.value })}
//                />
//                <input
//                  type="text"
//                  value={editingData.status}
//                  onChange={(e) => setEditingData({ ...editingData, status: e.target.value })}
//                />
//                <button onClick={() => handleUpdate(claim.id)}>Save</button>
//                <button onClick={() => setEditingId(null)}>Cancel</button>
//              </>
//            ) : (
//              <>
//                <div>
//                  <strong>ID: {claim.id}</strong> | Policy ID: {claim.policy_id} | Amount Claimed: {claim.amount_claimed} | Status: {claim.status}
//                </div>
//                <button onClick={() => handleEdit(claim)}>Edit</button>
//                <button onClick={() => handleDelete(claim.id)}>Delete</button>
//              </>
//            )}
//          </li>
//        ))}
//      </ul>
//    </div>
//  );
//};
//
//export default Claims;



// src/components/Claims.js
import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const Claims = () => {
  const [claims, setClaims] = useState([]);
  const [newClaim, setNewClaim] = useState({ id: '', policy_id: '', amount_claimed: '', status: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ id: '', policy_id: '', amount_claimed: '', status: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchClaims();
  }, []);

  const fetchClaims = async () => {
    try {
      const response = await api.get('/claims/');
      setClaims(response.data);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("Not authorized. Please login again.");
        navigate('/login');
      } else {
        alert('Error fetching claims');
      }
      console.error(error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        id: Number(newClaim.id),
        policy_id: Number(newClaim.policy_id),
        amount_claimed: Number(newClaim.amount_claimed),
        status: newClaim.status,
      };
      await api.post('/claim/', payload);
      setNewClaim({ id: '', policy_id: '', amount_claimed: '', status: '' });
      fetchClaims();
    } catch (error) {
      console.error(error);
      alert('Error creating claim');
    }
  };

  const handleEdit = (claim) => {
    setEditingId(claim.id);
    setEditingData({
      id: claim.id,
      policy_id: claim.policy_id,
      amount_claimed: claim.amount_claimed,
      status: claim.status,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const payload = {
        id: Number(editingData.id),
        policy_id: Number(editingData.policy_id),
        amount_claimed: Number(editingData.amount_claimed),
        status: editingData.status,
      };
      await api.put(`/claim/${id}`, payload);
      setEditingId(null);
      fetchClaims();
    } catch (error) {
      console.error(error);
      alert('Error updating claim');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/claim/${id}`);
      fetchClaims();
    } catch (error) {
      console.error(error);
      alert('Error deleting claim');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Claims</Typography>
          <form onSubmit={handleCreate}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <TextField
                  label="ID"
                  type="number"
                  value={newClaim.id}
                  onChange={(e) => setNewClaim({ ...newClaim, id: e.target.value })}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Policy ID"
                  type="number"
                  value={newClaim.policy_id}
                  onChange={(e) => setNewClaim({ ...newClaim, policy_id: e.target.value })}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Amount Claimed"
                  type="number"
                  value={newClaim.amount_claimed}
                  onChange={(e) => setNewClaim({ ...newClaim, amount_claimed: e.target.value })}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  label="Status"
                  value={newClaim.status}
                  onChange={(e) => setNewClaim({ ...newClaim, status: e.target.value })}
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
          <Typography variant="h5" sx={{ mt: 4 }}>Existing Claims</Typography>
          <List>
            {claims.map((claim) => (
              <ListItem key={claim.id} secondaryAction={
                <>
                  <IconButton edge="end" onClick={() => handleEdit(claim)}>
                    <Edit />
                  </IconButton>
                  <IconButton edge="end" onClick={() => handleDelete(claim.id)}>
                    <Delete />
                  </IconButton>
                </>
              }>
                {editingId === claim.id ? (
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
                        label="Policy ID"
                        type="number"
                        value={editingData.policy_id}
                        onChange={(e) => setEditingData({ ...editingData, policy_id: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        label="Amount Claimed"
                        type="number"
                        value={editingData.amount_claimed}
                        onChange={(e) => setEditingData({ ...editingData, amount_claimed: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        label="Status"
                        value={editingData.status}
                        onChange={(e) => setEditingData({ ...editingData, status: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="contained" onClick={() => handleUpdate(claim.id)}>
                        Save
                      </Button>
                      <Button variant="text" onClick={() => setEditingId(null)}>
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                ) : (
                  <ListItemText primary={`ID: ${claim.id} | Policy ID: ${claim.policy_id} | Amount Claimed: ${claim.amount_claimed} | Status: ${claim.status}`} />
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Claims;


