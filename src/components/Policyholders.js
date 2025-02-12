// src/components/Policyholders.js
import React, { useState, useEffect } from 'react';
import api from '../api/api';

const Policyholders = () => {
  const [policyholders, setPolicyholders] = useState([]);
  const [newHolder, setNewHolder] = useState({ id: '', name: '', age: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ id: '', name: '', age: '' });

  useEffect(() => {
    fetchPolicyholders();
  }, []);

  const fetchPolicyholders = async () => {
    try {
      const response = await api.get('/policyholders/');
      setPolicyholders(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching policyholders');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // The backend may auto-generate the id so we only send name and age.
      const payload = {
        id: Number(newHolder.id),
        name: newHolder.name,
        age: Number(newHolder.age)
      };
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
      const payload = {
          id: Number(editingData.id),
          name: editingData.name,
          age: Number(editingData.age)
      };
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
    <div style={{ padding: '1rem' }}>
      <h1>Policyholders</h1>
      <form onSubmit={handleCreate}>
        <h2>Create Policyholder</h2>
        <input
          type="number"
          placeholder="ID"
          value={newHolder.id}
          onChange={(e) => setNewHolder({ ...newHolder, id: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={newHolder.name}
          onChange={(e) => setNewHolder({ ...newHolder, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={newHolder.age}
          onChange={(e) => setNewHolder({ ...newHolder, age: e.target.value })}
          required
        />
        <button type="submit">Create</button>
      </form>
      <hr />
      <h2>Existing Policyholders</h2>
      <ul>
        {policyholders.map((holder) => (
          <li key={holder.id} style={{ marginBottom: '1rem' }}>
            {editingId === holder.id ? (
              <>
                <input
                  type="number"
                  value={editingData.id}
                  onChange={(e) =>
                    setEditingData({ ...editingData, id: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editingData.name}
                  onChange={(e) =>
                    setEditingData({ ...editingData, name: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editingData.age}
                  onChange={(e) =>
                    setEditingData({ ...editingData, age: e.target.value })
                  }
                />
                <button onClick={() => handleUpdate(holder.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <strong>ID: {holder.id}</strong> | <strong>{holder.name}</strong> (Age: {holder.age})
                <button onClick={() => handleEdit(holder)}>Edit</button>
                <button onClick={() => handleDelete(holder.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Policyholders;
