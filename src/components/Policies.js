import React, { useState, useEffect } from 'react';
import api from '../api/api';

const Policies = () => {
  const [policies, setPolicies] = useState([]);
  const [newPolicy, setNewPolicy] = useState({ id: '', policyholder_id: '', type: '', coverage_amount: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ id: '', policyholder_id: '', type: '', coverage_amount: '' });

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const response = await api.get('/policies/');
      setPolicies(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching policies');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // Convert id, policyholder_id, and coverage_amount to numbers if needed.
      const payload = {
        id: Number(newPolicy.id),
        policyholder_id: Number(newPolicy.policyholder_id),
        type: newPolicy.type,
        coverage_amount: Number(newPolicy.coverage_amount)
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
    <div style={{ padding: '1rem' }}>
      <h1>Policies</h1>
      <form onSubmit={handleCreate}>
        <h2>Create Policy</h2>
        <input
          type="number"
          placeholder="ID"
          value={newPolicy.id}
          onChange={(e) => setNewPolicy({ ...newPolicy, id: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Policyholder ID"
          value={newPolicy.policyholder_id}
          onChange={(e) => setNewPolicy({ ...newPolicy, policyholder_id: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={newPolicy.type}
          onChange={(e) => setNewPolicy({ ...newPolicy, type: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Coverage Amount"
          value={newPolicy.coverage_amount}
          onChange={(e) => setNewPolicy({ ...newPolicy, coverage_amount: e.target.value })}
          required
        />
        <button type="submit">Create</button>
      </form>
      <hr />
      <h2>Existing Policies</h2>
      <ul>
        {policies.map((policy) => (
          <li key={policy.id} style={{ marginBottom: '1rem' }}>
            {editingId === policy.id ? (
              <>
                <input
                  type="number"
                  value={editingData.id}
                  onChange={(e) => setEditingData({ ...editingData, id: e.target.value })}
                />
                <input
                  type="number"
                  value={editingData.policyholder_id}
                  onChange={(e) => setEditingData({ ...editingData, policyholder_id: e.target.value })}
                />
                <input
                  type="text"
                  value={editingData.type}
                  onChange={(e) => setEditingData({ ...editingData, type: e.target.value })}
                />
                <input
                  type="number"
                  value={editingData.coverage_amount}
                  onChange={(e) => setEditingData({ ...editingData, coverage_amount: e.target.value })}
                />
                <button onClick={() => handleUpdate(policy.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <div>
                  <strong>ID: {policy.id}</strong> | Policyholder ID: {policy.policyholder_id} | Type: {policy.type} | Coverage: {policy.coverage_amount}
                </div>
                <button onClick={() => handleEdit(policy)}>Edit</button>
                <button onClick={() => handleDelete(policy.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Policies;
